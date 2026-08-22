import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./easyspsc.css";

const SPSC = () => {
  const [openHint, setOpenHint] = useState(null);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);


  const toggleHint = (hint) => {
    setOpenHint(openHint === hint ? null : hint);
  };

  return (

    
    <div className="spsc-page">

      {/* Back Button */}
      <div className="spsc-container">
        <button className="spsc-back-btn">
          ← Back to Problems
        </button>
      </div>

      {/* Header */}
      <header className="spsc-header">
        <div className="spsc-container">

          <div className="spsc-problem-number">
            Problem #1
          </div>

          <h1>Smart Parking Space Checker</h1>

          <p className="spsc-subtitle">
            Check whether a parking lot still has an available space.
          </p>

          <div className="spsc-tags">
            <span className="spsc-tag difficulty">
              Easy
            </span>

            <span className="spsc-tag language">
              C++
            </span>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="spsc-container spsc-content">

        {/* Problem Card */}
        <section className="spsc-card">

          <div className="spsc-card-title">
            <span>📋</span>
            <h2>Problem</h2>
          </div>

          <p>
            A small parking lot has a limited number of parking spaces.
          </p>

          <p>
            The parking lot has:
          </p>

          <ul className="spsc-list">
            <li>
              <strong>10 total parking spaces</strong>
            </li>
            <li>
              Some spaces are already occupied.
            </li>
            <li>
              A new driver wants to park.
            </li>
          </ul>

          <p>
            Your program should ask the user how many parking spaces
            are currently occupied.
          </p>

          <h3>Your program should determine:</h3>

          <div className="spsc-output available">
            <span className="output-icon">✓</span>
            <div>
              <strong>If there is at least 1 available space</strong>
              <code>Parking space available!</code>
            </div>
          </div>

          <div className="spsc-output full">
            <span className="output-icon">!</span>
            <div>
              <strong>If all 10 spaces are occupied</strong>
              <code>Parking lot is full!</code>
            </div>
          </div>

        </section>

        {/* Parking Info */}
        <section className="spsc-parking-card">

          <div className="parking-icon">
            🅿️
          </div>

          <div>
            <span>Total Parking Spaces</span>
            <strong>10</strong>
          </div>

          <div className="parking-divider"></div>

          <div>
            <span>What You Need</span>
            <strong>1 Available</strong>
          </div>

        </section>

        {/* Examples */}
        <section className="spsc-card">

          <div className="spsc-card-title">
            <span>💻</span>
            <h2>Examples</h2>
          </div>

          {/* Example 1 */}
          <div className="spsc-example">
            <div className="example-header">
              <span>Example 1</span>
            </div>

            <div className="example-content">
              <div className="example-row">
                <span>Input</span>
                <code>Enter occupied parking spaces: 7</code>
              </div>

              <div className="example-result success">
                Parking space available!
              </div>

              <div className="example-available">
                Available spaces: <strong>3</strong>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="spsc-example">
            <div className="example-header">
              <span>Example 2</span>
            </div>

            <div className="example-content">
              <div className="example-row">
                <span>Input</span>
                <code>Enter occupied parking spaces: 10</code>
              </div>

              <div className="example-result full-result">
                Parking lot is full!
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="spsc-example">
            <div className="example-header">
              <span>Example 3</span>
            </div>

            <div className="example-content">
              <div className="example-row">
                <span>Input</span>
                <code>Enter occupied parking spaces: 12</code>
              </div>

              <div className="example-result invalid">
                Invalid number of occupied spaces.
              </div>
            </div>
          </div>

        </section>

        {/* Challenge */}
        <section className="spsc-challenge">

          <div className="challenge-icon">
            🎯
          </div>

          <div>
            <h2>Your Challenge</h2>

            <p>
              Try solving this problem yourself first.
            </p>

            <p>
              Think about what information your program needs,
              then decide which conditions should be checked first.
            </p>
          </div>

        </section>

        {/* Hints */}
        <section className="spsc-card">

          <div className="spsc-card-title">
            <span>💡</span>
            <h2>Hints</h2>
          </div>

          <p className="hint-description">
            Stuck? Reveal the hints one at a time.
          </p>

          {/* Hint 1 */}
          <div className="hint-box">

            <button
              className="hint-button"
              onClick={() => toggleHint(1)}
            >
              <span>
                Hint 1 — Start with the parking lot
              </span>

              <span>
                {openHint === 1 ? "▲" : "▼"}
              </span>
            </button>

            {openHint === 1 && (
              <div className="hint-content">
                <p>
                  The parking lot always has <strong>10 total spaces</strong>.
                </p>

                <p>
                  Store this value in a variable before asking
                  the user for their input.
                </p>
              </div>
            )}

          </div>

          {/* Hint 2 */}
          <div className="hint-box">

            <button
              className="hint-button"
              onClick={() => toggleHint(2)}
            >
              <span>
                Hint 2 — Check the input
              </span>

              <span>
                {openHint === 2 ? "▲" : "▼"}
              </span>
            </button>

            {openHint === 2 && (
              <div className="hint-content">
                <p>
                  A valid number of occupied spaces cannot be
                  less than <strong>0</strong> and cannot be greater
                  than <strong>10</strong>.
                </p>

                <p>
                  Think about how you can use comparison operators
                  to detect invalid input.
                </p>
              </div>
            )}

          </div>

          {/* Hint 3 */}
          <div className="hint-box">

            <button
              className="hint-button"
              onClick={() => toggleHint(3)}
            >
              <span>
                Hint 3 — Determine the parking status
              </span>

              <span>
                {openHint === 3 ? "▲" : "▼"}
              </span>
            </button>

            {openHint === 3 && (
              <div className="hint-content">
                <p>
                  After checking for invalid input, determine whether
                  all 10 spaces are occupied.
                </p>

                <p>
                  If the parking lot is not full, you can calculate
                  the available spaces by subtracting occupied spaces
                  from the total.
                </p>
              </div>
            )}

          </div>

        </section>

        {/* Expected Logic */}
        <section className="spsc-card">

          <div className="spsc-card-title">
            <span>🧠</span>
            <h2>Expected Logic</h2>
          </div>

          <div className="logic-box">

            <div className="logic-line">
              <span className="logic-number">1</span>
              <code>total spaces = 10</code>
            </div>

            <div className="logic-line">
              <span className="logic-number">2</span>
              <code>input occupied spaces</code>
            </div>

            <div className="logic-line condition">
              <span className="logic-number">3</span>
              <code>
                if occupied &lt; 0 OR occupied &gt; 10
              </code>
            </div>

            <div className="logic-line">
              <span className="logic-number">4</span>
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;invalid input
              </code>
            </div>

            <div className="logic-line condition">
              <span className="logic-number">5</span>
              <code>
                else if occupied == 10
              </code>
            </div>

            <div className="logic-line">
              <span className="logic-number">6</span>
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;parking lot is full
              </code>
            </div>

            <div className="logic-line condition">
              <span className="logic-number">7</span>
              <code>
                else
              </code>
            </div>

            <div className="logic-line">
              <span className="logic-number">8</span>
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;calculate available spaces
              </code>
            </div>

            <div className="logic-line">
              <span className="logic-number">9</span>
              <code>
                &nbsp;&nbsp;&nbsp;&nbsp;parking space available
              </code>
            </div>

          </div>

        </section>

        {/* Requirements */}
        <section className="spsc-card">

          <div className="spsc-card-title">
            <span>📌</span>
            <h2>Requirements</h2>
          </div>

          <div className="requirements-grid">

            <div className="requirement required">
              <span>✓</span>
              <div>
                <strong>cin</strong>
                <small>Get input from the user</small>
              </div>
            </div>

            <div className="requirement required">
              <span>✓</span>
              <div>
                <strong>cout</strong>
                <small>Display information</small>
              </div>
            </div>

            <div className="requirement required">
              <span>✓</span>
              <div>
                <strong>Variables</strong>
                <small>Store your values</small>
              </div>
            </div>

            <div className="requirement required">
              <span>✓</span>
              <div>
                <strong>if / else if / else</strong>
                <small>Control the program logic</small>
              </div>
            </div>

            <div className="requirement required">
              <span>✓</span>
              <div>
                <strong>Comparison Operators</strong>
                <small>Compare values</small>
              </div>
            </div>

            <div className="requirement not-allowed">
              <span>×</span>
              <div>
                <strong>No Loops</strong>
                <small>Do not use loops</small>
              </div>
            </div>

            <div className="requirement not-allowed">
              <span>×</span>
              <div>
                <strong>No Arrays</strong>
                <small>Do not use arrays</small>
              </div>
            </div>

            <div className="requirement not-allowed">
              <span>×</span>
              <div>
                <strong>No Functions</strong>
                <small>Do not create functions yet</small>
              </div>
            </div>

          </div>

        </section>

        {/* Final Challenge */}
        <section className="spsc-final">

          <div className="final-icon">
            🚀
          </div>

          <h2>Ready to Code?</h2>

          <p>
            Open your C++ compiler and try solving the problem
            without looking at the solution.
          </p>

          <div className="final-reminder">
            Remember: <strong>Keep it simple.</strong>
          </div>

        </section>

        <div className="spsc-container">
  <Link to="/learn/cpp" className="spsc-back-btn">
    ← Back to Problems
  </Link>
</div>


      </main>

    </div>
  );
};

export default SPSC;