import React from "react";
import { Link } from "react-router-dom";
import "./smartparkinggaragemanagementsystem.css";

const SmartParkingGarageManagementSystem = () => {
  return (
    <div className="spgms-page">

      {/* Header */}
      <section className="spgms-header">
        <div className="spgms-container">

          <span className="spgms-label">
            PROBLEM #8 • VERY HARD
          </span>

          <h1>
            Smart Parking Garage Management System
          </h1>

          <p>
            Build a parking garage management system that tracks vehicles,
            available spaces, revenue, capacity limits, and garage performance.
          </p>

          <div className="spgms-meta">
            <span>Difficulty: Very Hard</span>
            <span>Language: C++</span>
            <span>Topics: cin, cout, variables, if/else, while</span>
          </div>

        </div>
      </section>


      {/* Main Content */}
      <main className="spgms-container spgms-content">

        {/* Scenario */}
        <section className="spgms-section">

          <span className="spgms-section-label">
            🚗 SCENARIO
          </span>

          <h2>
            Smart Parking Garage
          </h2>

          <p>
            You are developing a <strong>parking garage management system</strong>
            for a parking garage in the United States.
          </p>

          <p>
            The garage has a maximum capacity of:
          </p>

          <div className="spgms-highlight">
            <strong>20 parking spaces</strong>
          </div>

        </section>


        {/* Vehicle Table */}
        <section className="spgms-section">

          <h2>Vehicle Types</h2>

          <div className="spgms-table-wrapper">
            <table className="spgms-table">

              <thead>
                <tr>
                  <th>Input</th>
                  <th>Vehicle</th>
                  <th>Spaces</th>
                  <th>Parking Fee</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Motorcycle</td>
                  <td>1</td>
                  <td>$5</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Car</td>
                  <td>1</td>
                  <td>$10</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>SUV</td>
                  <td>2</td>
                  <td>$15</td>
                </tr>
              </tbody>

            </table>
          </div>

          <div className="spgms-code-box">
            <p>Available spaces = 20</p>
            <p>Total vehicles = 0</p>
            <p>Total revenue = $0</p>
          </div>

        </section>


        {/* Main Program */}
        <section className="spgms-section">

          <span className="spgms-section-label">
            🔄 MAIN PROGRAM
          </span>

          <h2>
            Keep Accepting Vehicles
          </h2>

          <p>
            The program repeatedly asks the user:
          </p>

          <div className="spgms-code-box">
            <p>Enter vehicle type:</p>
            <p>1 = Motorcycle</p>
            <p>2 = Car</p>
            <p>3 = SUV</p>
            <p>0 = Close garage</p>
            <p>Choice:</p>
          </div>

          <p>
            The program continues until the user enters <strong>0</strong> or
            the garage becomes completely full.
          </p>

        </section>


        {/* Rule 1 */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 1
          </span>

          <h2>Valid Vehicle Type</h2>

          <p>Valid choices are:</p>

          <div className="spgms-choice-list">
            <div>0 — Close garage</div>
            <div>1 — Motorcycle</div>
            <div>2 — Car</div>
            <div>3 — SUV</div>
          </div>

          <div className="spgms-warning">
            <strong>Invalid input:</strong>
            <p>
              Invalid vehicle type.
            </p>
            <p>
              Please enter 0, 1, 2, or 3.
            </p>
          </div>

          <p>
            Nothing should change when invalid input is entered.
          </p>

        </section>


        {/* Rule 2 */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 2
          </span>

          <h2>Check Parking Space</h2>

          <p>
            A vehicle can only enter if there are enough spaces available.
          </p>

          <div className="spgms-vehicle-grid">

            <div className="spgms-vehicle-card">
              <strong>Motorcycle</strong>
              <span>Requires 1 space</span>
            </div>

            <div className="spgms-vehicle-card">
              <strong>Car</strong>
              <span>Requires 1 space</span>
            </div>

            <div className="spgms-vehicle-card">
              <strong>SUV</strong>
              <span>Requires 2 spaces</span>
            </div>

          </div>

          <div className="spgms-example-box">
            <h3>Example</h3>

            <p>Available spaces: 1</p>
            <p>Choice: 3</p>

            <strong>SUV rejected.</strong>

            <p>
              Reason: Not enough parking spaces.
            </p>
          </div>

          <p>
            The garage state must remain unchanged.
          </p>

        </section>


        {/* Limited Capacity */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 3
          </span>

          <h2>Limited Capacity Mode</h2>

          <p>
            When the garage reaches <strong>2 or fewer available spaces</strong>,
            it immediately enters:
          </p>

          <div className="spgms-limited">
            LIMITED CAPACITY MODE
          </div>

          <p>
            Only vehicles that actually fit the remaining spaces may enter.
          </p>

          <h3>When 2 Spaces Remain</h3>

          <div className="spgms-code-box">
            <p>Motorcycle → Allowed → 2 - 1 = 1</p>
            <p>Car → Allowed → 2 - 1 = 1</p>
            <p>SUV → Allowed → 2 - 2 = 0</p>
          </div>

          <h3>When 1 Space Remains</h3>

          <div className="spgms-code-box">
            <p>Motorcycle → Allowed → 1 - 1 = 0</p>
            <p>Car → Allowed → 1 - 1 = 0</p>
            <p>SUV → Rejected → Requires 2 spaces</p>
          </div>

          <div className="spgms-important">
            <strong>Important:</strong>
            <p>
              Limited Capacity Mode does not automatically reject vehicles.
              You must check whether the vehicle actually fits.
            </p>
          </div>

        </section>


        {/* Accepted Vehicle */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 4
          </span>

          <h2>Accepted Vehicle</h2>

          <p>
            When a vehicle is accepted, update all three pieces of information.
          </p>

          <div className="spgms-update-grid">

            <div>
              <strong>Motorcycle</strong>
              <p>Spaces − 1</p>
              <p>Vehicles + 1</p>
              <p>Revenue + $5</p>
            </div>

            <div>
              <strong>Car</strong>
              <p>Spaces − 1</p>
              <p>Vehicles + 1</p>
              <p>Revenue + $10</p>
            </div>

            <div>
              <strong>SUV</strong>
              <p>Spaces − 2</p>
              <p>Vehicles + 1</p>
              <p>Revenue + $15</p>
            </div>

          </div>

        </section>


        {/* Rejected */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 5
          </span>

          <h2>Rejected Vehicle</h2>

          <p>
            If a vehicle cannot fit, <strong>nothing changes.</strong>
          </p>

          <div className="spgms-code-box">
            <p>Available spaces: 1</p>
            <p>Total vehicles: 15</p>
            <p>Revenue: $150</p>
            <br />
            <p>Choice: 3</p>
            <br />
            <p>SUV rejected.</p>
            <p>Reason: Not enough parking spaces.</p>
          </div>

          <p>The values must remain:</p>

          <div className="spgms-code-box">
            <p>Available spaces: 1</p>
            <p>Total vehicles: 15</p>
            <p>Revenue: $150</p>
          </div>

        </section>


        {/* Revenue Target */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 6
          </span>

          <h2>Revenue Target</h2>

          <p>
            The garage has a daily revenue target of:
          </p>

          <div className="spgms-highlight">
            <strong>$100</strong>
          </div>

          <p>
            Whenever total revenue reaches or exceeds $100, display:
          </p>

          <div className="spgms-success">
            <strong>Revenue target reached!</strong>
          </div>

          <p>
            Reaching the revenue target does <strong>not</strong> stop the
            program.
          </p>

        </section>


        {/* Garage Full */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 7
          </span>

          <h2>Garage Full</h2>

          <p>
            If:
          </p>

          <div className="spgms-code-box">
            <p>Available spaces == 0</p>
          </div>

          <div className="spgms-full">
            PARKING GARAGE FULL
          </div>

          <p>
            The program must automatically stop the <code>while</code> loop.
          </p>

        </section>


        {/* Close Garage */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 8
          </span>

          <h2>Close Garage</h2>

          <p>
            The user can manually close the garage at any time by entering:
          </p>

          <div className="spgms-highlight">
            <strong>0</strong>
          </div>

          <div className="spgms-code-box">
            <p>Closing parking garage...</p>
          </div>

        </section>


        {/* Final Report */}
        <section className="spgms-section">

          <span className="spgms-rule">
            RULE 9
          </span>

          <h2>Final Garage Evaluation</h2>

          <p>
            When the garage closes, generate a final report.
          </p>

          <div className="spgms-report">

            <h3>PARKING GARAGE REPORT</h3>

            <p>Total vehicles: X</p>
            <p>Spaces remaining: X</p>
            <p>Total revenue: $X</p>

          </div>

          <h3>Garage Success</h3>

          <p>
            The garage is successful only if <strong>both</strong> conditions
            are satisfied:
          </p>

          <div className="spgms-code-box">
            <p>Total vehicles &gt;= 10</p>
            <p>AND</p>
            <p>Total revenue &gt;= $100</p>
          </div>

          <div className="spgms-success">
            Garage utilization target achieved.
          </div>

          <p>Otherwise:</p>

          <div className="spgms-warning">
            Garage utilization target not achieved.
          </div>

        </section>


        {/* Logic */}
        <section className="spgms-section">

          <span className="spgms-section-label">
            🧠 THE REAL LOGIC CHALLENGE
          </span>

          <h2>
            Track the Garage State
          </h2>

          <p>
            Your program needs to maintain these variables:
          </p>

          <div className="spgms-state-grid">

            <div>
              <strong>availableSpaces</strong>
              <span>Remaining parking spaces</span>
            </div>

            <div>
              <strong>totalVehicles</strong>
              <span>Number of accepted vehicles</span>
            </div>

            <div>
              <strong>totalRevenue</strong>
              <span>Total money collected</span>
            </div>

            <div>
              <strong>vehicleType</strong>
              <span>User's current choice</span>
            </div>

          </div>

          <h3>Accepted Motorcycle</h3>

          <div className="spgms-code-box">
            <p>spaces: -1</p>
            <p>vehicles: +1</p>
            <p>revenue: +5</p>
          </div>

          <h3>Accepted Car</h3>

          <div className="spgms-code-box">
            <p>spaces: -1</p>
            <p>vehicles: +1</p>
            <p>revenue: +10</p>
          </div>

          <h3>Accepted SUV</h3>

          <div className="spgms-code-box">
            <p>spaces: -2</p>
            <p>vehicles: +1</p>
            <p>revenue: +15</p>
          </div>

          <h3>Rejected Vehicle</h3>

          <div className="spgms-code-box">
            <p>spaces: 0</p>
            <p>vehicles: 0</p>
            <p>revenue: 0</p>
          </div>

        </section>


        {/* Decision Order */}
        <section className="spgms-section">

          <span className="spgms-section-label">
            🔥 RECOMMENDED DECISION ORDER
          </span>

          <h2>
            Think Before You Code
          </h2>

          <div className="spgms-flow">

            <div>START</div>
            <span>↓</span>

            <div>Is garage full?</div>
            <span>↓</span>

            <div>Show Limited Capacity Mode if spaces &lt;= 2</div>
            <span>↓</span>

            <div>Ask vehicle type</div>
            <span>↓</span>

            <div>Is input valid?</div>
            <span>↓</span>

            <div>How many spaces does this vehicle require?</div>
            <span>↓</span>

            <div>Does the vehicle fit?</div>
            <span>↓</span>

            <div>Accept or reject vehicle</div>
            <span>↓</span>

            <div>Update spaces</div>
            <span>↓</span>

            <div>Update vehicle count</div>
            <span>↓</span>

            <div>Update revenue</div>
            <span>↓</span>

            <div>Check revenue target</div>
            <span>↓</span>

            <div>Check if garage is full</div>
            <span>↓</span>

            <div>Repeat</div>

          </div>

        </section>


        {/* Restrictions */}
        <section className="spgms-section">

          <span className="spgms-section-label">
            🎯 RESTRICTIONS
          </span>

          <h2>
            What You Can Use
          </h2>

          <div className="spgms-tags">

            <span>cin</span>
            <span>cout</span>
            <span>variables</span>
            <span>if</span>
            <span>else if</span>
            <span>else</span>
            <span>while</span>
            <span>comparison operators</span>
            <span>logical operators</span>
            <span>arithmetic operators</span>

          </div>

          <h3>Do NOT Use</h3>

          <div className="spgms-restrictions">

            <span>❌ for</span>
            <span>❌ do while</span>
            <span>❌ arrays</span>
            <span>❌ functions</span>
            <span>❌ switch</span>
            <span>❌ classes</span>
            <span>❌ structs</span>
            <span>❌ vectors</span>

          </div>

        </section>


        {/* Challenge */}
        <section className="spgms-challenge">

          <div className="spgms-challenge-icon">
            🔥
          </div>

          <h2>
            Very Hard Challenge
          </h2>

          <p>
            Try to write the entire C++ program from the problem statement
            alone.
          </p>

          <p>
            The goal isn't just typing the code.
            <br />
            The real challenge is designing the correct decision flow.
          </p>

          <div className="spgms-challenge-flow">
            Validation → Capacity → Acceptance → State Updates → Revenue → Full Check
          </div>

        </section>


        {/* Back Button */}
        <div className="spgms-bottom-navigation">

          <Link to="/learn/cpp" className="spgms-back-button large">
            ← Back to C++ Problems
          </Link>

        </div>

      </main>

    </div>
  );
};

export default SmartParkingGarageManagementSystem;