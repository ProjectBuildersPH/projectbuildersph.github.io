import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <span className="hero-label">
            PROJECTBUILDERSPH
          </span>

          <h1>
            Learn.
            <span> Build.</span>
            <br />
            Share.
          </h1>

          <p className="hero-description">
            A community for beginners and aspiring developers
            to learn programming, build real projects, and
            share their journey.
          </p>

          <div className="hero-buttons">

            <a
              href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer"
              className="hero-btn primary"
            >
              Join the Community
            </a>

            <a
              href="#projects"
              className="hero-btn secondary"
            >
              Explore Projects
            </a>

          </div>

          {/* LEARN BUILD SHARE */}
          <div className="hero-values">

            <div className="hero-value">
              <span>01</span>
              <strong>Learn</strong>
            </div>

            <div className="hero-dot">•</div>

            <div className="hero-value">
              <span>02</span>
              <strong>Build</strong>
            </div>

            <div className="hero-dot">•</div>

            <div className="hero-value">
              <span>03</span>
              <strong>Share</strong>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE - VIDEO */}
        <div className="hero-video-area">

          <div className="hero-video-card">

            {/* VIDEO HEADER */}
            <div className="video-header">

              <div className="video-user">

                <div className="video-avatar">
                  PB
                </div>

                <div className="video-user-info">
                  <strong>ProjectBuildersPH</strong>

                  <span>
                    Learn by building
                  </span>
                </div>

              </div>

              <span className="video-tag">
                Client Testimonial
              </span>

            </div>


            {/* YOUTUBE VIDEO 
            <div className="youtube-container">

              <iframe
                src="https://www.youtube.com/embed/K7uceVPPmVo"
                title="ProjectBuildersPH Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

          

            {/* TUTOR VIDEO */}
<div className="video-container">
  <video
    src={require("../../assets/tutor.mp4")}
    controls
    playsInline
    preload="metadata"
  >
    Your browser does not support the video tag.
  </video>
</div>


            {/* VIDEO INFORMATION */}
            <div className="video-information">

              <span className="video-category">
                REVIEW
              </span>
        <h3>
            Trusted by Clients & Learners Worldwide
        </h3>

        <p>
  From projects and assignments to personal coaching,
  people from different places have trusted ProjectBuildersPH
  to help them learn, build, and achieve their goals.
        </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;