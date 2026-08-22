import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ========================================
            TOP CTA
        ======================================== */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span className="footer-label">
              PROJECTBUILDERSPH • COMMUNITY
            </span>

            <h2>
              Don't just <span>learn.</span>
              <br />
              Build something.
            </h2>

            <p>
              Learn programming, build real projects,
              share your journey, and grow with other
              aspiring developers.
            </p>

          </div>


          <a
               href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer"
            className="footer-cta-button"
          >
            Join the Community
            <span>↗</span>
          </a>

        </div>


        {/* ========================================
            FOOTER MAIN
        ======================================== */}

        <div className="footer-main">


          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">
              <span className="footer-logo-mark">
                PB
              </span>

              <span className="footer-logo-text">
                ProjectBuilders<span>PH</span>
              </span>
            </div>


            <p>
              A community for beginners and aspiring
              developers to learn programming, build
              real projects, and share their journey.
            </p>


            <div className="footer-values">

              <span>Learn</span>
              <i>•</i>
              <span>Build</span>
              <i>•</i>
              <span>Share</span>

            </div>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <a href="#projects">
              Projects
            </a>

            <a href="#lessons">
              Lessons
            </a>

            <a href="#career">
              Career Path
            </a>

            <a href="#testimonials">
              Success Stories
            </a>

            <a href="#learn">
              YouTube Playlists
            </a>

          </div>


          {/* LEARN */}

          <div className="footer-column">

            <h3>
              Learn
            </h3>

            <a href="#lessons">
              C++
            </a>

            <a href="#lessons">
              Java
            </a>

            <a href="#lessons">
              Database & SQL
            </a>

            <a href="#lessons">
              React JS
            </a>

            <a href="#lessons">
              Python
            </a>

          </div>


          {/* CONNECT */}

          <div className="footer-column footer-connect">

            <h3>
              Connect
            </h3>


<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=thorregoza15@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-contact"
>
  <span className="footer-icon">
    @
  </span>

  <div>
    <small>Email</small>
    <strong>
      thorregoza15@gmail.com
    </strong>
  </div>
</a>


            <a
              href="https://www.instagram.com/ricii.rr/"
              className="footer-contact"
            >
              <span className="footer-icon">
                ◎
              </span>

              <div>
                <small>Instagram</small>
                <strong>
                  Follow on Instagram
                </strong>
              </div>
            </a>


            <a
              href="https://www.tiktok.com/@ricii15"
              className="footer-contact"
            >
              <span className="footer-icon">
                ♪
              </span>

              <div>
                <small>TikTok</small>
                <strong>
                  Follow on TikTok
                </strong>
              </div>
            </a>


            <a
              href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer"
              className="footer-contact"
            >
              <span className="footer-icon">
                M
              </span>

              <div>
                <small>Community</small>
                <strong>
                  Messenger Group
                </strong>
              </div>
            </a>

          </div>

        </div>


        {/* ========================================
            COMMUNITY BOX
        ======================================== */}

        <div className="footer-community">

          <div className="footer-community-icon">
            +
          </div>

          <div className="footer-community-text">

            <strong>
              Building your first project?
            </strong>

            <span>
              You don't have to figure it out alone.
            </span>

          </div>

          <a
            href="#community"
            className="footer-community-button"
          >
            Join ProjectBuildersPH
            <span>→</span>
          </a>

        </div>


        {/* ========================================
            BOTTOM
        ======================================== */}

        <div className="footer-bottom">

          <div>
            © {new Date().getFullYear()} ProjectBuildersPH.
            All rights reserved.
          </div>

          <div className="footer-bottom-right">

            <span>
              Learn.
            </span>

            <span>
              Build.
            </span>

            <span>
              Share.
            </span>

            <span className="footer-dot">
              •
            </span>

            <span>
              Built for beginners.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;