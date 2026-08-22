import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./mediumjpfcs.css";

const MediumJPFCS = () => {
      useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="jpfcs-page">

      {/* =========================================
          BACK BUTTON
      ========================================= */}
      <div className="jpfcs-back-container">
        <Link to="/learn/cpp" className="jpfcs-back-button">
          ← Back to C++ Problems
        </Link>
      </div>


      {/* =========================================
          HERO
      ========================================= */}
      <section className="jpfcs-hero">
        <div className="jpfcs-container">

          <span className="jpfcs-label">
            C++ • MEDIUM
          </span>

          <h1>
            Problem — Jeepney Passenger & Fare Control System
          </h1>

          <p>
            Build a passenger management system that tracks
            seats, passengers, and the total fare collected.
          </p>

          <div className="jpfcs-meta">

            <span>
              Difficulty: Medium
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
      <main className="jpfcs-container jpfcs-content">


        {/* =========================================
            SCENARIO
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            🚌 SCENARIO
          </span>

          <h2>
            Jeepney Passenger & Fare Control System
          </h2>

          <p>
            You are developing a passenger management system
            for a Philippine jeepney.
          </p>

          <p>
            The jeepney has:
          </p>

          <div className="jpfcs-highlight">
            <strong>10 available seats</strong>
          </div>

          <p>
            There are two types of passengers.
          </p>


          <div className="jpfcs-passenger-grid">

            {/* Thin */}
            <div className="jpfcs-passenger">

              <div className="jpfcs-passenger-number">
                1
              </div>

              <div>
                <h3>
                  Thin Passenger
                </h3>

                <p>
                  Occupies 1 seat
                </p>

                <strong className="jpfcs-fare">
                  ₱13
                </strong>
              </div>

            </div>


            {/* Fat */}
            <div className="jpfcs-passenger">

              <div className="jpfcs-passenger-number">
                2
              </div>

              <div>
                <h3>
                  Fat Passenger
                </h3>

                <p>
                  Occupies 2 seats
                </p>

                <strong className="jpfcs-fare">
                  ₱26
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            THE CHALLENGE
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            🧠 THE CHALLENGE
          </span>

          <h2>
            Track Three Things
          </h2>

          <p>
            Your program must continuously keep track of
            three different values.
          </p>


          <div className="jpfcs-tracking-grid">

            <div className="jpfcs-tracking-card">

              <div className="jpfcs-tracking-icon">
                🪑
              </div>

              <h3>
                Occupied Seats
              </h3>

              <p>
                Number of seats currently occupied.
              </p>

              <code>
                occupiedSeats = 0
              </code>

            </div>


            <div className="jpfcs-tracking-card">

              <div className="jpfcs-tracking-icon">
                👥
              </div>

              <h3>
                Number of Passengers
              </h3>

              <p>
                Number of passengers successfully accepted.
              </p>

              <code>
                passengers = 0
              </code>

            </div>


            <div className="jpfcs-tracking-card">

              <div className="jpfcs-tracking-icon">
                💰
              </div>

              <h3>
                Total Fare
              </h3>

              <p>
                Total amount collected from passengers.
              </p>

              <code>
                totalFare = 0
              </code>

            </div>

          </div>

        </section>


        {/* =========================================
            RULE 1
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            RULE 01
          </span>

          <h2>
            Thin Passenger
          </h2>

          <p>
            If the user enters:
          </p>

          <div className="jpfcs-code-box">
            Passenger type: 1
          </div>

          <p>
            The passenger occupies one seat and pays ₱13.
          </p>

          <div className="jpfcs-result-box">

            <div>
              Occupied seats: <strong>5</strong>
            </div>

            <div>
              Passengers: <strong>5</strong>
            </div>

            <div>
              Total fare: <strong>₱65</strong>
            </div>

          </div>

          <p>
            Remember: a successfully accepted passenger
            increases both the passenger count and fare.
          </p>

        </section>


        {/* =========================================
            RULE 2
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            RULE 02
          </span>

          <h2>
            Fat Passenger
          </h2>

          <p>
            If the user enters:
          </p>

          <div className="jpfcs-code-box">
            Passenger type: 2
          </div>

          <p>
            The passenger occupies two seats and pays ₱26.
          </p>

          <div className="jpfcs-calculation">

            <span>
              Occupied seats: 5
            </span>

            <strong>
              + 2 seats
            </strong>

            <span>
              = 7 seats
            </span>

          </div>

          <div className="jpfcs-result-box">

            <div>
              Occupied seats: <strong>7</strong>
            </div>

            <div>
              Passengers: <strong>6</strong>
            </div>

            <div>
              Total fare: <strong>₱91</strong>
            </div>

          </div>

          <div className="jpfcs-important">

            <strong>
              ⚠️ Important:
            </strong>

            <span>
              Two seats were occupied, but only one passenger
              entered.
            </span>

          </div>

        </section>


        {/* =========================================
            RULE 3
        ========================================= */}
        <section className="jpfcs-card jpfcs-warning-card">

          <span className="jpfcs-section-label">
            RULE 03
          </span>

          <h2>
            Not Enough Seats
          </h2>

          <p>
            The jeepney cannot exceed its 10-seat capacity.
          </p>

          <p>
            Suppose there are:
          </p>

          <div className="jpfcs-highlight">
            <strong>9 occupied seats</strong>
          </div>

          <p>
            The user enters a fat passenger:
          </p>

          <div className="jpfcs-code-box">
            Passenger type: 2
          </div>

          <div className="jpfcs-calculation">
            9 + 2 = 11
          </div>

          <p>
            Since 11 seats would exceed the capacity,
            the passenger cannot enter.
          </p>

          <div className="jpfcs-error-box">

            <strong>
              Not enough seats for a fat passenger.
            </strong>

            <span>
              Please enter a thin passenger.
            </span>

          </div>

          <h3 className="jpfcs-subheading">
            Nothing should change.
          </h3>

          <div className="jpfcs-unchanged">

            <span>
              Occupied seats: <strong>9</strong>
            </span>

            <span>
              Passengers: <strong>unchanged</strong>
            </span>

            <span>
              Total fare: <strong>unchanged</strong>
            </span>

          </div>

        </section>


        {/* =========================================
            RULE 4
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            RULE 04
          </span>

          <h2>
            Invalid Passenger Type
          </h2>

          <p>
            If the user enters anything other than 1 or 2:
          </p>

          <div className="jpfcs-code-box">
            Passenger type: 5
          </div>

          <div className="jpfcs-error-box">

            <strong>
              Invalid passenger type.
            </strong>

            <span>
              Please enter 1 or 2.
            </span>

          </div>

          <p>
            Nothing should change after invalid input.
          </p>

          <div className="jpfcs-result-box">

            <div>
              Occupied seats: <strong>7</strong>
            </div>

            <div>
              Passengers: <strong>5</strong>
            </div>

            <div>
              Total fare: <strong>₱91</strong>
            </div>

          </div>

        </section>


        {/* =========================================
            RULE 5
        ========================================= */}
        <section className="jpfcs-card jpfcs-full-card">

          <span className="jpfcs-section-label">
            RULE 05
          </span>

          <h2>
            Jeepney Full
          </h2>

          <p>
            When:
          </p>

          <div className="jpfcs-code-box">
            occupiedSeats == 10
          </div>

          <p>
            the loop must stop.
          </p>

          <div className="jpfcs-full-message">

            <div>
              ========================
            </div>

            <strong>
              JEEPNEY IS FULL
            </strong>

            <div>
              ========================
            </div>

            <br />

            <span>
              Total passengers: X
            </span>

            <span>
              Occupied seats: 10
            </span>

            <span>
              Total fare collected: ₱X
            </span>

          </div>

        </section>


        {/* =========================================
            LOGIC FLOW
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            🔄 LOGIC FLOW
          </span>

          <h2>
            Think About the Order
          </h2>

          <p>
            The difficult part is knowing when values should
            change and when they should stay the same.
          </p>

          <div className="jpfcs-flow">

            <div className="jpfcs-flow-step">

              <span>01</span>

              <strong>
                Start
              </strong>

              <small>
                Seats = 0 • Passengers = 0 • Fare = ₱0
              </small>

            </div>

            <div className="jpfcs-flow-arrow">
              ↓
            </div>


            <div className="jpfcs-flow-step">

              <span>02</span>

              <strong>
                Ask for passenger type
              </strong>

              <small>
                1 = Thin • 2 = Fat
              </small>

            </div>

            <div className="jpfcs-flow-arrow">
              ↓
            </div>


            <div className="jpfcs-flow-step">

              <span>03</span>

              <strong>
                Is the passenger type valid?
              </strong>

              <small>
                If not, display an error and change nothing.
              </small>

            </div>

            <div className="jpfcs-flow-arrow">
              ↓
            </div>


            <div className="jpfcs-flow-step">

              <span>04</span>

              <strong>
                Check available seats
              </strong>

              <small>
                A thin needs 1 seat. A fat passenger needs 2.
              </small>

            </div>

            <div className="jpfcs-flow-arrow">
              ↓
            </div>


            <div className="jpfcs-flow-step">

              <span>05</span>

              <strong>
                Accept or reject
              </strong>

              <small>
                Only accepted passengers update the totals.
              </small>

            </div>

            <div className="jpfcs-flow-arrow">
              ↓
            </div>


            <div className="jpfcs-flow-step">

              <span>06</span>

              <strong>
                Check if the jeepney is full
              </strong>

              <small>
                Stop when occupied seats reach 10.
              </small>

            </div>

          </div>

        </section>


        {/* =========================================
            EXAMPLE RUN
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            🧪 EXAMPLE RUN
          </span>

          <h2>
            Sample Program Output
          </h2>

          <div className="jpfcs-terminal">

            <div>
              Available seats: 10
            </div>

            <br />

            <div>
              Enter passenger type:
            </div>

            <div>
              1 = Thin (1 seat, ₱13)
            </div>

            <div>
              2 = Fat (2 seats, ₱26)
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Passengers: 1
            </div>

            <div>
              Occupied seats: 1
            </div>

            <div>
              Total fare: ₱13
            </div>

            <br />

            <div>
              Passenger: 2
            </div>

            <div>
              Passengers: 2
            </div>

            <div>
              Occupied seats: 3
            </div>

            <div>
              Total fare: ₱39
            </div>

            <br />

            <div>
              Passenger: 2
            </div>

            <div>
              Passengers: 3
            </div>

            <div>
              Occupied seats: 5
            </div>

            <div>
              Total fare: ₱65
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Passengers: 4
            </div>

            <div>
              Occupied seats: 6
            </div>

            <div>
              Total fare: ₱78
            </div>

            <br />

            <div>
              Passenger: 2
            </div>

            <div>
              Passengers: 5
            </div>

            <div>
              Occupied seats: 8
            </div>

            <div>
              Total fare: ₱104
            </div>

            <br />

            <div>
              Passenger: 2
            </div>

            <div className="terminal-error">
              Not enough seats for a fat passenger.
            </div>

            <div className="terminal-warning">
              Please enter a thin passenger.
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Passengers: 6
            </div>

            <div>
              Occupied seats: 9
            </div>

            <div>
              Total fare: ₱117
            </div>

            <br />

            <div>
              Passenger: 2
            </div>

            <div className="terminal-error">
              Not enough seats for a fat passenger.
            </div>

            <div className="terminal-warning">
              Please enter a thin passenger.
            </div>

            <br />

            <div>
              Passenger: 1
            </div>

            <div>
              Passengers: 7
            </div>

            <div>
              Occupied seats: 10
            </div>

            <div>
              Total fare: ₱130
            </div>

            <br />

            <div>
              ========================
            </div>

            <div className="terminal-success">
              JEEPNEY IS FULL
            </div>

            <div>
              ========================
            </div>

            <br />

            <div>
              Total passengers: 7
            </div>

            <div>
              Occupied seats: 10
            </div>

            <div>
              Total fare collected: ₱130
            </div>

          </div>

        </section>


        {/* =========================================
            CHALLENGE
        ========================================= */}
        <section className="jpfcs-card jpfcs-challenge">

          <span className="jpfcs-section-label">
            🎯 YOUR CHALLENGE
          </span>

          <h2>
            Can You Build the System?
          </h2>

          <p>
            Try solving the problem yourself before looking
            for a solution.
          </p>

          <div className="jpfcs-rules">

            <div>
              <span>✓</span>
              <p>
                Track occupied seats.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Track the number of passengers.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Track the total fare.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Validate passenger type.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Prevent the jeepney from exceeding 10 seats.
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Stop the loop when seats reach 10.
              </p>
            </div>

          </div>

        </section>


        {/* =========================================
            RESTRICTIONS
        ========================================= */}
        <section className="jpfcs-card">

          <span className="jpfcs-section-label">
            🚫 RESTRICTIONS
          </span>

          <h2>
            What You Cannot Use
          </h2>

          <div className="jpfcs-restrictions">

            <span>❌ Arrays</span>
            <span>❌ Functions</span>
            <span>❌ Classes</span>
            <span>❌ switch</span>
            <span>❌ vector</span>
            <span>❌ string</span>

          </div>

          <p className="jpfcs-restriction-note">
            Focus on variables, arithmetic, conditions,
            logical thinking, and the <strong>while loop.</strong>
          </p>

        </section>


        {/* =========================================
            HINT
        ========================================= */}
        <section className="jpfcs-hint-card">

          <div className="jpfcs-hint-icon">
            💡
          </div>

          <div>

            <span className="jpfcs-section-label">
              NEED A HINT?
            </span>

            <h2>
              Don't update the totals too early.
            </h2>

            <p>
              First determine whether the passenger is valid
              and whether there is enough space.
            </p>

            <div className="jpfcs-hint-question">
              Only after the passenger is accepted should
              occupied seats, passenger count, and fare change.
            </div>

            <p>
              Think carefully about what happens when a fat
              passenger tries to enter with only one seat left.
            </p>

          </div>

        </section>


        {/* =========================================
            BOTTOM BACK BUTTON
        ========================================= */}
        <div className="jpfcs-bottom-back">

          <Link
            to="/learn/cpp"
            className="jpfcs-back-button"
          >
            ← Back to C++ Problems
          </Link>

        </div>

      </main>

    </div>
  );
};

export default MediumJPFCS;