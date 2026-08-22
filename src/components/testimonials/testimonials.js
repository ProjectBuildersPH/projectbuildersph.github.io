import React, { useState } from "react";
import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Tarah",
    role: "Learning Python",
    title: "Learning by Building Real Projects",
    video: require("../../assets/t1.mp4"),
  },

  {
    id: 2,
    name: "Ednis",
    role: "Learning Java",
    title: "From Assignment to Finished Project",
    video: require("../../assets/t2.mp4"),
  },

  {
    id: 3,
    name: "Programming Journey",
    role: "Beginner Developer",
    title: "Building Confidence Through Practice",
    video: require("../../assets/tutor.mp4"),
  },

  {
    id: 4,
    name: "Learner Story",
    role: "Aspiring Developer",
    title: "Learning, Building & Growing",
    video: require("../../assets/tutor.mp4"),
  },

  {
    id: 5,
    name: "ProjectBuildersPH",
    role: "Community Member",
    title: "A Community That Helps You Build",
    video: require("../../assets/tutor.mp4"),
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const getIndex = (offset) => {
    return (
      (activeIndex + offset + testimonials.length) %
      testimonials.length
    );
  };

  const active = testimonials[activeIndex];
  const previous = testimonials[getIndex(-1)];
  const next = testimonials[getIndex(1)];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="testimonials-header">

        <div>

          <span className="testimonials-label">
            PROJECTBUILDERSPH COMMUNITY
          </span>

          <h2>
            Learn from people
            <br />
            who <span>built.</span>
          </h2>

          <p>
            Real experiences from learners, clients,
            and developers who learned, built projects,
            and grew along the way.
          </p>

        </div>


        {/* CONTROLS */}

        <div className="testimonial-controls">

          <span className="testimonial-counter">
            {String(activeIndex + 1).padStart(2, "0")}
            {" / "}
            {String(testimonials.length).padStart(2, "0")}
          </span>

          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>

        </div>

      </div>


      {/* ========================================
          VIDEO SHOWCASE
      ======================================== */}

      <div className="testimonial-showcase">


        {/* LEFT VIDEO */}

        <button
          className="testimonial-side testimonial-left"
          onClick={previousTestimonial}
          aria-label="Previous testimonial"
        >

          <video
            src={previous.video}
            muted
            playsInline
            preload="metadata"
          />

          <div className="side-overlay">

            <span>
              {String(previous.id).padStart(2, "0")}
            </span>

            <strong>
              {previous.title}
            </strong>

          </div>

        </button>


        {/* CENTER VIDEO */}

        <div className="testimonial-center">

          <div className="testimonial-video">

            <video
              key={active.video}
              src={active.video}
              controls
              playsInline
              preload="metadata"
            />

          </div>


          {/* CENTER INFORMATION */}

          <div className="testimonial-info">

            <div className="testimonial-person">

              <div className="testimonial-avatar">
                PB
              </div>

              <div>

                <strong>
                  {active.name}
                </strong>

                <span>
                  {active.role}
                </span>

              </div>

            </div>


            <div className="testimonial-title">

              <span>
                TESTIMONIAL
              </span>

              <h3>
                {active.title}
              </h3>

            </div>

          </div>

        </div>


        {/* RIGHT VIDEO */}

        <button
          className="testimonial-side testimonial-right"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >

          <video
            src={next.video}
            muted
            playsInline
            preload="metadata"
          />

          <div className="side-overlay">

            <span>
              {String(next.id).padStart(2, "0")}
            </span>

            <strong>
              {next.title}
            </strong>

          </div>

        </button>

      </div>


      {/* ========================================
          BOTTOM MESSAGE
      ======================================== */}

      <div className="testimonials-bottom">

        <span className="bottom-line"></span>

        <p>
          Every project is a chance to learn something new.
        </p>

        <span className="bottom-line"></span>

      </div>

    </section>
  );
}

export default Testimonials;