import React, { useEffect, useState } from "react";
import "./Cert.css";

import cert1 from "../../assets/cert/advance.png";
import cert2 from "../../assets/cert/ai.png";
import cert3 from "../../assets/cert/analysis.png";
import cert4 from "../../assets/cert/back.png";
import cert5 from "../../assets/cert/building.png";
import cert6 from "../../assets/cert/career.png";
import cert7 from "../../assets/cert/cpp.png";
import cert8 from "../../assets/cert/intro.png";
import cert9 from "../../assets/cert/java.png";
import cert10 from "../../assets/cert/ML.png";
import cert11 from "../../assets/cert/netasp.png";
import cert12 from "../../assets/cert/razorpages.png";
import cert13 from "../../assets/cert/sad.png";
import cert14 from "../../assets/cert/SHARp.png";

/* ========================================
   CERTIFICATE LIST
======================================== */

const certificates = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
];

/* ========================================
   CERTIFICATION COMPONENT
======================================== */

function Cert() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  /* ========================================
     TOTAL SLIDES
  ======================================== */

  const totalSlides = Math.ceil(certificates.length / 2);

  /* ========================================
     AUTOMATIC SLIDE CHANGE
  ======================================== */

  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        return (prevSlide + 1) % totalSlides;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  /* ========================================
     CURRENT TWO CERTIFICATES
  ======================================== */

  const startIndex = currentSlide * 2;

  const visibleCertificates = certificates.slice(
    startIndex,
    startIndex + 2
  );

  /* ========================================
     CLOSE MODAL WITH ESCAPE
  ======================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  /* ========================================
     SELECT SLIDE
  ======================================== */

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <section className="cert-section">

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="cert-header">

        <span>CERTIFICATIONS</span>

        <h2>
          Continuous <strong>Learning</strong>
        </h2>

        <p>
          Continuous learning is part of building better
          skills, knowledge, and solutions.
        </p>

      </div>

      {/* ========================================
          CERTIFICATE DISPLAY
      ======================================== */}

      <div className="cert-display">

        {visibleCertificates.map((cert, index) => {

          const certificateNumber =
            startIndex + index + 1;

          return (
            <button
              className="cert-card"
              key={cert}
              type="button"
              onClick={() => setSelectedCert(cert)}
              aria-label={`View certificate ${certificateNumber}`}
            >

              <img
                src={cert}
                alt={`Certificate ${certificateNumber}`}
              />

            </button>
          );
        })}

      </div>

      {/* ========================================
          SLIDE INDICATORS
      ======================================== */}

      {totalSlides > 1 && (
        <div className="cert-indicators">

          {Array.from(
            { length: totalSlides },
            (_, index) => (
              <button
                key={index}
                type="button"
                className={
                  currentSlide === index
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleSlideChange(index)
                }
                aria-label={`Show certificate slide ${
                  index + 1
                }`}
                aria-current={
                  currentSlide === index
                    ? "true"
                    : undefined
                }
              />
            )
          )}

        </div>
      )}

      {/* ========================================
          CERTIFICATE MODAL
      ======================================== */}

      {selectedCert && (
        <div
          className="cert-modal"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >

          <div
            className="cert-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}

            <button
              className="cert-close"
              onClick={() =>
                setSelectedCert(null)
              }
              type="button"
              aria-label="Close certificate preview"
            >
              ×
            </button>

            {/* CERTIFICATE */}

            <img
              src={selectedCert}
              alt="Certificate Preview"
            />

          </div>

        </div>
      )}

    </section>
  );
}

export default Cert;