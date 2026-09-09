const express = require("express");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// ========================================
// CONFIG
// ========================================

const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const TOKEN = process.env.GITHUB_TOKEN;

const allowedExtensions = [".cpp", ".h", ".hpp"];


// ========================================
// CHECK ENVIRONMENT
// ========================================

console.log("================================");
console.log("Starting ProjectBuildersPH Server");
console.log("================================");

console.log("GitHub Owner:", OWNER);
console.log("GitHub Repo:", REPO);
console.log(
    "GitHub Token:",
    TOKEN ? "Loaded" : "MISSING"
);

if (!OWNER || !REPO || !TOKEN) {
    console.error(
        "ERROR: GitHub environment variables are missing."
    );
}


// ========================================
// GITHUB HEADERS
// ========================================

function githubHeaders() {
    return {
        "Accept":
            "application/vnd.github+json",

        "Authorization":
            `Bearer ${TOKEN}`,

        "X-GitHub-Api-Version":
            "2022-11-28",

        "Content-Type":
            "application/json"
    };
}


// ========================================
// MULTER
// ========================================

const upload = multer({

    storage:
        multer.memoryStorage(),

    fileFilter:
        (req, file, cb) => {

            const filename =
                file.originalname.toLowerCase();

            const valid =
                allowedExtensions.some(
                    extension =>
                        filename.endsWith(extension)
                );

            if (!valid) {

                return cb(
                    new Error(
                        "Only .cpp, .h and .hpp files are allowed."
                    )
                );

            }

            cb(null, true);

        }

});


// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {

    res.send(
        "ProjectBuildersPH Backend is running!"
    );

});


// ========================================
// GET FILES FROM GITHUB
// ========================================

app.get("/api/files", async (req, res) => {

    console.log("");
    console.log("GET /api/files");

    try {

        const url =
            `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

        console.log(
            "GitHub URL:",
            url
        );


        const response =
            await fetch(
                url,
                {
                    method: "GET",
                    headers:
                        githubHeaders()
                }
            );


        console.log(
            "GitHub status:",
            response.status
        );


        const data =
            await response.json();


        if (!response.ok) {

            console.error(
                "GitHub error:",
                data
            );

            return res.status(
                response.status
            ).json({

                message:
                    "GitHub returned an error.",

                error:
                    data.message

            });

        }


        if (!Array.isArray(data)) {

            console.error(
                "Unexpected GitHub response:",
                data
            );

            return res.status(500).json({

                message:
                    "GitHub did not return a file list."

            });

        }


        const files =
            data

                .filter(
                    item =>
                        item.type === "file"
                )

                .filter(item => {

                    const name =
                        item.name.toLowerCase();

                    return (
                        name.endsWith(".cpp") ||
                        name.endsWith(".h") ||
                        name.endsWith(".hpp")
                    );

                })

                .map(item => ({

                    name:
                        item.name,

                    path:
                        item.path,

                    url:
                        item.html_url,

                    downloadUrl:
                        item.download_url

                }));


        console.log(
            "C++ files found:",
            files.length
        );


        console.log(
            files
        );


        res.json({

            files:
                files

        });

    }

    catch (error) {

        console.error(
            "ERROR reading GitHub:",
            error
        );

        res.status(500).json({

            message:
                "Server error while reading GitHub.",

            error:
                error.message

        });

    }

});


// ========================================
// UPLOAD FILE
// ========================================

app.post(
    "/api/upload",
    upload.single("file"),
    async (req, res) => {

        console.log("");
        console.log("================================");
        console.log("POST /api/upload");
        console.log("================================");

        try {

            // Check file
            if (!req.file) {

                return res.status(400).json({
                    message: "No file uploaded."
                });

            }


            const filename =
                req.file.originalname;

            console.log(
                "File received:",
                filename
            );


            // ========================================
            // VALIDATE ENVIRONMENT
            // ========================================

            if (!OWNER || !REPO || !TOKEN) {

                console.error(
                    "GitHub environment variables are missing."
                );

                return res.status(500).json({

                    message:
                        "GitHub configuration is missing."

                });

            }


            // ========================================
            // FILE PATH
            // ========================================
            //
            // Save directly in:
            //
            // Cpp/sss.cpp
            //
            // ========================================

            const filePath =
                filename;


            console.log(
                "Repository path:",
                filePath
            );


            // ========================================
            // BASE64
            // ========================================

            const content =
                req.file.buffer.toString("base64");


            // ========================================
            // GITHUB CONTENT API
            // ========================================

            const githubUrl =
                `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(filePath)}`;


            console.log(
                "GitHub URL:",
                githubUrl
            );


            // ========================================
            // CHECK IF FILE ALREADY EXISTS
            // ========================================

            let sha = null;


            const existingResponse =
                await fetch(
                    githubUrl,
                    {
                        method: "GET",
                        headers: githubHeaders()
                    }
                );


            if (existingResponse.ok) {

                const existingFile =
                    await existingResponse.json();

                sha =
                    existingFile.sha;

                console.log(
                    "File already exists."
                );

            } else {

                console.log(
                    "File does not exist yet. Creating new file."
                );

            }


            // ========================================
            // CREATE REQUEST
            // ========================================

            const requestBody = {

                message:
                    sha
                        ? `Update ${filename}`
                        : `Upload ${filename}`,

                content:
                    content

            };


            // GitHub requires SHA when updating
            if (sha) {

                requestBody.sha =
                    sha;

            }


            console.log(
                "Sending file to GitHub..."
            );


            // ========================================
            // UPLOAD TO GITHUB
            // ========================================

            const githubResponse =
                await fetch(
                    githubUrl,
                    {

                        method: "PUT",

                        headers:
                            githubHeaders(),

                        body:
                            JSON.stringify(
                                requestBody
                            )

                    }
                );


            const githubResult =
                await githubResponse.json();


            console.log(
                "GitHub status:",
                githubResponse.status
            );


            // ========================================
            // GITHUB ERROR
            // ========================================

            if (!githubResponse.ok) {

                console.error(
                    "================================"
                );

                console.error(
                    "GITHUB UPLOAD ERROR"
                );

                console.error(
                    githubResult
                );

                console.error(
                    "================================"
                );


                return res.status(
                    githubResponse.status
                ).json({

                    message:
                        githubResult.message ||
                        "Failed to upload file.",

                    error:
                        githubResult

                });

            }


            // ========================================
            // SUCCESS
            // ========================================

            console.log(
                "================================"
            );

            console.log(
                "UPLOAD SUCCESSFUL"
            );

            console.log(
                "File:",
                filename
            );

            console.log(
                "GitHub:",
                githubResult.content.html_url
            );

            console.log(
                "================================"
            );


            res.json({

                message:
                    "File uploaded successfully!",

                filename:
                    filename,

                path:
                    githubResult.content.path,

                githubUrl:
                    githubResult.content.html_url,

                downloadUrl:
                    `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/${encodeURIComponent(filename)}`

            });

        }

        catch (error) {

            console.error(
                "UPLOAD SERVER ERROR:"
            );

            console.error(error);


            res.status(500).json({

                message:
                    "Server error while uploading.",

                error:
                    error.message

            });

        }

    }
);

// ========================================
// MULTER ERRORS
// ========================================

app.use(
    (error, req, res, next) => {

        console.error(
            "Server error:",
            error
        );


        if (
            error instanceof
            multer.MulterError
        ) {

            return res.status(400).json({

                message:
                    error.message

            });

        }


        if (error) {

            return res.status(400).json({

                message:
                    error.message

            });

        }


        next();

    }
);


// ========================================
// START SERVER
// ========================================

const server =
    app.listen(
        PORT,
        () => {

            console.log("");
            console.log(
                "================================"
            );

            console.log(
                `SERVER RUNNING: http://localhost:${PORT}`
            );

            console.log(
                `REPOSITORY: ${OWNER}/${REPO}`
            );

            console.log(
                "================================"
            );

        }
    );


server.on("error", (error) => {

    console.error(
        "SERVER ERROR:",
        error
    );

});