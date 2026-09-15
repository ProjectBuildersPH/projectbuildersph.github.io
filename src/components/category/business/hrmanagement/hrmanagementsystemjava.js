import React, { useState } from "react";
import "./hrmanagementsystemjava.css";

import login from "../hrmanagement/login.png";
import loginconfirm from "../hrmanagement/loginconfirm.png";
import dashboard from "../hrmanagement/dashboard.png";
import addemployee from "../hrmanagement/addemployee.png";
import departments from "../hrmanagement/departments.png";
import position from "../hrmanagement/position.png";
import usermanement from "../hrmanagement/usermanement.png";
import reports from "../hrmanagement/reports.png";
import dashboardcount from "../hrmanagement/dashboardcount.png";

const projectImages = [
  login,
  loginconfirm,
  dashboard,
  addemployee,
  departments,
  position,
  usermanement,
  reports,
  dashboardcount,
];

function HRManagementSystemJava() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="hr-management-page">
      <div className="hr-project-card">

        {/* LEFT - IMAGE SLIDER */}
        <div className="hr-image-section">
          <div className="hr-image-slider">

            <img
              src={projectImages[currentImage]}
              alt={`HR Management System Java ${currentImage + 1}`}
              className="hr-project-image"
            />

            <button
              className="slider-button previous-button"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ❮
            </button>

            <button
              className="slider-button next-button"
              onClick={nextImage}
              aria-label="Next image"
            >
              ❯
            </button>

            <div className="image-counter">
              {currentImage + 1} / {projectImages.length}
            </div>

          </div>
        </div>

        {/* RIGHT - DESCRIPTION */}
        <div className="hr-project-info">

          <h1 className="hr-project-title">
            Hospital HR Management System — Java
          </h1>

          <p className="hr-project-description">
            A complete Hospital Human Resource Management System designed
            to simplify and organize employee and administrative operations.
            The system provides a centralized platform for managing hospital
            employees, departments, positions, users, and reports.
          </p>

          <h2>System Features</h2>

          <ul className="hr-feature-list">
            <li>
              <span>✓</span>
              Add Employee
            </li>

            <li>
              <span>✓</span>
              Departments Management
            </li>

            <li>
              <span>✓</span>
              Position Management
            </li>

            <li>
              <span>✓</span>
              User Management
            </li>

            <li>
              <span>✓</span>
              Reports
            </li>
          </ul>

          <div className="dashboard-info">

            <h2>Dashboard Overview</h2>

            <p>
              The dashboard provides a quick overview of important
              hospital HR information. Administrators can immediately
              see the current number of employees, departments,
              positions, and system users.
            </p>

            <div className="dashboard-stats">

              <div className="stat-card">
                <strong>Employees</strong>
                <span>Dashboard Count</span>
              </div>

              <div className="stat-card">
                <strong>Departments</strong>
                <span>Dashboard Count</span>
              </div>

              <div className="stat-card">
                <strong>Positions</strong>
                <span>Dashboard Count</span>
              </div>

              <div className="stat-card">
                <strong>Users</strong>
                <span>Dashboard Count</span>
              </div>

            </div>

          </div>

          <a
            href="https://www.messenger.com/t/9333023970159622"
            target="_blank"
            rel="noopener noreferrer"
            className="access-button"
          >
            Buy Code 1000 Pesos
          </a>

        </div>

      </div>
    </div>
  );
}

export default HRManagementSystemJava;