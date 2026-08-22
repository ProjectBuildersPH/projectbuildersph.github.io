import React from "react";
import "./CareerPath.css";
import bbaiImage from "../../assets/bbAI.png";
import tutorVideo from "../../assets/tutor.mp4";



const journey = [
  {
    year: "2020",
    number: "01",
    title: "Start",
    subtitle: "University Instructor",
    type: "LEARN",
    text: "Teaching programming and helping students understand technology.",
    video: tutorVideo,
  },
  {
    year: "2021",
    number: "02",
    title: "Explore",
    subtitle: "Self-Taught Developer",
    type: "LEARN",
    text: "Learning by building projects, experimenting, and solving problems.",
    video: tutorVideo,
  },
  {
    year: "2022",
    number: "03",
    title: "Share",
    subtitle: "Content Creator",
    type: "SHARE",
    text: "Creating tutorials and sharing what I learn with others.",
    video: tutorVideo,
  },
  {
    year: "2025",
    number: "04",
    title: "Share",
    subtitle: "BlackBoxAI Promoter",
    type: "SHARE",
     text: "Promoting BlackBox AI by creating tutorials, sharing what I learned, and helping others discover how they can use AI tools.",
      image: bbaiImage,
    },
  {
    year: "2024",
    number: "05",
    title: "Build",
    subtitle: "Freelance Developer",
    type: "BUILD",
    text: "Building websites, software, and real projects for clients.",
    video: tutorVideo,
  },
  {
    year: "2026",
    number: "06",
    title: "ProjectBuildersPH",
    subtitle: "Build Together",
    type: "LEARN • BUILD • SHARE",
    text: "Creating a community where beginners learn, build, and share.",
    video: tutorVideo,
    current: true,
  },
];

function CareerPath() {
  return (
    <section className="career-section" id="career">

      {/* HEADER */}
      <div className="career-header">

        <span className="career-eyebrow">
          MY JOURNEY
        </span>

        <h2>
          From Learning
          <br />
          to <span>Building.</span>
        </h2>

        <p>
          A few chapters that led me to ProjectBuildersPH.
        </p>

      </div>


      {/* JOURNEY MAP */}
      <div className="journey-wrapper">

        {/* MAP LINE */}
        <div className="journey-line">

          <div className="line-path"></div>

        </div>


        {/* JOURNEY ITEMS */}
        <div className="journey-items">

          {journey.map((item) => (
            <div
              className={`journey-item ${
                item.current ? "active" : ""
              }`}
              key={item.year}
            >

              {/* NODE */}
              <div className="journey-node">

                <span>
                  {item.number}
                </span>

              </div>


              {/* CARD */}
              <div className="journey-card">

                <div className="journey-card-header">

                  <span className="journey-year">
                    {item.year}
                  </span>

                  <span className="journey-type">
                    {item.type}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.subtitle}
                </h4>

                <p>
                  {item.text}
                </p>

                {item.current && (
                  <div className="journey-current">
                    YOU ARE HERE
                  </div>
                )}

              </div>

              {item.video && (
  <div className="journey-image-preview">
    <div className="journey-image-backdrop"></div>

    <video
      src={item.video}
      autoPlay
      loop
      muted
      playsInline
      className="journey-video-preview"
    />
  </div>
)}

{item.image && !item.video && (
  <div className="journey-image-preview">
    <div className="journey-image-backdrop"></div>

    <img
      src={item.image}
      alt={`${item.subtitle} preview`}
    />
  </div>
)}


            </div>
          ))}

        </div>

      </div>


      {/* BOTTOM MESSAGE */}
      <div className="career-bottom">

        <span>
          THE NEXT CHAPTER
        </span>

        <h3>
          Learn. Build. Share.
        </h3>

        <p>
          And build something worth sharing.
        </p>

      </div>

    </section>
  );
}

export default CareerPath;