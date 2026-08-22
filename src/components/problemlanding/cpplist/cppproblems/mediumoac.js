import React, { useEffect } from "react";
import "./mediumoac.css";
import { Link } from "react-router-dom";

const MediumOac = () => {

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);


  return (
    <div className="medium-oac-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="medium-oac-hero">
        <div className="medium-oac-container">

          <div className="medium-oac-breadcrumb">
            C++ / Problems / Problem #2
          </div>

          <div className="medium-oac-badges">
            <span className="medium-badge">
              MEDIUM
            </span>

            <span className="cpp-badge">
              C++
            </span>
          </div>

          <h1>
            Office Access Control
          </h1>

          <p>
            Build a simple security system that determines whether
            an employee is allowed to enter a restricted area.
          </p>

        </div>
      </section>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="medium-oac-container medium-oac-main">

        {/* Problem */}
        <section className="problem-section">

          <div className="section-number">
            01
          </div>

          <div className="problem-section-content">

            <h2>
              Scenario
            </h2>

            <p>
              You are developing a simple security system for a
              company's office.
            </p>

            <p>
              Employees need to meet <strong>multiple requirements</strong>
              before they are allowed to enter a restricted area.
            </p>

            <p>
              The security system asks for:
            </p>

            <ol>
              <li>The employee's age</li>
              <li>Whether they have an employee ID</li>
              <li>Their security clearance level</li>
            </ol>

          </div>

        </section>


        {/* Security Rules */}
        <section className="problem-section">

          <div className="section-number">
            02
          </div>

          <div className="problem-section-content">

            <h2>
              Security Rules
            </h2>

            <p>
              An employee can enter the restricted area only if
              <strong> all three requirements </strong>
              are satisfied.
            </p>

            <div className="rules-grid">

              <div className="rule-card">
                <span className="rule-number">
                  01
                </span>

                <h3>
                  Age Requirement
                </h3>

                <p>
                  The employee must be
                  <strong> 18 years old or older.</strong>
                </p>

                <code>
                  age &gt;= 18
                </code>
              </div>


              <div className="rule-card">
                <span className="rule-number">
                  02
                </span>

                <h3>
                  Employee ID
                </h3>

                <p>
                  The employee must have a valid employee ID.
                </p>

                <code>
                  employeeID == 1
                </code>
              </div>


              <div className="rule-card">
                <span className="rule-number">
                  03
                </span>

                <h3>
                  Security Clearance
                </h3>

                <p>
                  The employee must have clearance level
                  <strong> 2 or higher.</strong>
                </p>

                <code>
                  clearance &gt;= 2
                </code>
              </div>

            </div>

          </div>

        </section>


        {/* Input */}
        <section className="problem-section">

          <div className="section-number">
            03
          </div>

          <div className="problem-section-content">

            <h2>
              Input
            </h2>

            <p>
              Ask the user for three values:
            </p>

            <div className="input-list">

              <div className="input-item">
                <span>1</span>

                <div>
                  <strong>Age</strong>
                  <p>
                    The employee's age.
                  </p>
                </div>
              </div>


              <div className="input-item">
                <span>2</span>

                <div>
                  <strong>Employee ID</strong>
                  <p>
                    1 = Has employee ID
                    <br />
                    0 = Does not have employee ID
                  </p>
                </div>
              </div>


              <div className="input-item">
                <span>3</span>

                <div>
                  <strong>Clearance Level</strong>
                  <p>
                    1 = Level 1
                    <br />
                    2 = Level 2
                    <br />
                    3 = Level 3
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* Decision Logic */}
        <section className="problem-section">

          <div className="section-number">
            04
          </div>

          <div className="problem-section-content">

            <h2>
              Decision Logic
            </h2>

            <p>
              Your program should follow this order:
            </p>

            <div className="logic-flow">

              <div className="logic-step">
                <span>01</span>
                <strong>Is the input valid?</strong>
              </div>

              <div className="logic-arrow">
                ↓
              </div>

              <div className="logic-step">
                <span>02</span>
                <strong>Is the employee old enough?</strong>
              </div>

              <div className="logic-arrow">
                ↓
              </div>

              <div className="logic-step">
                <span>03</span>
                <strong>Do they have an employee ID?</strong>
              </div>

              <div className="logic-arrow">
                ↓
              </div>

              <div className="logic-step">
                <span>04</span>
                <strong>Do they have enough clearance?</strong>
              </div>

              <div className="logic-arrow">
                ↓
              </div>

              <div className="logic-success">
                ACCESS GRANTED
              </div>

            </div>

          </div>

        </section>


        {/* Examples */}
        <section className="problem-section">

          <div className="section-number">
            05
          </div>

          <div className="problem-section-content">

            <h2>
              Examples
            </h2>


            <div className="example-grid">

              {/* Example 1 */}
              <div className="example-card">

                <div className="example-header">
                  <span>
                    Example 1
                  </span>

                  <span className="granted">
                    ACCESS GRANTED
                  </span>
                </div>

                <pre>
{`Enter age: 25
Enter employee ID (1 = Yes, 0 = No): 1
Enter clearance level (1-3): 3

Access Granted
Welcome to the restricted area.`}
                </pre>

              </div>


              {/* Example 2 */}
              <div className="example-card">

                <div className="example-header">
                  <span>
                    Example 2
                  </span>

                  <span className="denied">
                    DENIED
                  </span>
                </div>

                <pre>
{`Enter age: 16
Enter employee ID (1 = Yes, 0 = No): 1
Enter clearance level (1-3): 3

Access Denied
Reason: Employee must be at least 18 years old.`}
                </pre>

              </div>


              {/* Example 3 */}
              <div className="example-card">

                <div className="example-header">
                  <span>
                    Example 3
                  </span>

                  <span className="denied">
                    DENIED
                  </span>
                </div>

                <pre>
{`Enter age: 25
Enter employee ID (1 = Yes, 0 = No): 0
Enter clearance level (1-3): 3

Access Denied
Reason: Valid employee ID required.`}
                </pre>

              </div>


              {/* Example 4 */}
              <div className="example-card">

                <div className="example-header">
                  <span>
                    Example 4
                  </span>

                  <span className="denied">
                    DENIED
                  </span>
                </div>

                <pre>
{`Enter age: 25
Enter employee ID (1 = Yes, 0 = No): 1
Enter clearance level (1-3): 1

Access Denied
Reason: Insufficient security clearance.`}
                </pre>

              </div>

            </div>

          </div>

        </section>


        {/* Validation */}
        <section className="problem-section">

          <div className="section-number">
            06
          </div>

          <div className="problem-section-content">

            <h2>
              Input Validation
            </h2>

            <p>
              Your program must also handle invalid input.
            </p>

            <div className="validation-grid">

              <div className="validation-card">
                <code>
                  age &lt; 0
                </code>

                <p>
                  Display:
                </p>

                <strong>
                  Invalid age.
                </strong>
              </div>


              <div className="validation-card">
                <code>
                  employeeID != 0 &amp;&amp; employeeID != 1
                </code>

                <p>
                  Display:
                </p>

                <strong>
                  Invalid employee ID input.
                </strong>
              </div>


              <div className="validation-card">
                <code>
                  clearance &lt; 1 || clearance &gt; 3
                </code>

                <p>
                  Display:
                </p>

                <strong>
                  Invalid clearance level.
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* Restrictions */}
        <section className="problem-section">

          <div className="section-number">
            07
          </div>

          <div className="problem-section-content">

            <h2>
              Restrictions
            </h2>

            <p>
              You are only allowed to use the following:
            </p>

            <div className="allowed-tags">

              <span>cin</span>
              <span>cout</span>
              <span>variables</span>
              <span>if</span>
              <span>else if</span>
              <span>else</span>
              <span>comparison operators</span>
              <span>logical operators</span>
              <span>arithmetic operators</span>

            </div>

            <div className="not-allowed">

              <h3>
                Not Allowed
              </h3>

              <div className="not-allowed-list">

                <span>❌ Loops</span>
                <span>❌ Arrays</span>
                <span>❌ Functions</span>
                <span>❌ switch</span>
                <span>❌ Classes</span>

              </div>

            </div>

          </div>

        </section>


        {/* Hint */}
        <section className="hint-section">

          <div className="hint-icon">
            💡
          </div>

          <div>

            <span className="hint-label">
              NEED A HINT?
            </span>

            <h2>
              Think about the order of your conditions.
            </h2>

            <p>
              Don't immediately check whether access should be granted.
              First make sure the user's input is valid.
              Then check each security requirement one at a time.
            </p>

            <div className="hint-flow">

              <span>
                Input Validation
              </span>

              <span>→</span>

              <span>
                Age
              </span>

              <span>→</span>

              <span>
                Employee ID
              </span>

              <span>→</span>

              <span>
                Clearance
              </span>

              <span>→</span>

              <strong>
                Access
              </strong>

            </div>

          </div>

        </section>


        {/* Challenge */}
        <section className="challenge-section">

          <span className="challenge-label">
            🎯 THE REAL CHALLENGE
          </span>

          <h2>
            Don't check everything at once.
          </h2>

          <p>
            Build your decision hierarchy carefully.
            Your program should know which requirement failed
            and display the correct reason.
          </p>

          <div className="challenge-flow">

            <div>
              Is the input valid?
            </div>

            <span>↓</span>

            <div>
              Is the employee old enough?
            </div>

            <span>↓</span>

            <div>
              Do they have an ID?
            </div>

            <span>↓</span>

            <div>
              Do they have enough clearance?
            </div>

            <span>↓</span>

            <div className="final-access">
              ACCESS GRANTED
            </div>

          </div>

        </section>


        {/* Starter */}
        <section className="starter-section">

          <div className="starter-header">

            <div>
              <span className="starter-label">
                YOUR TURN
              </span>

              <h2>
                Write your solution
              </h2>
            </div>

            <span className="language-label">
              C++
            </span>

          </div>

          <div className="starter-code">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>

              <small>
                mediumoac.cpp
              </small>
            </div>

            <pre>
{`#include <iostream>
using namespace std;

int main() {

    // Create your variables here


    // Ask the user for input


    // Validate the input


    // Check the employee requirements


    return 0;
}`}
            </pre>

          </div>

          <p className="starter-note">
            ⚠️ The starter code is intentionally incomplete.
            Solve the logic yourself!
          </p>

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

export default MediumOac;