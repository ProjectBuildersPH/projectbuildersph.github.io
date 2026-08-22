import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./easymediumjsas.css";

const EasyMediumJSAS = () => {
    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);

  return (
    <div className="jsas-page">

      {/* =========================================
          BACK BUTTON
      ========================================= */}
      <div className="jsas-back-container">
        <Link to="/learn/cpp" className="jsas-back-button">
          ← Back to C++ Problems
        </Link>
      </div>


      {/* =========================================
          HERO
      ========================================= */}
      <section className="jsas-hero">
        <div className="jsas-container">

          <span className="jsas-label">
            C++ • EASY → MEDIUM
          </span>

          <h1>
            Problem — Jeepney Seat Allocation System
          </h1>

          <p>
            Build a simple jeepney passenger allocation system
            while learning how to control capacity using a
            <code> while </code>
            loop.
          </p>

          <div className="jsas-meta">

            <span>
              Difficulty: Easy → Medium
            </span>

            <span>
              Language: C++
            </span>

            <span>
              Topics: cin, cout, variables, if/else, while
            </span>

          </div>

        </div>
      </section>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <main className="jsas-container jsas-content">


        {/* =========================================
            SCENARIO
        ========================================= */}
        <section className="jsas-card">

          <span className="jsas-section-label">
            🚌 SCENARIO
          </span>

          <h2>
            Jeepney Seat Allocation System
          </h2>

          <p>
            You are creating a simple{" "}
            <strong>jeepney seat allocation system.</strong>
          </p>

          <p>
            The jeepney has exactly:
          </p>

          <div className="jsas-highlight">
            <strong>10 seats</strong>
          </div>

          <p>
            There are two types of passengers.
          </p>


          <div className="jsas-passenger-grid">

            {/* Thin */}
            <div className="jsas-passenger">

              <div className="jsas-passenger-number">
                1
              </div>

              <div>
                <h3>
                  Thin Passenger
                </h3>

                <p>
                  Takes 1 seat.
                </p>
              </div>

            </div>


            {/* Fat */}
            <div className="jsas-passenger">

              <div className="jsas-passenger-number">
                2
              </div>

              <div>
                <h3>
                  Fat Passenger
                </h3>

                <p>
                  Takes 2 seats.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            HOW SYSTEM WORKS
        ========================================= */}
        <section className="jsas-card">

          <span className="jsas-section-label">
            🧠 HOW THE SYSTEM WORKS
          </span>

          <h2>
            Track the Occupied Seats
          </h2>

          <p>
            At the beginning of the program, there are no
            passengers inside the jeepney.
          </p>

          <div className="jsas-code-box">
            Occupied seats = 0
          </div>

          <p>
            Every time a passenger enters, your program should
            update the number of occupied seats.
          </p>


          {/* Example 1 */}
          <div className="jsas-example-box">

            <h3>
              If the user enters 1
            </h3>

            <p>
              A thin passenger enters and occupies 1 seat.
            </p>

            <div className="jsas-mini-code">
              Input: 1
              <br />
              Occupied seats: 1
            </div>

          </div>


          {/* Example 2 */}
          <div className="jsas-example-box">

            <h3>
              If the user enters 2
            </h3>

            <p>
              A fat passenger enters and occupies 2 seats.
            </p>

            <div className="jsas-mini-code">
              Occupied seats: 1
              <br />
              Input: 2
              <br />
              Occupied seats: 3
            </div>

            <p className="jsas-note">
              Because 1 + 2 = 3.
            </p>

          </div>

        </section>


        {/* =========================================
            IMPORTANT PART
        ========================================= */}
        <section className="jsas-card jsas-warning-card">

          <span className="jsas-section-label">
            🚨 IMPORTANT
          </span>

          <h2>
            The Jeepney Must Never Exceed 10 Seats
          </h2>

          <p>
            Your program must make sure that the number of
            occupied seats never becomes greater than 10.
          </p>

          <p>
            Suppose the current number of occupied seats is:
          </p>

          <div className="jsas-highlight">
            <strong>Occupied seats = 9</strong>
          </div>

          <p>
            The user enters:
          </p>

          <div className="jsas-code-box">
            Passenger: 2
          </div>

          <p>
            A fat passenger needs 2 seats.
          </p>

          <div className="jsas-calculation">
            9 + 2 = 11
          </div>

          <p>
            However, the jeepney only has 10 seats.
            Therefore, the passenger cannot enter.
          </p>


          <div className="jsas-error-box">

            <strong>
              Cannot enter. Not enough seats.
            </strong>

            <span>
              Please enter a thin passenger (1).
            </span>

          </div>

          <p>
            After this, the program should allow the user to
            enter another passenger.
          </p>

        </section>


        {/* =========================================
            LOGIC FLOW
        ========================================= */}
        <section className="jsas-card">

          <span className="jsas-section-label">
            🔄 LOGIC FLOW
          </span>

          <h2>
            Think About the Decision
          </h2>

          <div className="jsas-flow">

            <div className="jsas-flow-step">

              <span>
                01
              </span>

              <strong>
                Start
              </strong>

              <small>
                Occupied seats = 0
              </small>

            </div>


            <div className="jsas-flow-arrow">
              ↓
            </div>


            <div className="jsas-flow-step">

              <span>
                02
              </span>

              <strong>
                Ask for passenger type
              </strong>

              <small>
                1 = Thin, 2 = Fat
              </small>

            </div>


            <div className="jsas-flow-arrow">
              ↓
            </div>


            <div className="jsas-flow-step">

              <span>
                03
              </span>

              <strong>
                Determine seat requirement
              </strong>

              <small>
                1 seat or 2 seats
              </small>

            </div>


            <div className="jsas-flow-arrow">
              ↓
            </div>


            <div className="jsas-flow-step">

              <span>
                04
              </span>

              <strong>
                Check available capacity
              </strong>

              <small>
                Will the passenger exceed 10?
              </small>

            </div>


            <div className="jsas-flow-arrow">
              ↓
            </div>


            <div className="jsas-flow-step">

              <span>
                05
              </span>

              <strong>
                Allow or reject passenger
              </strong>

              <small>
                Update occupied seats
              </small>

            </div>


            <div className="jsas-flow-arrow">
              ↓
            </div>


            <div className="jsas-flow-step">

              <span>
                06
              </span>

              <strong>
                Repeat until full
              </strong>

              <small>
                Stop when occupied seats = 10
              </small>

            </div>

          </div>

        </section>


        {/* =========================================
            EXAMPLE RUN
        ========================================= */}
        <section className="jsas-card">

          <span className="jsas-section-label">
            🧪 EXAMPLE RUN
          </span>

          <h2>
            Sample Program Output
          </h2>


          <div className="jsas-terminal">

            <div>
              Jeepney seats: 10
            </div>

            <div>
              Occupied seats: 0
            </div>

            <br />

            <div>
              Enter passenger type:
            </div>

            <div>
              1 = Thin
            </div>

            <div>
              2 = Fat
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 1
            </div>

            <div>
              Passenger: 2
            </div>

            <div>
              Occupied seats: 3
            </div>

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 4
            </div>

            <div>
              Passenger: 2
            </div>

            <div>
              Occupied seats: 6
            </div>

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 7
            </div>

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 8
            </div>

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 9
            </div>

            <div>
              Passenger: 2
            </div>

            <br />

            <div className="terminal-error">
              Cannot enter. Not enough seats.
            </div>

            <div className="terminal-warning">
              Please enter a thin passenger (1).
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Occupied seats: 10
            </div>

            <br />

            <div className="terminal-success">
              Jeepney is full.
            </div>

          </div>

        </section>


        {/* =========================================
            CHALLENGE
        ========================================= */}
        <section className="jsas-card jsas-challenge">

          <span className="jsas-section-label">
            🎯 YOUR CHALLENGE
          </span>

          <h2>
            Can You Build It?
          </h2>

          <p>
            Write the entire program using the rules below.
          </p>


          <div className="jsas-rules">

            <div>
              <span>✓</span>
              <p>
                Use <code>cin</code> and <code>cout</code>.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Use variables to track occupied seats.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Use <code>if / else if / else</code>.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Use a <code>while</code> loop.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Check whether the passenger fits.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Stop when the jeepney reaches 10 seats.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================
            RESTRICTIONS
        ========================================= */}
        <section className="jsas-card">

          <span className="jsas-section-label">
            🚫 RESTRICTIONS
          </span>

          <h2>
            What You Cannot Use
          </h2>

          <div className="jsas-restrictions">

            <span>
              ❌ Arrays
            </span>

            <span>
              ❌ Functions
            </span>

            <span>
              ❌ Classes
            </span>

            <span>
              ❌ switch
            </span>

            <span>
              ❌ vector
            </span>

            <span>
              ❌ string
            </span>

          </div>

          <p className="jsas-restriction-note">
            Focus on variables, conditions, arithmetic, and the{" "}
            <strong>while loop.</strong>
          </p>

        </section>


        {/* =========================================
            HINT
        ========================================= */}
        <section className="jsas-hint-card">

          <div className="jsas-hint-icon">
            💡
          </div>

          <div>

            <span className="jsas-section-label">
              NEED A HINT?
            </span>

            <h2>
              Don't calculate everything at once.
            </h2>

            <p>
              First think about how many seats the passenger
              needs.
            </p>

            <div className="jsas-hint-question">
              "If I add these seats, will I go over 10?"
            </div>

            <p>
              Once you solve that decision, think about where
              your <code>while</code> loop should stop.
            </p>

          </div>

        </section>


        {/* =========================================
            BOTTOM BACK BUTTON
        ========================================= */}
        <div className="jsas-bottom-back">

          <Link
            to="/learn/cpp"
            className="jsas-back-button jsas-back-button-bottom"
          >
            ← Back to C++ Problems
          </Link>

        </div>


      </main>

    </div>
  );
};

export default EasyMediumJSAS;