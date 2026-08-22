import React, { useState } from "react";
import "./pathcareer.css";

/*
===========================================================
TEMPORARY ONLINE IMAGES
===========================================================

These are temporary images from the internet.

When you are ready to use your LOCAL images:

1. Put your images inside something like:

   src/
   └── assets/
       └── career/
           ├── instructor1.jpg
           ├── instructor2.jpg
           ├── developer1.jpg
           ├── developer2.jpg
           └── ...

2. Import them at the top:

   import instructor1 from "../../assets/career/instructor1.jpg";

3. Replace the image URLs below with the imported variables.

I intentionally left the comments beside every gallery
so you can easily replace them later.
===========================================================
*/

const careerData = [
  {
    number: "01",
    year: "2020",
    category: "LEARN",
    title: "Start",
    role: "University Instructor",

    description:
      "Teaching programming and helping students understand technology. This was where the journey began — sharing knowledge, guiding students, and discovering how much I enjoyed teaching programming.",

    images: [
      // TODO: Replace these URLs with local images later.
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    number: "02",
    year: "2021",
    category: "LEARN",
    title: "Explore",
    role: "Self-Taught Developer",

    description:
      "Learning by building projects, experimenting, and solving problems. I started exploring development beyond the classroom and learned through practice, mistakes, documentation, and countless hours of coding.",

    images: [
      // TODO: Replace these URLs with your local images.
      "https://weepo.fr/_next/image?q=90&url=https%3A%2F%2Fams3.digitaloceanspaces.com%2Fweepospace%2Fpost%2Finformatique-sans-diplome-guide-complet.webp&w=1200",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    number: "03",
    year: "2022",
    category: "SHARE",
    title: "Share",
    role: "Content Creator",

    description:
      "Creating tutorials and sharing what I learn with others. I began turning my experiences into content, tutorials, and educational materials to help other people understand programming and technology.",

    images: [
      // TODO: Replace these URLs with your local content creator photos.
      "https://swarmify.com/blog/content/images/size/w2000/2026/04/how-to-make-a-how-to-video-hero.webp",
      "https://cdn.hostadvice.com/2025/09/A-content-creator.jpg",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    number: "04",
    year: "2025",
    category: "SHARE",
    title: "Share",
    role: "BlackBoxAI Promoter",

    description:
      "Promoting BlackBox AI by creating tutorials, sharing what I learned, and helping others discover how they can use AI tools.",

    images: [
      // TODO: Replace these with your local BlackBox AI images.
      "https://mgx-backend-cdn.metadl.com/generate/images/1022415/2026-03-31/0cc0d5af-aad1-4318-90ce-357366eec038.png",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {         
    number: "05",
    year: "2025",
    category: "BUILD",
    title: "Build",
    role: "Freelance Developer",

    description:
      "Building websites, software, and real projects for clients. Freelancing allowed me to turn programming skills into real-world solutions while working with different ideas, requirements, and businesses.",

    images: [
      // TODO: Replace these with your local freelance/project images.
      "https://images.squarespace-cdn.com/content/v1/5d252cc64f9ce3000110f184/027ec10c-10ec-4e6e-8709-96893024fdd5/Web%2BDev%2BPlatform%2BSpecific%2BCollection%2BBlogs.png",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  {
    number: "06",
    year: "2026",
    category: "LEARN • BUILD • SHARE",
    title: "ProjectBuildersPH",
    role: "Build Together",

    description:
      "Creating a community where beginners learn, build, and share. ProjectBuildersPH brings everything together — learning programming, building real projects, and sharing knowledge with others.",

    images: [
      // TODO: Replace these with your ProjectBuildersPH images.
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    ],

    current: true,
  },
];

const CareerPath = () => {
  const [activeImages, setActiveImages] = useState({});

  const nextImage = (index, total) => {
    setActiveImages((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % total,
    }));
  };

  const previousImage = (index, total) => {
    setActiveImages((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) - 1 + total) % total,
    }));
  };

  return (
    <section className="career-section" id="career">
      <div className="career-container">

        {/* HEADER */}
        <div className="career-header">
          <span className="career-eyebrow">
            MY JOURNEY
          </span>

          <h1>
            Learn. <span>Build.</span> Share.
          </h1>

          <p>
            A journey shaped by teaching, learning, creating,
            building, and sharing knowledge with others.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="career-timeline">

          {careerData.map((career, index) => {
            const currentImage = activeImages[index] || 0;

            return (
              <div
                className={`career-item ${
                  career.current ? "career-current" : ""
                }`}
                key={career.number}
              >

                {/* TIMELINE DOT */}
                <div className="career-line">
                  <div className="career-dot">
                    {career.number}
                  </div>
                </div>

                {/* CARD */}
                <div className="career-card">

                  {/* TOP SECTION */}
                  <div className="career-card-top">

                    <div className="career-year">
                      <strong>{career.year}</strong>
                      <span>{career.category}</span>
                    </div>

                    {career.current && (
                      <div className="you-are-here">
                        <span className="pulse-dot"></span>
                        YOU ARE HERE
                      </div>
                    )}

                  </div>

                  {/* CONTENT */}
                  <div className="career-content">

                    <div className="career-text">

                      <span className="career-step">
                        {career.title}
                      </span>

                      <h2>{career.role}</h2>

                      <p>{career.description}</p>

                    </div>

                    {/* GALLERY */}
                    <div className="career-gallery">

                      <img
                        src={career.images[currentImage]}
                        alt={`${career.role} ${currentImage + 1}`}
                      />

                      <button
                        className="gallery-arrow gallery-left"
                        onClick={() =>
                          previousImage(
                            index,
                            career.images.length
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>

                      <button
                        className="gallery-arrow gallery-right"
                        onClick={() =>
                          nextImage(
                            index,
                            career.images.length
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>

                      {/* IMAGE INDICATORS */}
                      <div className="gallery-dots">
                        {career.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            className={
                              imageIndex === currentImage
                                ? "gallery-dot active"
                                : "gallery-dot"
                            }
                            onClick={() =>
                              setActiveImages((prev) => ({
                                ...prev,
                                [index]: imageIndex,
                              }))
                            }
                            aria-label={`View image ${
                              imageIndex + 1
                            }`}
                          />
                        ))}
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CareerPath;