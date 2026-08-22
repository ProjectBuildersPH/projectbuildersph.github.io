import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./characterpositionfinder.css";

const CharacterPositionFinder = () => {

      useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <div className="cpf-page">

      {/* Header */}
      <section className="cpf-header">
        <div className="cpf-container">



          <h1>
            Character Position Finder
          </h1>

          <div className="cpf-meta">
            <span className="cpf-difficulty">
              Medium → Hard
            </span>

            <span>
              Language: C++
            </span>

            <span>
              Topics: cin, cout, variables, if/else, while, do while
            </span>
          </div>

          <p>
            Search through a word character by character and find
            every position where a specific character appears.
          </p>

        </div>
      </section>


      {/* Main Content */}
      <main className="cpf-container cpf-content">

        {/* Scenario */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🧠 SCENARIO
          </span>

          <h2>
            Character Search
          </h2>

          <p>
            You are building a simple text-processing feature for
            a software application.
          </p>

          <p>
            The user enters a <strong>word</strong>, then enters a
            <strong> single character</strong> they want to search for.
          </p>

          <p>
            Your program must examine the word <strong>one character
            at a time</strong> and determine where the character appears.
          </p>

          <div className="cpf-note">
            The first character has index <strong>0</strong>.
          </div>

        </section>


        {/* Input */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            📥 INPUT
          </span>

          <h2>
            What should the program ask?
          </h2>

          <div className="cpf-code-box">
            <code>
              Enter a word: programming
              <br />
              Enter a character to search: g
            </code>
          </div>

          <p>
            Your program should then examine every character in the
            word and determine whether it matches the search character.
          </p>

        </section>


        {/* Example 1 */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🔍 EXAMPLE 1
          </span>

          <h2>
            Character Appears Multiple Times
          </h2>

          <div className="cpf-code-box">
            <code>
              Enter a word: programming
              <br />
              Enter a character to search: g
              <br />
              <br />
              Character 'g' found at index: 3
              <br />
              Character 'g' found at index: 10
              <br />
              <br />
              Total occurrences: 2
            </code>
          </div>

          <p>
            Remember that indexing starts from <strong>0</strong>.
          </p>

          <div className="cpf-word-display">
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span className="cpf-highlight">g</span>
            <span>r</span>
            <span>a</span>
            <span>m</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
            <span className="cpf-highlight">g</span>
          </div>

          <div className="cpf-index-display">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>

        </section>


        {/* Example 2 */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🧪 EXAMPLE 2
          </span>

          <h2>
            Character Appears Once
          </h2>

          <div className="cpf-code-box">
            <code>
              Enter a word: computer
              <br />
              Enter a character to search: p
              <br />
              <br />
              Character 'p' found at index: 3
              <br />
              <br />
              Total occurrences: 1
            </code>
          </div>

        </section>


        {/* Example 3 */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🔎 EXAMPLE 3
          </span>

          <h2>
            Character Doesn't Exist
          </h2>

          <div className="cpf-code-box">
            <code>
              Enter a word: computer
              <br />
              Enter a character to search: z
              <br />
              <br />
              Character 'z' was not found.
              <br />
              <br />
              Total occurrences: 0
            </code>
          </div>

        </section>


        {/* Rules */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🚨 IMPORTANT RULES
          </span>

          <h2>
            Rules You Must Follow
          </h2>

          <div className="cpf-rule">

            <h3>
              Rule 1 — Search the Entire Word
            </h3>

            <p>
              You cannot stop when you find the first occurrence.
              The program must continue until it checks the entire word.
            </p>

            <div className="cpf-example-inline">
              <strong>banana</strong> + search character <strong>a</strong>
            </div>

            <p>
              Expected indexes:
            </p>

            <div className="cpf-index-tags">
              <span>1</span>
              <span>3</span>
              <span>5</span>
            </div>

          </div>


          <div className="cpf-rule">

            <h3>
              Rule 2 — Case Sensitivity
            </h3>

            <p>
              The search is <strong>case-sensitive</strong>.
            </p>

            <div className="cpf-code-box">
              <code>
                Word: Apple
                <br />
                Search: a
                <br />
                <br />
                Character 'a' was not found.
              </code>
            </div>

            <p>
              But searching for uppercase <strong>A</strong> would
              find the character at index <strong>0</strong>.
            </p>

          </div>


          <div className="cpf-rule">

            <h3>
              Rule 3 — Character Input
            </h3>

            <p>
              The search input must contain exactly one character.
            </p>

            <div className="cpf-valid-invalid">

              <div className="cpf-valid">
                <strong>✓ Valid</strong>
                <span>p</span>
              </div>

              <div className="cpf-invalid">
                <strong>✕ Invalid</strong>
                <span>pp</span>
              </div>

            </div>

            <div className="cpf-code-box">
              <code>
                Invalid search character.
                <br />
                Please enter exactly one character.
              </code>
            </div>

          </div>

        </section>


        {/* Repeat Search */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🔄 RULE 4
          </span>

          <h2>
            Repeat Search
          </h2>

          <p>
            After completing a search, ask the user:
          </p>

          <div className="cpf-question">
            Search another character?
          </div>

          <div className="cpf-choice-grid">

            <div>
              <strong>1</strong>
              <span>Yes</span>
            </div>

            <div>
              <strong>0</strong>
              <span>No</span>
            </div>

          </div>

          <p>
            If the user chooses <strong>1</strong>, search another
            character in the <strong>same word</strong>.
          </p>

          <p>
            If the user chooses <strong>0</strong>, end the program.
          </p>

          <div className="cpf-note">
            💡 This is where a <strong>do while</strong> loop becomes useful.
          </div>

        </section>


        {/* Full Example */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🧪 FULL EXAMPLE
          </span>

          <h2>
            Multiple Searches
          </h2>

          <div className="cpf-code-box cpf-large-code">
            <code>
              Enter a word: programming
              <br />
              <br />
              Enter a character to search: m
              <br />
              Character 'm' found at index: 6
              <br />
              Character 'm' found at index: 7
              <br />
              Total occurrences: 2
              <br />
              <br />
              Search another character?
              <br />
              1 = Yes
              <br />
              0 = No
              <br />
              Choice: 1
              <br />
              <br />
              Enter a character to search: r
              <br />
              Character 'r' found at index: 1
              <br />
              Character 'r' found at index: 4
              <br />
              Total occurrences: 2
              <br />
              <br />
              Search another character?
              <br />
              Choice: 1
              <br />
              <br />
              Enter a character to search: z
              <br />
              Character 'z' was not found.
              <br />
              Total occurrences: 0
              <br />
              <br />
              Search another character?
              <br />
              Choice: 0
              <br />
              <br />
              Search finished.
            </code>
          </div>

        </section>


        {/* Logic Challenge */}
        <section className="cpf-card cpf-challenge">

          <span className="cpf-section-label">
            🧠 YOUR LOGIC CHALLENGE
          </span>

          <h2>
            You Need Two Different Loops
          </h2>

          <p>
            This problem uses two loops, but each loop has a different
            responsibility.
          </p>

          <div className="cpf-loop-grid">

            <div className="cpf-loop-box">

              <span className="cpf-loop-number">
                01
              </span>

              <h3>
                Outer do while
              </h3>

              <p>
                Controls the repeated searches.
              </p>

              <div className="cpf-flow">
                Search
                <br />
                ↓
                <br />
                Ask Again
                <br />
                ↓
                <br />
                Search
              </div>

            </div>


            <div className="cpf-loop-box">

              <span className="cpf-loop-number">
                02
              </span>

              <h3>
                Inner while
              </h3>

              <p>
                Moves through every character in the word.
              </p>

              <div className="cpf-flow">
                Index 0
                <br />
                ↓
                <br />
                Index 1
                <br />
                ↓
                <br />
                Index 2
                <br />
                ↓
                <br />
                ...
              </div>

            </div>

          </div>

        </section>


        {/* Logic Flow */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🎯 LOGIC FLOW
          </span>

          <h2>
            Think About the Program in This Order
          </h2>

          <div className="cpf-flowchart">

            <div className="cpf-flow-step">
              START
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Ask for the word
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Ask for search character
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Validate character input
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Start index at 0
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Check current character
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Does it match?
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Display index if matched
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Increase index
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Continue until the word ends
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Display total occurrences
            </div>

            <span>↓</span>

            <div className="cpf-flow-step">
              Ask whether to search again
            </div>

          </div>

        </section>


        {/* Hints */}
        <section className="cpf-card cpf-hints">

          <span className="cpf-section-label">
            💡 HINTS
          </span>

          <h2>
            Need a Little Help?
          </h2>

          <div className="cpf-hint">

            <span>Hint 1</span>

            <p>
              Think about how you can access a character at a specific
              position inside a word.
            </p>

          </div>

          <div className="cpf-hint">

            <span>Hint 2</span>

            <p>
              You need a variable that represents the current position
              in the word.
            </p>

          </div>

          <div className="cpf-hint">

            <span>Hint 3</span>

            <p>
              Every time the current character matches the search
              character, increase your occurrence counter.
            </p>

          </div>

          <div className="cpf-hint">

            <span>Hint 4</span>

            <p>
              The inner loop should continue while your current index
              is smaller than the word's length.
            </p>

          </div>

          <div className="cpf-hint">

            <span>Hint 5</span>

            <p>
              The outer loop needs to continue only when the user
              chooses <strong>1</strong>.
            </p>

          </div>

        </section>


        {/* Restrictions */}
        <section className="cpf-card">

          <span className="cpf-section-label">
            🚨 RESTRICTIONS
          </span>

          <h2>
            What You Can and Cannot Use
          </h2>

          <div className="cpf-restrictions">

            <div className="cpf-allowed">

              <h3>✓ You may use</h3>

              <ul>
                <li>cin</li>
                <li>cout</li>
                <li>variables</li>
                <li>if / else if / else</li>
                <li>while</li>
                <li>do while</li>
                <li>comparison operators</li>
                <li>logical operators</li>
                <li>string</li>
              </ul>

            </div>


            <div className="cpf-not-allowed">

              <h3>✕ Do not use</h3>

              <ul>
                <li>for loops</li>
                <li>arrays</li>
                <li>functions</li>
                <li>switch</li>
                <li>classes</li>
                <li>vector</li>
                <li>advanced libraries</li>
              </ul>

            </div>

          </div>

        </section>


        {/* Final Challenge */}
        <section className="cpf-final">

          <div className="cpf-final-icon">
            🎯
          </div>

          <span>
            THE CHALLENGE
          </span>

          <h2>
            Try to solve it yourself.
          </h2>

          <p>
            Don't focus on typing the code first.
            Focus on understanding how the word, index,
            occurrence counter, and two loops work together.
          </p>

          <Link to="/learn/cpp" className="cpf-back-button cpf-bottom-button">
            ← Back to C++ Problems
          </Link>

        </section>

      </main>

    </div>
  );
};

export default CharacterPositionFinder;