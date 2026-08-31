
import React, { useEffect, useState } from "react";
import "./Playlist.css";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ========================================
  // YOUTUBE API
  // ========================================

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCp15_QDc-qpTLHPJIODdycQ";

  useEffect(() => {
    async function loadPlaylists() {
      try {
        setLoading(true);
        setError("");

        const url =
          `https://www.googleapis.com/youtube/v3/playlists` +
          `?part=snippet,contentDetails` +
          `&channelId=${CHANNEL_ID}` +
          `&maxResults=50` +
          `&key=${API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();

          console.error("YouTube API Error:", errorData);

          throw new Error(
            errorData.error?.message ||
              "Failed to fetch YouTube playlists"
          );
        }

        const data = await response.json();

        const formattedPlaylists = data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
          category: "YOUTUBE",
          description:
            item.snippet.description ||
            "Programming playlist",
          videos: item.contentDetails.itemCount,
          image:
            item.snippet.thumbnails.high?.url ||
            item.snippet.thumbnails.medium?.url ||
            item.snippet.thumbnails.default?.url,
          url: `https://www.youtube.com/playlist?list=${item.id}`,
        }));

        setPlaylists(formattedPlaylists);
      } catch (err) {
        console.error("Failed to load playlists:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPlaylists();
  }, [API_KEY]);

  // ========================================
  // RENDER
  // ========================================

  return (
    <section className="playlist-section" id="learn">
      <div className="playlist-wrapper">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="playlist-header">

          <div>
            <span className="playlist-label">
              PROJECTBUILDERSPH • LEARN
            </span>

            <h2>
              YouTube <span>Playlists</span>
            </h2>

            <p>
              Programming tutorials, project walkthroughs
              and coding series.
            </p>
          </div>

          {/* ========================================
              YOUTUBE ACTION BUTTONS
          ======================================== */}

          <div className="playlist-actions">

            {/* Visit Channel */}

            <a
              href="https://www.youtube.com/@NextGenCoder2026/playlists"
              target="_blank"
              rel="noreferrer"
              className="playlist-channel"
            >
              ▶ Visit Channel
            </a>

            {/* Subscribe */}

            <a
              href="https://www.youtube.com/@NextGenCoder2026?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="playlist-subscribe"
            >
              <span className="subscribe-icon">
                ▶
              </span>

              Subscribe
            </a>

          </div>
        </div>

        {/* ========================================
            PLAYLIST LIST
        ======================================== */}

        <div className="playlist-list">

          {/* Loading */}

          {loading && (
            <p className="playlist-status">
              Loading playlists...
            </p>
          )}

          {/* Error */}

          {!loading && error && (
            <p className="playlist-status playlist-error">
              Error: {error}
            </p>
          )}

          {/* Empty */}

          {!loading &&
            !error &&
            playlists.length === 0 && (
              <p className="playlist-status">
                No playlists found.
              </p>
            )}

          {/* Playlists */}

          {!loading &&
            !error &&
            playlists.map((playlist, index) => (

              <a
                key={playlist.id}
                href={playlist.url}
                target="_blank"
                rel="noreferrer"
                className="playlist-row"
              >

                {/* Number */}

                <div className="playlist-number">
                  {index + 1}
                </div>

                {/* Thumbnail */}

                <div className="playlist-thumb">

                  <img
                    src={playlist.image}
                    alt={playlist.title}
                  />

                  <div className="playlist-play">
                    ▶
                  </div>

                </div>

                {/* Information */}

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

                {/* Statistics */}

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

