import React, { useEffect } from "react";
import "./smartqueuemanagementsystem.css";

const SmartQueueManagementSystem = () => {

      useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  
  return (
    <div className="sqms-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="sqms-hero">

        <div className="sqms-hero-container">

          <div className="sqms-badge">
            C++ LOGIC CHALLENGE
          </div>

          <h1>
            Build a <span>Smart Queue</span>
            <br />
            Management System
          </h1>

          <p>
            Build a government service queue system where the rules
            change depending on the current state of the queue.
          </p>

          <div className="sqms-meta">

            <div className="sqms-difficulty">
              <span>DIFFICULTY</span>
              <strong>🔴 Very Hard</strong>
            </div>

            <div className="sqms-topic">
              <span>MAIN CONCEPT</span>
              <strong>while loop</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="sqms-container">


        {/* =====================================================
            TOPICS
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            01 — CONCEPTS
          </div>

          <h2>
            Topics You Will Practice
          </h2>

          <div className="sqms-topic-grid">

            <div className="sqms-topic-card">
              <span>01</span>
              <strong>cin</strong>
              <p>User input</p>
            </div>

            <div className="sqms-topic-card">
              <span>02</span>
              <strong>cout</strong>
              <p>System output</p>
            </div>

            <div className="sqms-topic-card">
              <span>03</span>
              <strong>Variables</strong>
              <p>Track system state</p>
            </div>

            <div className="sqms-topic-card">
              <span>04</span>
              <strong>if / else</strong>
              <p>Business rules</p>
            </div>

            <div className="sqms-topic-card">
              <span>05</span>
              <strong>Comparison</strong>
              <p>Evaluate conditions</p>
            </div>

            <div className="sqms-topic-card featured">
              <span>06</span>
              <strong>while loop</strong>
              <p>Keep the system running</p>
            </div>

          </div>

        </section>


        {/* =====================================================
            SCENARIO
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            02 — SCENARIO
          </div>

          <div className="sqms-content-card">

            <h2>
              Government Service Center
            </h2>

            <p>
              You are developing a <strong>digital queue system</strong>
              for a government service center.
            </p>

            <p>
              People arrive and request different services.
              The system must continuously accept customers while
              applying different business rules based on the current
              state of the queue.
            </p>

            <div className="sqms-capacity-box">

              <div>
                <span>MAXIMUM CAPACITY</span>
                <strong>15</strong>
              </div>

              <div>
                <span>REGULAR LIMIT</span>
                <strong>8</strong>
              </div>

              <div>
                <span>EMERGENCY LIMIT</span>
                <strong>3</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOMER TYPES
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            03 — CUSTOMER TYPES
          </div>

          <h2>
            Queue Priority Levels
          </h2>

          <div className="sqms-customer-grid">

            <div className="sqms-customer-card regular">

              <div className="sqms-customer-number">
                01
              </div>

              <div>
                <h3>Regular</h3>
                <p>Normal service request</p>
              </div>

              <strong>Priority 1</strong>

            </div>


            <div className="sqms-customer-card senior">

              <div className="sqms-customer-number">
                02
              </div>

              <div>
                <h3>Senior Citizen</h3>
                <p>Priority service request</p>
              </div>

              <strong>Priority 2</strong>

            </div>


            <div className="sqms-customer-card emergency">

              <div className="sqms-customer-number">
                03
              </div>

              <div>
                <h3>Emergency Case</h3>
                <p>Critical service request</p>
              </div>

              <strong>Priority 3</strong>

            </div>

          </div>

        </section>


        {/* =====================================================
            BUSINESS RULES
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            04 — BUSINESS RULES
          </div>

          <h2>
            Rules Your System Must Follow
          </h2>


          {/* RULE 1 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              01
            </div>

            <div className="sqms-rule-content">

              <h3>
                Queue Capacity
              </h3>

              <p>
                The queue can contain a maximum of
                <strong> 15 people.</strong>
              </p>

              <div className="sqms-code-output">
                QUEUE IS FULL
              </div>

              <p>
                Once the queue reaches 15 customers,
                no more customers can be added and
                the program terminates.
              </p>

            </div>

          </div>


          {/* RULE 2 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              02
            </div>

            <div className="sqms-rule-content">

              <h3>
                Emergency Limit
              </h3>

              <p>
                The system can have a maximum of
                <strong> 3 emergency cases.</strong>
              </p>

              <div className="sqms-code-output">
                Emergency slots are full.
              </div>

              <p>
                If three emergency cases already exist,
                another emergency customer cannot be added.
                The queue continues running.
              </p>

            </div>

          </div>


          {/* RULE 3 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              03
            </div>

            <div className="sqms-rule-content">

              <h3>
                Priority Restriction
              </h3>

              <p>
                When there are <strong>3 or fewer spaces</strong>
                remaining, emergency cases are restricted.
              </p>

              <div className="sqms-restriction">

                <span>REMAINING ≤ 3</span>

                <strong>
                  Regular + Senior Citizen
                </strong>

              </div>

              <div className="sqms-code-output">
                Emergency customers are currently restricted.
              </div>

            </div>

          </div>


          {/* RULE 4 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              04
            </div>

            <div className="sqms-rule-content">

              <h3>
                Senior Citizen Rule
              </h3>

              <p>
                When there are <strong>2 or fewer spaces</strong>
                remaining, only Senior Citizens can enter.
              </p>

              <div className="sqms-restriction strict">

                <span>REMAINING ≤ 2</span>

                <strong>
                  SENIOR CITIZENS ONLY
                </strong>

              </div>

              <div className="sqms-code-output">
                Regular customers are currently restricted.
              </div>

            </div>

          </div>


          {/* RULE 5 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              05
            </div>

            <div className="sqms-rule-content">

              <h3>
                Regular Customer Limit
              </h3>

              <p>
                The system can contain a maximum of
                <strong> 8 regular customers.</strong>
              </p>

              <div className="sqms-code-output">
                Regular customer limit reached.
              </div>

            </div>

          </div>


          {/* RULE 6 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              06
            </div>

            <div className="sqms-rule-content">

              <h3>
                Invalid Input
              </h3>

              <p>
                Only <strong>1, 2, or 3</strong> are valid inputs.
              </p>

              <div className="sqms-invalid-input">
                <span>0</span>
                <span>4</span>
                <span>-1</span>
                <span>10</span>
              </div>

              <div className="sqms-code-output">
                Invalid customer type.
              </div>

              <p>
                Invalid input must not terminate the program.
              </p>

            </div>

          </div>


          {/* RULE 7 */}
          <div className="sqms-rule">

            <div className="sqms-rule-number">
              07
            </div>

            <div className="sqms-rule-content">

              <h3>
                Every Accepted Customer Changes the System
              </h3>

              <p>
                Every successful customer must update the
                system's current state.
              </p>

              <div className="sqms-state-list">

                <span>Total Customers</span>
                <span>Regular Customers</span>
                <span>Senior Citizens</span>
                <span>Emergency Cases</span>
                <span>Remaining Spaces</span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SYSTEM STATE
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            05 — SYSTEM STATE
          </div>

          <h2>
            The Rules Change With the State
          </h2>

          <div className="sqms-state-container">

            <div className="sqms-state-card normal">

              <span>STATE 01</span>

              <strong>
                NORMAL QUEUE
              </strong>

              <p>
                More than 3 spaces remaining
              </p>

              <div className="sqms-state-rule">
                All valid customer types
              </div>

            </div>


            <div className="sqms-state-arrow">
              →
            </div>


            <div className="sqms-state-card restricted">

              <span>STATE 02</span>

              <strong>
                RESTRICTED
              </strong>

              <p>
                3 or fewer spaces remaining
              </p>

              <div className="sqms-state-rule">
                Regular + Senior only
              </div>

            </div>


            <div className="sqms-state-arrow">
              →
            </div>


            <div className="sqms-state-card critical">

              <span>STATE 03</span>

              <strong>
                CRITICAL
              </strong>

              <p>
                2 or fewer spaces remaining
              </p>

              <div className="sqms-state-rule">
                Senior Citizens only
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            EXAMPLE
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            06 — EXAMPLE
          </div>

          <h2>
            Follow the System
          </h2>

          <div className="sqms-terminal">

            <div className="terminal-header">

              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                government_queue.exe
              </span>

            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-green">
                  ===== GOVERNMENT SERVICE QUEUE =====
                </span>
              </p>

              <p>
                Maximum Queue: 15
              </p>

              <p>
                Customers: 12
              </p>

              <p>
                Regular: 6
              </p>

              <p>
                Senior: 4
              </p>

              <p>
                Emergency: 2
              </p>

              <p>
                Remaining: 3
              </p>

              <br />

              <p>
                <span className="terminal-green">
                  Only Regular and Senior Citizens
                </span>
              </p>

              <p>
                Enter customer type:
                <span className="terminal-input">
                  3
                </span>
              </p>

              <p className="terminal-error">
                Emergency customers are currently restricted.
              </p>

              <p>
                Enter customer type:
                <span className="terminal-input">
                  2
                </span>
              </p>

              <p className="terminal-success">
                Senior Citizen added.
              </p>

              <p>
                Customers: 13
              </p>

              <p>
                Remaining: 2
              </p>

              <br />

              <p>
                <span className="terminal-green">
                  Only Senior Citizens are allowed
                </span>
              </p>

              <p>
                Enter customer type:
                <span className="terminal-input">
                  1
                </span>
              </p>

              <p className="terminal-error">
                Regular customers are currently restricted.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            LOGIC FLOW
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            07 — LOGIC
          </div>

          <h2>
            Think Like a Software Engineer
          </h2>

          <div className="sqms-flow">

            <div className="sqms-flow-item">
              <span>01</span>
              <strong>
                CUSTOMER ARRIVES
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item">
              <span>02</span>
              <strong>
                IS INPUT VALID?
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item">
              <span>03</span>
              <strong>
                IS QUEUE FULL?
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item">
              <span>04</span>
              <strong>
                CHECK RESTRICTIONS
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item highlight">
              <span>05</span>
              <strong>
                ACCEPT / REJECT
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item">
              <span>06</span>
              <strong>
                UPDATE STATE
              </strong>
            </div>

            <div className="sqms-flow-arrow">
              ↓
            </div>

            <div className="sqms-flow-item loop">
              <span>07</span>
              <strong>
                REPEAT
              </strong>

              <small>
                while queue is open
              </small>
            </div>

          </div>

        </section>


        {/* =====================================================
            WHY WHILE LOOP
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-lesson-card">

            <div className="sqms-lesson-number">
              WHILE
            </div>

            <div>

              <span className="sqms-section-label">
                08 — THE REAL CHALLENGE
              </span>

              <h2>
                Why this is a good while loop lesson
              </h2>

              <p>
                The interesting part isn't simply:
              </p>

              <div className="sqms-code-block">
                while (customers &lt; 15)
              </div>

              <p>
                The challenge is that the{" "}
                <strong>
                  state of the system changes the rules
                </strong>{" "}
                of the next iteration.
              </p>

              <p>
                Students must continuously evaluate the current
                queue state, determine which rules are active,
                decide whether the customer can enter, and then
                update the system before the next iteration.
              </p>

              <div className="sqms-highlight">
                <strong>
                  The loop doesn't just repeat.
                </strong>

                <span>
                  The loop reacts to a changing system.
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            STARTER CODE
        ===================================================== */}
        <section className="sqms-section">

          <div className="sqms-section-label">
            09 — START CODING
          </div>

          <h2>
            Your Challenge
          </h2>

          <div className="sqms-challenge">

            <p>
              Build the complete system using only the topics
              listed above.
            </p>

            <p>
              <strong>
                Do not use arrays, functions, structs, classes,
                or advanced C++ features.
              </strong>
            </p>

            <div className="sqms-code-block">

              <pre>{`#include <iostream>
using namespace std;

int main() {

    // Your variables here


    // Build your queue system here


    return 0;
}`}</pre>

            </div>

            <div className="sqms-challenge-rules">

              <div>
                <span>01</span>
                Use variables to track the queue.
              </div>

              <div>
                <span>02</span>
                Use if / else for business rules.
              </div>

              <div>
                <span>03</span>
                Use a while loop to keep the system running.
              </div>

              <div>
                <span>04</span>
                Every accepted customer must update the state.
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CHALLENGE
        ===================================================== */}
        <section className="sqms-final">

          <span>
            FINAL OBJECTIVE
          </span>

          <h2>
            Can you build the system
            <br />
            without breaking the rules?
          </h2>

          <p>
            Think about the current state.
            Make a decision.
            Update the system.
            Repeat.
          </p>

          <div className="sqms-final-code">
            WHILE → CHECK → DECIDE → UPDATE → REPEAT
          </div>

        </section>

        {/* =====================================================
    VIDEO TUTORIAL
===================================================== */}
<section className="sqms-section">

  <div className="sqms-section-label">
    10 — VIDEO TUTORIAL
  </div>

  <h2>
    Need Help? Watch the Tutorial
  </h2>

  <p className="sqms-video-description">
    Follow the video tutorial to better understand the logic
    behind the Smart Queue Management System.
  </p>

  <div className="sqms-video-container">

    <div className="sqms-video-header">

      <div className="sqms-video-title">
        <span className="sqms-video-icon">
          ▶
        </span>

        <div>
          <strong>
            Smart Queue Management System
          </strong>

          <small>
            C++ Programming Tutorial
          </small>
        </div>
      </div>

      <span className="sqms-video-label">
        TUTORIAL
      </span>

    </div>

    <div className="sqms-video-wrapper">

      <iframe
        src="https://www.youtube.com/embed/kJe8JNCAxPU"
        title="Smart Queue Management System C++ Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

    </div>

  </div>

</section>


      </main>

    </div>
  );
};

export default SmartQueueManagementSystem;