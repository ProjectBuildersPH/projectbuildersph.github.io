import React, { useEffect } from "react";
import "./businesslandingpage.css";

import HRManagementSystemJava from "./hrmanagement/hrmanagementsystemjava";

function BusinessLandingPage() {

  // Scroll to the top whenever this page is opened
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="business-landing-page">

      <section
        id="business-projects"
        className="business-projects-section"
      >

        <div className="business-project-wrapper">
          <HRManagementSystemJava />
        </div>

      </section>

    </div>
  );
}

export default BusinessLandingPage;