import React, { useState, useEffect} from "react";
import "./CharacterSelling.css";
import { useNavigate } from "react-router-dom";


const lessons = [
  {
    id: 1,
    title: "What Are We Building?",
    description:
      "In this lesson, we will build a Python Character Search System that finds a specific character inside a word or sentence.",
    video: "https://www.youtube.com/embed/X_PEG2WxdlQ",
    code: `# Character Search System

print("Character Search System")`,
  },

  {
    id: 2,
    title: "Getting User Input",
    description:
      "First, we need to ask the user to enter a word or sentence. Python's input() function allows us to receive information from the user.",
    video: "https://www.youtube.com/embed/0xo3BeCeDts",
    code: `sentence = input("Enter a word or sentence: ")`,
  },

  {
    id: 3,
    title: "Choosing a Character",
    description:
      "Next, we ask the user which character they want to search for.",
    video: "/videos/character-search/03-character-input.mp4",
    locked: true,
    code: `character = input("Enter a character to search: ")`,
  },

  {
    id: 4,
    title: "Creating the Counter",
    description:
      "We create a variable called count. This will keep track of how many times the searched character appears.",
    video: "/videos/character-search/04-counter.mp4",
    locked: true,
    code: `count = 0`,
  },

  {
    id: 5,
    title: "Understanding len()",
    description:
      "The len() function tells us how many characters exist inside the sentence.",
    video: "/videos/character-search/05-len.mp4",
    locked: true,
    code: `len(sentence)`,
  },

  {
    id: 6,
    title: "Using range()",
    description:
      "range() allows our loop to move through every index of the sentence.",
    video: "/videos/character-search/06-range.mp4",
    locked: true,
    code: `for i in range(len(sentence)):
    print(i)`,
  },

  {
    id: 7,
    title: "Checking Each Character",
    description:
      "Now we compare the character at the current index with the character the user wants to find.",
    video: "/videos/character-search/07-condition.mp4",
    locked: true,
    code: `if sentence[i] == character:
    print("Character found at index:", i)`,
  },

  {
    id: 8,
    title: "Counting Occurrences",
    description:
      "Whenever we find the character, we increase our counter by one.",
    video: "/videos/character-search/08-counting.mp4",
    locked: true,
    code: `count = count + 1`,
  },

  {
    id: 9,
    title: "Character Not Found",
    description:
      "If the counter is still zero after searching the entire sentence, the character was not found.",
    video: "/videos/character-search/09-not-found.mp4",
    locked: true,
    code: `if count == 0:
    print("Character not found.")`,
  },

  {
    id: 10,
    title: "Complete Character Search System",
    description:
      "Now let's put all of the concepts together and create the complete Character Search System.",
    video: "/videos/character-search/10-complete.mp4",
    locked: true,
    code: `sentence = input("Enter a word or sentence: ")

character = input("Enter a character to search: ")

count = 0

print("\\nSearch Results:")

for i in range(len(sentence)):

    if sentence[i] == character:
        print("Character found at index:", i)
        count = count + 1

if count == 0:
    print("Character not found.")

print("\\nTotal occurrences:", count)`,
  },

  {
    id: 11,
    title: "Challenge",
    description:
      "Your challenge: modify the program so that it searches for a word instead of a single character.",
    video: "/videos/character-search/11-challenge.mp4",
    locked: true,
    code: `# Challenge

sentence = input("Enter a sentence: ")
word = input("Enter a word to search: ")

# Your code here`,
  },
];

function CharacterSelling() {

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  const navigate = useNavigate();

  const handleLanguageClick = (path) => {
    navigate(path);
  };


  const [currentLesson, setCurrentLesson] = useState(lessons[0]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  // =========================
  // SELECT LESSON
  // =========================

  const selectLesson = (lesson) => {
    if (lesson.locked) {
      setShowPurchaseModal(true);
      return;
    }

    setCurrentLesson(lesson);
  };

  // =========================
  // MARK COMPLETE
  // =========================

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([
        ...completedLessons,
        currentLesson.id,
      ]);
    }
  };

  // =========================
  // NEXT LESSON
  // =========================

  const nextLesson = () => {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    );

    if (currentIndex < lessons.length - 1) {
      const nextLessonItem = lessons[currentIndex + 1];

      if (nextLessonItem.locked) {
        setShowPurchaseModal(true);
        return;
      }

      setCurrentLesson(nextLessonItem);
    }
  };

  // =========================
  // PREVIOUS LESSON
  // =========================

  const previousLesson = () => {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    );

    if (currentIndex > 0) {
      const previousLessonItem = lessons[currentIndex - 1];

      if (previousLessonItem.locked) {
        setShowPurchaseModal(true);
        return;
      }

      setCurrentLesson(previousLessonItem);
    }
  };

  // =========================
  // PROGRESS
  // =========================

  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  // =========================
  // RENDER
  // =========================

  return (
    <div className="character-course">

      {/* =========================
          TOP BAR
      ========================= */}

      <header className="course-header">

        <div className="course-brand">

          <span className="brand-logo">
            PB
          </span>

          <div>
            <h1>ProjectBuildersPH</h1>
            <span>Python Course</span>
          </div>

        </div>


      </header>


      {/* =========================
          COURSE CONTAINER
      ========================= */}

      <div className="course-container">


        {/* =========================
            SIDEBAR
        ========================= */}

        <aside className="lesson-sidebar">

          <div className="sidebar-title">

            <span>
              COURSE CONTENT
            </span>

            <strong>
              Character Search System
            </strong>

          </div>


          <div className="lesson-list">

            {lessons.map((lesson) => {

              const isActive =
                lesson.id === currentLesson.id;

              const isCompleted =
                completedLessons.includes(
                  lesson.id
                );

              return (

                <button
                  key={lesson.id}
                  className={`lesson-item ${
                    isActive ? "active" : ""
                  } ${
                    lesson.locked ? "locked" : ""
                  }`}
                  onClick={() =>
                    selectLesson(lesson)
                  }
                >

                  {/* LESSON NUMBER / LOCK */}
                  <div
                    className={`lesson-number ${
                      lesson.locked
                        ? "locked-number"
                        : ""
                    }`}
                  >

                    {lesson.locked
                      ? "🔒"
                      : isCompleted
                      ? "✓"
                      : lesson.id}

                  </div>


                  {/* LESSON INFORMATION */}
                  <div className="lesson-info">

                    <span>
                      {lesson.title}
                    </span>

                    <small>
                      {lesson.locked
                        ? "Locked • Purchase required"
                        : "Video lesson"}
                    </small>

                  </div>

                </button>

              );

            })}

          </div>

        </aside>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main className="lesson-content">


          {/* =========================
              VIDEO
          ========================= */}

          <section className="video-container">

            {currentLesson.video.includes(
              "youtube.com/embed"
            ) ? (

              <iframe
                key={currentLesson.video}
                className="lesson-video youtube-video"
                src={currentLesson.video}
                title={currentLesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            ) : (

              <video
                key={currentLesson.video}
                className="lesson-video"
                controls
                controlsList="nodownload"
              >

                <source
                  src={currentLesson.video}
                  type="video/mp4"
                />

                Your browser does not support
                video playback.

              </video>

            )}

          </section>

        </main>

      </div>


      {/* =========================
          PURCHASE MODAL
      ========================= */}

      {showPurchaseModal && (

        <div
          className="purchase-modal-overlay"
          onClick={() =>
            setShowPurchaseModal(false)
          }
        >

          <div
            className="purchase-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}
            <button
              className="modal-close"
              onClick={() =>
                setShowPurchaseModal(false)
              }
              aria-label="Close"
            >
              ×
            </button>


            {/* LOCK ICON */}
            <div className="modal-lock-icon">
              🔒
            </div>


            <span className="modal-label">
              PREMIUM CONTENT
            </span>


            <h2>
              Lesson Locked
            </h2>


            <p className="modal-description">
              Get access to the remaining
              Character Search System lessons.
            </p>


            {/* PRICING */}
            <div className="pricing-options">

              <div className="price-option">

                <span>
                  Complete Course
                </span>

                <strong>
                  ₱90
                </strong>

              </div>


              <div className="price-option">

                <span>
                  Single Video
                </span>

                <strong>
                  ₱10
                </strong>

              </div>

            </div>


            <p className="purchase-text">
              Buy the complete product for only{" "}
              <strong>₱90</strong>
              <br />
              or buy a single video for{" "}
              <strong>₱10</strong>.
            </p>


            {/* MESSENGER BUTTON */}
            <a
              href="https://www.messenger.com/t/9333023970159622"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              Contact Me
            </a>


            <button
              className="cancel-button"
              onClick={() =>
                setShowPurchaseModal(false)
              }
            >
              Maybe Later
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default CharacterSelling;
