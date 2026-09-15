import React from "react";
import "./Subscription.css";

function Subscription() {
  return (
    <section className="subscription-page">

      <div className="subscription-container">

        {/* ========================================
            LEARNING OPTIONS
        ======================================== */}

        <div className="access-section">

          <div className="access-heading">

            <span>
              LEARNING OPTIONS
            </span>

            <h2>
              Choose How You Want to Learn
            </h2>

            <p>
              Whether you need personal guidance, a focused tutorial,
              or continuous access to learning materials, choose the
              option that works best for you.
            </p>

          </div>


          <div className="access-grid">


            {/* ========================================
                ONLINE TUTOR
            ======================================== */}

            <div className="access-card">

              <div className="access-card-top">

                <span className="access-number">
                  01
                </span>

                <span className="access-badge">
                  PERSONAL
                </span>

              </div>

              <h3>
                Online Tutor
              </h3>

              <p>
                Get direct guidance through an online one-on-one
                programming session.
              </p>

              <div className="access-price">

                <strong>
                  ₱190
                </strong>

                <span>
                  / hour
                </span>

              </div>

              <ul>
                  <li>One-on-one tutoring via Google Meet</li> 
                  <li>Request the topic you want to learn</li> 
                  <li>Project guidance and assistance</li> 
                  <li>Debugging assistance for your project</li>
              </ul>

              {/* BOOK A TUTOR */}
<a
  href="https://www.messenger.com/t/9333023970159622"
  target="_blank"
  rel="noopener noreferrer"
  className="access-button"
>
  Book a Tutor
</a>



            </div>


            {/* ========================================
                PACKAGE TUTORIAL
            ======================================== */}

            <div className="access-card featured">

              <div className="access-card-top">

                <span className="access-number">
                  02
                </span>

                <span className="access-badge">
                  PACKAGE
                </span>

              </div>

              <h3>
                Package Tutorial
              </h3>

              <p>
                Get a focused tutorial package designed around
                a specific programming topic or project.
              </p>

              <div className="access-price">

                <strong>
                  ₱200
                </strong>

                <span>
                  / package
                </span>

              </div>

              <ul>

                <li>Step-by-step video tutorials</li>
                <li>Programming fundamentals and data types</li>
                <li>From basic concepts to arrays</li>
                <li>Challenges and practice exercises</li>

              </ul>

{/* GET PACKAGE */}
<a
  href="https://www.messenger.com/t/9333023970159622"
  target="_blank"
  rel="noopener noreferrer"
  className="access-button"
>
  Get Package
</a>

            </div>


            {/* ========================================
                MONTHLY ACCESS
            ======================================== */}

            <div className="access-card">

              <div className="access-card-top">

                <span className="access-number">
                  03
                </span>

                <span className="access-badge">
                  MEMBERSHIP
                </span>

              </div>

              <h3>
                Monthly Access
              </h3>

              <p>
                Get access to old and newly uploaded programming
                tutorials while your membership is active.
              </p>

              <div className="access-price">

                <strong>
                  ₱100
                </strong>

                <span>
                  / month
                </span>

              </div>

              <ul>
                  <li>Step-by-step video tutorials</li>
                  <li>Continuous access to videos from the basics to arrays</li>
                  <li>Challenges and practice exercises</li>
                  <li>Access to new videos as they are uploaded</li>

              </ul>

{/* SUBSCRIBE */}
<a
  href="https://www.messenger.com/t/9333023970159622"
  target="_blank"
  rel="noopener noreferrer"
  className="access-button"
>
  Subscribe
</a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Subscription;