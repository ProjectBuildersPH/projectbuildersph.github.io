import React from "react";
import { useNavigate } from "react-router-dom";
import "./category.css";

const categories = [
  {
    name: "School",
    count: 1,
    icon: "🏫",
    link: "/academ",
  },
  {
    name: "Ecommerce Website",
    count: 1,
    icon: "✨",
    link: "/ecommerce",
  },
  {
    name: "Sports",
    count: "NOT AVAILABLE YET",
    icon: "🏆",
  },
  {
    name: "Games",
    count: "NOT AVAILABLE YET",
    icon: "🎮",
  },
  {
    name: "Entertainment",
    count: "NOT AVAILABLE YET",
    icon: "🎬",
  },
  {
    name: "Developer Tools",
    count: "NOT AVAILABLE YET",
    icon: "💻",
  },
  {
    name: "Lifestyle",
    count: "NOT AVAILABLE YET",
    icon: "☀️",
  },
  {
    name: "Productivity",
    count: "NOT AVAILABLE YET",
    icon: "⚡",
  },
  {
    name: "Health",
    count: "NOT AVAILABLE YET",
    icon: "❤️",
  },
  {
    name: "Education",
    count: "NOT AVAILABLE YET",
    icon: "🎓",
  },
  {
    name: "Personal",
    count: "NOT AVAILABLE YET",
    icon: "👤",
  },
  {
    name: "Business",
    count: "NOT AVAILABLE YET",
    icon: "💼",
  },
];

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category.link) {
      navigate(category.link);
    }
  };

  return (
    <section className="category-section" id="categories">

      {/* HEADER */}
      <div className="category-header">

        <div>
          <span className="category-label">
            PROJECTBUILDERSPH
          </span>

          <h2>
            Project <span>Categories</span>
          </h2>

          <p>
            Explore projects, tutorials, and ideas
            organized by technology and skill level.
          </p>
        </div>

        <button className="category-all">
          All
        </button>

      </div>


      {/* CATEGORY LIST */}
      <div className="category-grid">

        {categories.map((category, index) => (

          <button
            className={`category-card ${
              category.link ? "clickable" : ""
            }`}
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            type="button"
          >

            {/* ICON */}
            <div
              className={`category-icon category-icon-${index % 6}`}
            >
              {category.icon}
            </div>


            {/* INFORMATION */}
            <div className="category-info">

              <h3>
                {category.name}
              </h3>

              <span>
                {category.count} projects
              </span>

            </div>


            {/* ARROW */}
            <div className="category-arrow">
              →
            </div>

          </button>

        ))}

      </div>

    </section>
  );
}

export default Category;