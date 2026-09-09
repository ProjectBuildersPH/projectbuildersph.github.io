import { useEffect, useRef, useState } from "react";
import "./UploadFile.css";

const API_URL = "http://localhost:5000";

function UploadFile() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [repoFiles, setRepoFiles] = useState([]);

    const fileInputRef = useRef(null);

    // ========================================
    // GET FILES FROM GITHUB REPOSITORY
    // ========================================

    const loadRepoFiles = async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/files`
            );

            const result = await response.json();

            if (response.ok) {
                setRepoFiles(result.files || []);
            } else {
                console.error("Failed to load files:", result);
                setMessage(
                    result.message || "Failed to load repository files."
                );
            }
        } catch (error) {
            console.error(
                "Unable to load repository files:",
                error
            );
        }
    };

    // ========================================
    // LOAD FILES WHEN PAGE OPENS
    // ========================================

    useEffect(() => {
        loadRepoFiles();
    }, []);

    // ========================================
    // VALIDATE FILE
    // ========================================

    const validateFile = (selectedFile) => {
        const allowedExtensions = [
            ".cpp",
            ".h",
            ".hpp"
        ];

        const fileName =
            selectedFile.name.toLowerCase();

        return allowedExtensions.some(
            (extension) =>
                fileName.endsWith(extension)
        );
    };

    // ========================================
    // FILE SELECTION
    // ========================================

    const handleFileChange = (event) => {
        const selectedFile =
            event.target.files[0];

        if (!selectedFile) {
            return;
        }

        if (!validateFile(selectedFile)) {
            setMessage(
                "Only .cpp, .h and .hpp files are allowed."
            );

            setFile(null);
            event.target.value = "";

            return;
        }

        setMessage("");
        setFile(selectedFile);
    };

    // ========================================
    // DRAG AND DROP
    // ========================================

    const handleDrop = (event) => {
        event.preventDefault();

        const droppedFile =
            event.dataTransfer.files[0];

        if (!droppedFile) {
            return;
        }

        if (!validateFile(droppedFile)) {
            setMessage(
                "Only .cpp, .h and .hpp files are allowed."
            );

            return;
        }

        setMessage("");
        setFile(droppedFile);
    };

    // ========================================
    // UPLOAD FILE
    // ========================================

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setMessage(
                "Please select a C++ file."
            );

            return;
        }

        const formData =
            new FormData();

        formData.append(
            "file",
            file
        );

        setMessage("Uploading...");

        try {
            const response =
                await fetch(
                    `${API_URL}/api/upload`,
                    {
                        method: "POST",
                        body: formData
                    }
                );

            const result =
                await response.json();

            if (response.ok) {
                setMessage(
                    "✓ File uploaded successfully!"
                );

                setFile(null);

                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }

                // Read the GitHub repository again
                await loadRepoFiles();

            } else {
                setMessage(
                    result.message ||
                    result.error ||
                    "Upload failed."
                );
            }

        } catch (error) {
            console.error(
                "Upload error:",
                error
            );

            setMessage(
                "Unable to connect to the server."
            );
        }
    };

    // ========================================
    // RENDER
    // ========================================

    return (
        <div className="upload-page">

            {/* ========================================
                UPLOAD
            ======================================== */}

            <form onSubmit={handleSubmit}>

                <div className="upload-row">

                    {/* FILE SELECT BOX */}

                    <div
                        className="file-upload-box"

                        onClick={() =>
                            fileInputRef.current?.click()
                        }

                        onDragOver={(event) =>
                            event.preventDefault()
                        }

                        onDrop={handleDrop}
                    >

                        <div className="file-upload-icon">
                            📁
                        </div>

                        {file ? (
                            <>
                                <p className="file-selected-title">
                                    File selected
                                </p>

                                <span className="file-name">
                                    {file.name}
                                </span>
                            </>
                        ) : (
                            <>
                                <p>
                                    Click to upload
                                </p>

                                <span>
                                    or drag and drop your C++ file
                                </span>

                                <small>
                                    .cpp • .h • .hpp
                                </small>
                            </>
                        )}

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".cpp,.h,.hpp"
                            onChange={handleFileChange}
                        />

                    </div>

                    {/* UPLOAD BUTTON */}

                    <button
                        type="submit"
                        className="upload-button"
                    >
                        Upload File
                    </button>

                </div>

            </form>

            {/* ========================================
                MESSAGE
            ======================================== */}

            {message && (
                <div className="upload-message">
                    {message}
                </div>
            )}

            {/* ========================================
                REPOSITORY FILES
            ======================================== */}

            <div className="repo-files">

                <div className="repo-files-header">

                    <h3>
                        Repository Files
                    </h3>

                    <span>
                        {repoFiles.length} file
                        {repoFiles.length !== 1
                            ? "s"
                            : ""}
                    </span>

                </div>

                {/* SCROLLABLE FILE LIST */}

                <div className="repo-files-list">

                    {repoFiles.length === 0 ? (

                        <div className="no-files">
                            No C++ files uploaded yet.
                        </div>

                    ) : (

                        repoFiles.map((repoFile) => (

                            <div
                                className="repo-file"
                                key={repoFile.path}
                            >

                                <div className="repo-file-icon">
                                    📄
                                </div>

                                <div className="repo-file-info">

                                    <span className="repo-file-name">
                                        {repoFile.name}
                                    </span>

                                    <small>
                                        {repoFile.path}
                                    </small>

                                </div>

                                {/* DOWNLOAD */}

                                <a
                                    className="repo-file-download"
                                    href={repoFile.downloadUrl}
                                    download={repoFile.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(event) =>
                                        event.stopPropagation()
                                    }
                                    title={`Download ${repoFile.name}`}
                                >
                                    ↓
                                </a>

                                {/* SUCCESS */}

                                <span className="repo-file-check">
                                    ✓
                                </span>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default UploadFile;
