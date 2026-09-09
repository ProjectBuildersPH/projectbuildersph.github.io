import React, { useState, useEffect} from "react";
import "./bank.css";
import { useNavigate } from "react-router-dom";


const lessons = [
  {
    id: 1,
    title: "What Are We Building?",
    description:
      "In this lesson, we will build a Java Bank Account Management System using Object-Oriented Programming concepts such as abstraction, inheritance, ArrayList, validation, searching, deposits, withdrawals, and account summaries.",
    video: "https://www.youtube.com/embed/GWFYIrxbQpA",
    code: `// Bank Account Management System

// We will build this project using:
// - Abstract classes
// - Inheritance
// - ArrayList
// - Input validation
// - Account searching
// - Deposit and withdrawal
// - Summary`,
  },

  {
    id: 2,
    title: "Abstract BankAccount",
    description:
      "Create an abstract BankAccount class that contains the common properties and methods shared by bank accounts.",
    video: "https://www.youtube.com/embed/bO6MoXKNN6k",
    code: `abstract class BankAccount {

    protected String accountNumber;
    protected String accountName;
    protected int balance;

    public BankAccount(
        String accountNumber,
        String accountName,
        int balance
    ) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.balance = balance;
    }

    public abstract void deposit(int amount);

    public abstract void withdraw(int amount);
}`,
  },

  {
    id: 3,
    title: "Inheritance: SavingsAccount extends BankAccount",
    description:
      "Use inheritance to create a SavingsAccount class that extends the abstract BankAccount class.",
    video: "https://www.youtube.com/embed/VIDEO_ID_03",
    locked: true,
    code: `class SavingsAccount extends BankAccount {

    public SavingsAccount(
        String accountNumber,
        String accountName,
        int balance
    ) {
        super(
            accountNumber,
            accountName,
            balance
        );
    }

    @Override
    public void deposit(int amount) {
        balance += amount;
    }

    @Override
    public void withdraw(int amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }
}`,
  },

  {
    id: 4,
    title: "Main Class ArrayList",
    description:
      "Create the main class and use an ArrayList to store multiple bank accounts.",
    video: "https://www.youtube.com/embed/VIDEO_ID_04",
    locked: true,
    code: `import java.util.ArrayList;

public class Main {

    static ArrayList<BankAccount> accounts =
        new ArrayList<>();

}`,
  },

  {
    id: 5,
    title: "Input Validation of Text",
    description:
      "Validate text input so that account names and other text fields are not empty.",
    video: "https://www.youtube.com/embed/VIDEO_ID_05",
    locked: true,
    code: `static String validateText(String message) {

    while (true) {

        System.out.print(message);

        String input = scanner.nextLine().trim();

        if (!input.isEmpty()) {
            return input;
        }

        System.out.println(
            "Input cannot be empty."
        );
    }
}`,
  },

  {
    id: 6,
    title: "int Parse Amount",
    description:
      "Convert text input into an integer amount while making sure the user enters a valid number.",
    video: "https://www.youtube.com/embed/VIDEO_ID_06",
    locked: true,
    code: `static int parseAmount(String message) {

    while (true) {

        try {

            System.out.print(message);

            int amount =
                Integer.parseInt(
                    scanner.nextLine()
                );

            if (amount >= 0) {
                return amount;
            }

            System.out.println(
                "Amount cannot be negative."
            );

        } catch (NumberFormatException e) {

            System.out.println(
                "Please enter a valid number."
            );
        }
    }
}`,
  },

  {
    id: 7,
    title: "int Parse Choice",
    description:
      "Convert the user's menu choice into an integer and validate the selected option.",
    video: "https://www.youtube.com/embed/VIDEO_ID_07",
    locked: true,
    code: `static int parseChoice() {

    while (true) {

        try {

            System.out.print(
                "Enter your choice: "
            );

            int choice =
                Integer.parseInt(
                    scanner.nextLine()
                );

            if (choice >= 1 && choice <= 6) {
                return choice;
            }

            System.out.println(
                "Invalid choice."
            );

        } catch (NumberFormatException e) {

            System.out.println(
                "Please enter a number."
            );
        }
    }
}`,
  },

  {
    id: 8,
    title: "Find an Account",
    description:
      "Create a method that searches the ArrayList and finds an account using its account number.",
    video: "https://www.youtube.com/embed/VIDEO_ID_08",
    locked: true,
    code: `static BankAccount findAccount(
    String accountNumber
) {

    for (BankAccount account : accounts) {

        if (
            account.accountNumber.equals(
                accountNumber
            )
        ) {
            return account;
        }
    }

    return null;
}`,
  },

  {
    id: 9,
    title: "Validation to Accounts",
    description:
      "Before creating or modifying accounts, validate account information and make sure duplicate account numbers are not allowed.",
    video: "https://www.youtube.com/embed/VIDEO_ID_09",
    locked: true,
    code: `static boolean accountExists(
    String accountNumber
) {

    return findAccount(accountNumber) != null;
}

static String validateAccountNumber() {

    while (true) {

        String accountNumber =
            validateText(
                "Enter account number: "
            );

        if (!accountExists(accountNumber)) {
            return accountNumber;
        }

        System.out.println(
            "Account already exists."
        );
    }
}`,
  },

  {
    id: 10,
    title: "Account Creation",
    description:
      "Create a new SavingsAccount using validated account information and add it to the ArrayList.",
    video: "https://www.youtube.com/embed/VIDEO_ID_10",
    locked: true,
    code: `static void createAccount() {

    String accountNumber =
        validateAccountNumber();

    String accountName =
        validateText(
            "Enter account name: "
        );

    int initialBalance =
        parseAmount(
            "Enter initial balance: "
        );

    BankAccount account =
        new SavingsAccount(
            accountNumber,
            accountName,
            initialBalance
        );

    accounts.add(account);

    System.out.println(
        "Account created successfully."
    );
}`,
  },

  {
    id: 11,
    title: "Search Account",
    description:
      "Allow the user to search for an account and display its account information.",
    video: "https://www.youtube.com/embed/VIDEO_ID_11",
    locked: true,
    code: `static void searchAccount() {

    String accountNumber =
        validateText(
            "Enter account number: "
        );

    BankAccount account =
        findAccount(accountNumber);

    if (account != null) {

        System.out.println(
            "Account Number: "
            + account.accountNumber
        );

        System.out.println(
            "Account Name: "
            + account.accountName
        );

        System.out.println(
            "Balance: ₱"
            + account.balance
        );

    } else {

        System.out.println(
            "Account not found."
        );
    }
}`,
  },

  {
    id: 12,
    title: "Withdraw and Deposit",
    description:
      "Implement deposit and withdrawal operations while validating the requested amount and account balance.",
    video: "https://www.youtube.com/embed/VIDEO_ID_12",
    locked: true,
    code: `static void deposit() {

    String accountNumber =
        validateText(
            "Enter account number: "
        );

    BankAccount account =
        findAccount(accountNumber);

    if (account == null) {

        System.out.println(
            "Account not found."
        );

        return;
    }

    int amount =
        parseAmount(
            "Enter deposit amount: "
        );

    account.deposit(amount);

    System.out.println(
        "Deposit successful."
    );
}


static void withdraw() {

    String accountNumber =
        validateText(
            "Enter account number: "
        );

    BankAccount account =
        findAccount(accountNumber);

    if (account == null) {

        System.out.println(
            "Account not found."
        );

        return;
    }

    int amount =
        parseAmount(
            "Enter withdrawal amount: "
        );

    account.withdraw(amount);

    System.out.println(
        "Withdrawal completed."
    );
}`,
  },

  {
    id: 13,
    title: "Summary",
    description:
      "Display a summary of all accounts stored in the ArrayList, including account number, account name, and balance.",
    video: "https://www.youtube.com/embed/VIDEO_ID_13",
    locked: true,
    code: `static void showSummary() {

    System.out.println(
        "\\n===== ACCOUNT SUMMARY ====="
    );

    if (accounts.isEmpty()) {

        System.out.println(
            "No accounts available."
        );

        return;
    }

    for (BankAccount account : accounts) {

        System.out.println(
            "Account Number: "
            + account.accountNumber
        );

        System.out.println(
            "Account Name: "
            + account.accountName
        );

        System.out.println(
            "Balance: ₱"
            + account.balance
        );

        System.out.println(
            "----------------------------"
        );
    }
}`,
  },

  {
    id: 14,
    title: "Main Method",
    description:
      "Put everything together inside the main method and create the complete Bank Account Management System.",
    video: "https://www.youtube.com/embed/VIDEO_ID_14",
    locked: true,
    code: `public static void main(String[] args) {

    while (true) {

        System.out.println(
            "\\n===== BANK ACCOUNT SYSTEM ====="
        );

        System.out.println("1. Create Account");
        System.out.println("2. Search Account");
        System.out.println("3. Deposit");
        System.out.println("4. Withdraw");
        System.out.println("5. Summary");
        System.out.println("6. Exit");

        int choice = parseChoice();

        switch (choice) {

            case 1:
                createAccount();
                break;

            case 2:
                searchAccount();
                break;

            case 3:
                deposit();
                break;

            case 4:
                withdraw();
                break;

            case 5:
                showSummary();
                break;

            case 6:
                System.out.println(
                    "Thank you for using the system."
                );
                return;
        }
    }
}`,
  },
];

function Bank() {

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
              OOP Bank System ( Console )
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
                  ₱120
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
              <strong>₱120</strong>
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

export default Bank;