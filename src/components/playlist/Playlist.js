import React from "react";
import "./Playlist.css";

import py from "../../assets/py.png";
import java from "../../assets/java.png";
import cpp from "../../assets/cpp.png";
import webhtmlcssjs from "../../assets/webhtmlcssjs.png";
import studentmanagementai from "../../assets/studentmanagementai.png";
import studentgradingsystem from "../../assets/studentgradingsystem.png";
import Reservation from "../../assets/Reservation.png";
import pythonoop from "../../assets/pythonoop.png";
import pystudentmanagement from "../../assets/pystudentmanagement.png";
import airealstate from "../../assets/airealstate.png";
import reactjsaichatbot from "../../assets/reactjsaichatbot.png";


const playlists = [
  {
    title: "Java Student Grade System",
    category: "JAVA",
    description:
      "Learn Java by building a practical Student Grade System.",
    videos: 6,
    image: studentgradingsystem,
    url: "https://www.youtube.com/watch?v=RYbXirT4oLE&list=PLV1m0ZbPjuLE",
  },

  {
    title: "Java: Reservation System",
    category: "JAVA",
    description:
      "Build a reservation system while learning Java fundamentals.",
    videos: 4,
    image: Reservation,
    url: "https://www.youtube.com/watch?v=TzwaTrw2K9w&list=PLRVVhnfu3VIg",
  },

  {
    title: "PYTHON OOP",
    category: "PYTHON",
    description:
      "Understand object-oriented programming using Python.",
    videos: 2,
    image: pythonoop,
    url: "https://www.youtube.com/watch?v=Sd8cIriuWsY&list=PLZfx3cBGA4-U",
  },

  {
    title: "Python Student Management System",
    category: "PYTHON",
    description:
      "Create a complete student management system with Python.",
    videos: 7,
    image: pystudentmanagement,
    url: "https://www.youtube.com/watch?v=yILHDlBvUB0&list=PLYpAuKoC-0Oo",
  },

  {
    title: "AI-RealEstate-CRM",
    category: "AI",
    description:
      "Explore AI combined with a real-world CRM project.",
    videos: 6,
    image: airealstate,
    url: "https://www.youtube.com/watch?v=xz0nQceTEG0&list=PLeylPaPZlVCI",
  },
    {
    title: "Java Graphics: AI-POWERED Student Management",
    category: "REACT",
    description:
      "Build an AI Student Management using Java.",
    videos: 10,
    image: studentmanagementai,
    url: "https://www.youtube.com/watch?v=s83Pki8jgzM&list=PLCFqHn27X684",
  },

  {
    title: "ReactJS AI Chatbot Project",
    category: "REACT",
    description:
      "Build an AI chatbot using ReactJS.",
    videos: 10,
    image: reactjsaichatbot,
    url: "https://www.youtube.com/watch?v=bfHCosbdrPM&list=PLevAfyyBTq4w",
  },

  {
    title: "Web Development using HTML, CSS, JS",
    category: "WEB DEVELOPMENT",
    description:
      "Learn modern web development from the fundamentals.",
    videos: 16,
    image: webhtmlcssjs,
    url: "https://www.youtube.com/watch?v=kgCLuJNYj6E&list=PLTdetVnJ_LjY",
  },

  {
    title: "C++ Series",
    category: "C++",
    description:
      "Learn C++ programming from beginner to advanced concepts.",
    videos: 22,
    image: cpp,
    url: "https://www.youtube.com/watch?v=ocHu-te1qco&list=PLLQ8BstJyfqE",
  },

  {
    title: "Java Series",
    category: "JAVA",
    description:
      "A complete Java programming series.",
    videos: 16,
    image: java,
    url: "https://www.youtube.com/watch?v=7YLCRCTfZRk&list=PLGrE7LfmHGDI",
  },

  {
    title: "Python Series",
    category: "PYTHON",
    description:
      "Learn Python from beginner concepts to advanced programming.",
    videos: 9,
    image: py,
    url: "https://www.youtube.com/watch?v=_B5PP21iQHA&list=PLFfJQMbcNoNs",
  },
];

function Playlist() {
  return (
    <section className="playlist-section" id="learn">

      <div className="playlist-wrapper">

        {/* HEADER */}

        <div className="playlist-header">

          <div>

            <span className="playlist-label">
              PROJECTBUILDERSPH • LEARN
            </span>

            <h2>
              YouTube <span>Playlists</span>
            </h2>

            <p>
              Programming tutorials, project walkthroughs,
              and beginner-friendly coding series.
            </p>

          </div>

          <a
            href="https://www.youtube.com/@NextGenCoder2026/playlists"
            target="_blank"
            rel="noreferrer"
            className="playlist-channel"
          >
            ▶ &nbsp; Visit Channel
          </a>

        </div>


        {/* PLAYLIST LIST */}

        <div className="playlist-list">

          {playlists.map((playlist, index) => (

            <a
              href={playlist.url}
              target="_blank"
              rel="noreferrer"
              className="playlist-row"
              key={playlist.title}
            >

              {/* NUMBER */}

              <div className="playlist-number">
                {index + 1}
              </div>


              {/* THUMBNAIL */}

              <div className="playlist-thumb">

                <img
                  src={playlist.image}
                  alt={playlist.title}
                />

                <div className="playlist-play">
                  ▶
                </div>

              </div>


              {/* INFORMATION */}

              <div className="playlist-info">

                <div className="playlist-meta">

                  {playlist.category}

                  <span>•</span>

                  PROJECTBUILDERSPH

                </div>

                <h3>
                  {playlist.title}
                </h3>

                <p>
                  {playlist.description}
                </p>

              </div>


              {/* STATS */}

              <div className="playlist-stats">

                <div className="playlist-video-count">

                  <span className="video-icon">
                    ▶
                  </span>

                  <span>
                    {playlist.videos}
                  </span>

                </div>


                <div className="youtube-icon">
                  ▶
                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Playlist;