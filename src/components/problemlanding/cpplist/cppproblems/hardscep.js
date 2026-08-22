
import React, { useEffect } from "react";
import "./hardscep.css";
import { Link } from "react-router-dom";

const HardScep = () => {
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);

  return (
    <div className="hard-scep-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hard-scep-hero">
        <div className="hard-scep-container">

          <div className="hard-scep-breadcrumb">
            C++ / Problems / Problem #3
          </div>

          <div className="hard-scep-badges">
            <span className="hard-badge">
              HARD
            </span>

            <span className="cpp-badge">
              C++
            </span>
          </div>

          <h1>
            Philippine Jeepney Fare &amp; Discount System
          </h1>

          <p>
            Build a fare calculator that handles passenger types,
            distance, discounts, payments, change, and insufficient
            payments.
          </p>

        </div>
      </section>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="hard-scep-container hard-scep-main">

        {/* Scenario */}
        <section className="scep-section">

          <div className="scep-section-number">
            01
          </div>

          <div className="scep-section-content">

            <h2>
              🚌 Scenario
            </h2>

            <p>
              You are creating a simple fare calculator for a
              <strong> Philippine jeepney.</strong>
            </p>

            <p>
              A passenger enters three pieces of information:
            </p>

            <div className="scep-input-grid">

              <div className="scep-input-card">
                <span>01</span>
                <h3>Passenger Type</h3>
                <p>
                  Determine which fare discount applies.
                </p>
              </div>

              <div className="scep-input-card">
                <span>02</span>
                <h3>Distance Traveled</h3>
                <p>
                  Calculate the regular fare based on kilometers.
                </p>
              </div>

              <div className="scep-input-card">
                <span>03</span>
                <h3>Amount Paid</h3>
                <p>
                  Determine change or remaining balance.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Passenger Types */}
        <section className="scep-section">

          <div className="scep-section-number">
            02
          </div>

          <div className="scep-section-content">

            <h2>
              Passenger Types
            </h2>

            <p>
              The passenger must choose one of the following types:
            </p>

            <div className="passenger-grid">

              <div className="passenger-card">
                <span>1</span>
                <div>
                  <strong>Regular</strong>
                  <small>No discount</small>
                </div>
              </div>

              <div className="passenger-card">
                <span>2</span>
                <div>
                  <strong>Student</strong>
                  <small>20% discount</small>
                </div>
              </div>

              <div className="passenger-card">
                <span>3</span>
                <div>
                  <strong>Senior Citizen</strong>
                  <small>20% discount</small>
                </div>
              </div>

              <div className="passenger-card">
                <span>4</span>
                <div>
                  <strong>PWD</strong>
                  <small>20% discount</small>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* Fare Rules */}
        <section className="scep-section">

          <div className="scep-section-number">
            03
          </div>

          <div className="scep-section-content">

            <h2>
              💰 Fare Rules
            </h2>

            <div className="fare-highlight">

              <div>
                <span className="fare-label">
                  BASE FARE
                </span>

                <strong>
                  ₱13.00
                </strong>

                <p>
                  First 4 kilometers
                </p>
              </div>

              <div className="fare-divider">
                +
              </div>

              <div>
                <span className="fare-label">
                  ADDITIONAL
                </span>

                <strong>
                  ₱2.00
                </strong>

                <p>
                  Every kilometer beyond 4 km
                </p>
              </div>

            </div>

            <div className="fare-examples">

              <div>
                <span>4 km</span>
                <strong>₱13</strong>
              </div>

              <div>
                <span>5 km</span>
                <strong>₱15</strong>
              </div>

              <div>
                <span>6 km</span>
                <strong>₱17</strong>
              </div>

              <div>
                <span>7 km</span>
                <strong>₱19</strong>
              </div>

            </div>

            <div className="calculation-box">

              <span>
                THINK ABOUT THE CALCULATION
              </span>

              <code>
                First 4 km = ₱13
              </code>

              <code>
                Distance beyond 4 km × ₱2
              </code>

              <code>
                Regular Fare = Base Fare + Additional Fare
              </code>

            </div>

          </div>

        </section>


        {/* Discounts */}
        <section className="scep-section">

          <div className="scep-section-number">
            04
          </div>

          <div className="scep-section-content">

            <h2>
              🎓 Discounts
            </h2>

            <p>
              Only regular passengers pay the full fare.
              Students, senior citizens, and PWD passengers
              receive a 20% discount.
            </p>

            <div className="discount-table">

              <div className="discount-row discount-header">
                <span>Passenger</span>
                <span>Discount</span>
                <span>Fare Multiplier</span>
              </div>

              <div className="discount-row">
                <span>Regular</span>
                <strong>0%</strong>
                <code>fare</code>
              </div>

              <div className="discount-row">
                <span>Student</span>
                <strong>20%</strong>
                <code>fare × 0.80</code>
              </div>

              <div className="discount-row">
                <span>Senior Citizen</span>
                <strong>20%</strong>
                <code>fare × 0.80</code>
              </div>

              <div className="discount-row">
                <span>PWD</span>
                <strong>20%</strong>
                <code>fare × 0.80</code>
              </div>

            </div>

          </div>

        </section>


        {/* Business Rules */}
        <section className="scep-section">

          <div className="scep-section-number">
            05
          </div>

          <div className="scep-section-content">

            <h2>
              ⚠️ Business Rules
            </h2>

            <div className="business-rules">

              <div className="business-rule">
                <span>01</span>

                <div>
                  <h3>Invalid Distance</h3>

                  <p>
                    Distance must be at least 1 kilometer.
                  </p>

                  <code>
                    distance &lt; 1
                  </code>

                  <strong>
                    Invalid distance.
                  </strong>
                </div>
              </div>


              <div className="business-rule">
                <span>02</span>

                <div>
                  <h3>Invalid Passenger Type</h3>

                  <p>
                    Passenger type must be 1, 2, 3, or 4.
                  </p>

                  <code>
                    choice &lt; 1 || choice &gt; 4
                  </code>

                  <strong>
                    Invalid passenger type.
                  </strong>
                </div>
              </div>


              <div className="business-rule">
                <span>03</span>

                <div>
                  <h3>Exact Payment</h3>

                  <p>
                    If the payment is exactly equal to the final fare:
                  </p>

                  <strong>
                    Payment accepted.
                  </strong>

                  <small>
                    No change.
                  </small>
                </div>
              </div>


              <div className="business-rule">
                <span>04</span>

                <div>
                  <h3>More Than the Fare</h3>

                  <p>
                    If the passenger pays more than the final fare,
                    calculate the change.
                  </p>

                  <strong>
                    Payment accepted.
                  </strong>

                  <small>
                    Change = Payment - Final Fare
                  </small>
                </div>
              </div>


              <div className="business-rule">
                <span>05</span>

                <div>
                  <h3>Insufficient Payment</h3>

                  <p>
                    If the passenger does not have enough money:
                  </p>

                  <strong>
                    Insufficient payment.
                  </strong>

                  <small>
                    Remaining balance = Final Fare - Payment
                  </small>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* Decision Flow */}
        <section className="scep-section">

          <div className="scep-section-number">
            06
          </div>

          <div className="scep-section-content">

            <h2>
              🧠 Decision Flow
            </h2>

            <p>
              Your program has several decisions to make.
              Think about the order carefully.
            </p>

            <div className="decision-flow">

              <div className="decision-box">
                <span>START</span>
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-box">
                Enter passenger type
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-question">
                Is passenger type valid?
              </div>

              <div className="decision-branches">

                <div className="decision-branch invalid">
                  <span>NO</span>
                  <strong>ERROR</strong>
                </div>

                <div className="decision-branch valid">
                  <span>YES</span>
                  <strong>Continue</strong>
                </div>

              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-box">
                Enter distance
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-question">
                Is distance valid?
              </div>

              <div className="decision-branches">

                <div className="decision-branch invalid">
                  <span>NO</span>
                  <strong>ERROR</strong>
                </div>

                <div className="decision-branch valid">
                  <span>YES</span>
                  <strong>Calculate Fare</strong>
                </div>

              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-box">
                Calculate Regular Fare
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-box">
                Apply Discount
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-box">
                Enter Payment
              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-question">
                Is payment enough?
              </div>

              <div className="decision-branches">

                <div className="decision-branch invalid">
                  <span>NO</span>
                  <strong>Show Balance</strong>
                </div>

                <div className="decision-branch valid">
                  <span>YES</span>
                  <strong>Calculate Change</strong>
                </div>

              </div>

              <div className="decision-arrow">
                ↓
              </div>

              <div className="decision-success">
                PAYMENT ACCEPTED
              </div>

            </div>

          </div>

        </section>


        {/* Examples */}
        <section className="scep-section">

          <div className="scep-section-number">
            07
          </div>

          <div className="scep-section-content">

            <h2>
              🧪 Examples
            </h2>

            <div className="scep-example-grid">

              {/* Example 1 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 1</span>
                  <span>REGULAR</span>
                </div>

                <pre>
{`Choice: 1
Distance: 6
Payment: 50

Fare: ₱17.00
Discount: ₱0.00
Final fare: ₱17.00

Payment accepted.
Change: ₱33.00`}
                </pre>

              </div>


              {/* Example 2 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 2</span>
                  <span>STUDENT</span>
                </div>

                <pre>
{`Choice: 2
Distance: 10
Payment: 50

Fare: ₱25.00
Discount: ₱5.00
Final fare: ₱20.00

Payment accepted.
Change: ₱30.00`}
                </pre>

              </div>


              {/* Example 3 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 3</span>
                  <span>SENIOR</span>
                </div>

                <pre>
{`Choice: 3
Distance: 8
Payment: 19.20

Fare: ₱21.00
Discount: ₱4.20
Final fare: ₱16.80

Payment accepted.
No change.`}
                </pre>

              </div>


              {/* Example 4 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 4</span>
                  <span>INSUFFICIENT</span>
                </div>

                <pre>
{`Choice: 1
Distance: 10
Payment: 20

Fare: ₱25.00
Discount: ₱0.00
Final fare: ₱25.00

Insufficient payment.
Remaining balance: ₱5.00`}
                </pre>

              </div>


              {/* Example 5 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 5</span>
                  <span>INVALID</span>
                </div>

                <pre>
{`Choice: 7

Invalid passenger type.`}
                </pre>

              </div>


              {/* Example 6 */}
              <div className="scep-example-card">

                <div className="scep-example-header">
                  <span>Example 6</span>
                  <span>INVALID</span>
                </div>

                <pre>
{`Choice: 2
Distance: -5

Invalid distance.`}
                </pre>

              </div>

            </div>

          </div>

        </section>


        {/* Calculation Example */}
        <section className="calculation-section">

          <span className="calculation-label">
            🧮 CALCULATION BREAKDOWN
          </span>

          <h2>
            Student traveling 10 kilometers
          </h2>

          <div className="calculation-steps">

            <div>
              <span>01</span>
              <p>
                First 4 km
              </p>
              <strong>
                ₱13
              </strong>
            </div>

            <div>
              <span>02</span>
              <p>
                Additional distance
              </p>
              <strong>
                10 - 4 = 6 km
              </strong>
            </div>

            <div>
              <span>03</span>
              <p>
                Additional fare
              </p>
              <strong>
                6 × ₱2 = ₱12
              </strong>
            </div>

            <div>
              <span>04</span>
              <p>
                Regular fare
              </p>
              <strong>
                ₱13 + ₱12 = ₱25
              </strong>
            </div>

            <div>
              <span>05</span>
              <p>
                Student discount
              </p>
              <strong>
                ₱25 × 20% = ₱5
              </strong>
            </div>

            <div className="calculation-final">
              <span>06</span>
              <p>
                Final fare
              </p>
              <strong>
                ₱25 - ₱5 = ₱20
              </strong>
            </div>

          </div>

        </section>


        {/* Restrictions */}
        <section className="scep-section">

          <div className="scep-section-number">
            08
          </div>

          <div className="scep-section-content">

            <h2>
              🚨 Restrictions
            </h2>

            <p>
              This is a hard-level problem, so keep the solution
              limited to the fundamentals.
            </p>

            <div className="restriction-grid">

              <div className="restriction-group">

                <h3>
                  ✅ You May Use
                </h3>

                <div className="restriction-tags allowed">
                  <span>cin</span>
                  <span>cout</span>
                  <span>variables</span>
                  <span>if</span>
                  <span>else if</span>
                  <span>else</span>
                  <span>&amp;&amp;</span>
                  <span>||</span>
                  <span>==</span>
                  <span>!=</span>
                  <span>&gt;</span>
                  <span>&lt;</span>
                  <span>&gt;=</span>
                  <span>&lt;=</span>
                  <span>Arithmetic</span>
                </div>

              </div>


              <div className="restriction-group">

                <h3>
                  ❌ Do Not Use
                </h3>

                <div className="restriction-tags blocked">
                  <span>Loops</span>
                  <span>Arrays</span>
                  <span>Functions</span>
                  <span>switch</span>
                  <span>Classes</span>
                  <span>vector</span>
                  <span>string</span>
                  <span>Fare Libraries</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Hard Mode */}
        <section className="hard-mode-section">

          <div className="hard-mode-icon">
            🔥
          </div>

          <span>
            HARD-MODE CHALLENGE
          </span>

          <h2>
            Can you build the entire system
            from the problem statement alone?
          </h2>

          <p>
            Don't focus on typing the C++ first.
            Focus on understanding the order of operations.
          </p>

          <div className="hard-mode-flow">

            <div>
              Validation
            </div>

            <span>→</span>

            <div>
              Fare Calculation
            </div>

            <span>→</span>

            <div>
              Discount
            </div>

            <span>→</span>

            <div>
              Payment
            </div>

            <span>→</span>

            <div>
              Change / Balance
            </div>

          </div>

        </section>


        {/* Starter Code */}
        <section className="scep-starter-section">

          <div className="scep-starter-header">

            <div>
              <span>
                YOUR TURN
              </span>

              <h2>
                Build the fare calculator
              </h2>
            </div>

            <strong>
              C++
            </strong>

          </div>

          <div className="scep-code">

            <div className="scep-code-header">

              <div className="code-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <small>
                hardscep.cpp
              </small>

            </div>

            <pre>
{`#include <iostream>
using namespace std;

int main() {

    // Create your variables


    // Get passenger type


    // Validate passenger type


    // Get distance


    // Validate distance


    // Calculate the regular fare


    // Apply the appropriate discount


    // Get payment


    // Check payment


    // Calculate change or remaining balance


    return 0;
}`}
            </pre>

          </div>

          <p className="scep-starter-note">
            ⚠️ The solution is intentionally incomplete.
            Use the problem statement to build the logic yourself.
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

export default HardScep;