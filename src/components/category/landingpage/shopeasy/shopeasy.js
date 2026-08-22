import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shopeasy.css";

import homeImage from "../shopeasy/home.png";
import categoriesImage from "../shopeasy/categories.png";
import productsImage from "../shopeasy/products.png";
import flashSaleImage from "../shopeasy/flashsale.png";

function ShopEasy() {

  const [selectedImage, setSelectedImage] = useState(null);

   const navigate = useNavigate();

  const screenshots = [
    {
      image: homeImage,
      title: "ShopEasy Homepage",
      description:
        "The ShopEasy homepage introduces users to the online store with a modern hero section, navigation, search bar, shopping cart, and promotional content."
    },
    {
      image: categoriesImage,
      title: "Product Categories",
      description:
        "The category section allows customers to browse different product groups such as electronics, fashion, shoes, furniture, gaming, and watches."
    },
    {
      image: productsImage,
      title: "Featured Products",
      description:
        "Featured products are displayed in clean product cards with product images, names, prices, and Add to Cart buttons."
    },
    {
      image: flashSaleImage,
      title: "Flash Sale",
      description:
        "The Flash Sale section creates urgency using a promotional banner and a countdown timer for the limited-time offer."
    }
  ];

  return (
    <section className="shopeasy-page">

      {/* ========================================
          HERO
      ======================================== */}

      <div className="shopeasy-hero">

        <div className="shopeasy-hero-content">

          <span className="shopeasy-label">
            E-COMMERCE PROJECT
          </span>

          <h1>
            Shop<span>Easy</span>
          </h1>

          <p className="shopeasy-hero-description">
            A modern e-commerce website designed to provide customers
            with a simple, attractive, and user-friendly online shopping
            experience.
          </p>

          <div className="shopeasy-tech">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>

          </div>

          <div className="shopeasy-hero-buttons">

            <a
              href="#shopeasy-preview"
              className="shopeasy-primary-button"
            >
              View Project
            </a>

            <a
              href="https://m.me/ch/AbaC8jEalxMV_TrB/" target="_blank" rel="noopener noreferrer"
              className="shopeasy-secondary-button"
            >
              Buy Video Tutorial ₱500
            </a>

          </div>

        </div>

      </div>


      {/* ========================================
          PROJECT INTRODUCTION
      ======================================== */}

      <div className="shopeasy-container">

        <section className="shopeasy-introduction">

          <div className="shopeasy-intro-content">

            <span className="section-label">
              ABOUT THE PROJECT
            </span>

            <h2>
              Simple Shopping.
              <strong> Better Experience.</strong>
            </h2>

            <p>
              ShopEasy is a front-end e-commerce website created to
              demonstrate how HTML, CSS, and JavaScript can be combined
              to build a modern online shopping experience.
            </p>

            <p>
              The website focuses on clean visual design, intuitive
              navigation, product presentation, categories, shopping
              cart interaction, and promotional sections.
            </p>

          </div>


          <div className="shopeasy-project-info">

            <div className="info-box">

              <span>PROJECT</span>

              <strong>
                ShopEasy
              </strong>

            </div>

            <div className="info-box">

              <span>TYPE</span>

              <strong>
                E-Commerce
              </strong>

            </div>

            <div className="info-box">

              <span>TECHNOLOGY</span>

              <strong>
                HTML / CSS / JS
              </strong>

            </div>

            <div className="info-box">

              <span>DESIGN</span>

              <strong>
                Responsive
              </strong>

            </div>

          </div>

        </section>


        {/* ========================================
            FEATURES
        ======================================== */}

        <section
          className="shopeasy-features"
          id="shopeasy-features"
        >

          <div className="section-heading">

            <span className="section-label">
              FEATURES
            </span>

            <h2>
              Built for a Better
              <strong> Shopping Experience</strong>
            </h2>

            <p>
              ShopEasy includes the essential elements needed for
              a modern e-commerce interface.
            </p>

          </div>


          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-number">
                01
              </div>

              <h3>
                Modern Navigation
              </h3>

              <p>
                Clean navigation with product search, categories,
                contact links, login access, and shopping cart.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                02
              </div>

              <h3>
                Product Categories
              </h3>

              <p>
                Products can be organized into different categories
                to make browsing easier for customers.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                03
              </div>

              <h3>
                Featured Products
              </h3>

              <p>
                Product cards display images, names, prices, and
                Add to Cart actions in an organized layout.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                04
              </div>

              <h3>
                Shopping Cart
              </h3>

              <p>
                The interface includes a shopping cart indicator
                designed for managing selected products.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                05
              </div>

              <h3>
                Flash Sale
              </h3>

              <p>
                Promotional content and countdown timers can be
                used to highlight limited-time offers.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                06
              </div>

              <h3>
                Responsive Design
              </h3>

              <p>
                The layout is designed to adapt to different screen
                sizes including desktop, tablet, and mobile devices.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            SCREENSHOTS
        ======================================== */}

        <section
          className="shopeasy-preview"
          id="shopeasy-preview"
        >

          <div className="section-heading">

            <span className="section-label">
              PROJECT PREVIEW
            </span>

            <h2>
              Explore <strong>ShopEasy</strong>
            </h2>

            <p>
              Take a look at the different sections of the
              e-commerce website.
            </p>

          </div>


          <div className="shopeasy-gallery">

            {screenshots.map((item, index) => (

              <article
                className={`screenshot-card screenshot-${index + 1}`}
                key={item.title}
              >

                <button
                  className="screenshot-image-button"
                  onClick={() => setSelectedImage(item.image)}
                  type="button"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="image-overlay">

                    <span>
                      View Image
                    </span>

                  </div>

                </button>


                <div className="screenshot-content">

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ========================================
            TECHNOLOGIES
        ======================================== */}

        <section className="shopeasy-technologies">

          <div className="section-heading">

            <span className="section-label">
              TECHNOLOGIES
            </span>

            <h2>
              Built Using
              <strong> Web Technologies</strong>
            </h2>

          </div>


          <div className="technology-grid">

            <div className="technology-card">

              <div className="technology-icon">
                HTML
              </div>

              <h3>
                HTML
              </h3>

              <p>
                Used to structure the website content,
                navigation, products, categories, and sections.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                CSS
              </div>

              <h3>
                CSS
              </h3>

              <p>
                Used to create the visual design, layouts,
                colors, responsive behavior, and animations.
              </p>

            </div>


            <div className="technology-card">

              <div className="technology-icon">
                JS
              </div>

              <h3>
                JavaScript
              </h3>

              <p>
                Used to add interaction such as product actions,
                cart behavior, navigation, and countdown features.
              </p>

            </div>

          </div>

        </section>


        {/* ========================================
            PROJECT SUMMARY
        ======================================== */}

        <section className="shopeasy-summary">

          <div className="summary-content">

            <span className="section-label">
              PROJECT SUMMARY
            </span>

            <h2>
              More Than Just
              <strong> an Online Store</strong>
            </h2>

            <p>
              ShopEasy was created to demonstrate how fundamental
              web development technologies can be combined to
              create a complete and visually engaging e-commerce
              interface.
            </p>

            <p>
              From the navigation bar and product categories to
              featured products and promotional sections, every
              part of the interface is designed to provide a
              smooth and approachable shopping experience.
            </p>

            <button
              type="button"
              className="back-projects-button"
              onClick={() => navigate("/ecommerce")}
              >
              ← Back to Projects
              </button>

          </div>

        </section>

      </div>


      {/* ========================================
          IMAGE MODAL
      ======================================== */}

      {selectedImage && (

        <div
          className="shopeasy-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="shopeasy-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="shopeasy-modal-close"
              onClick={() => setSelectedImage(null)}
              type="button"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="ShopEasy project preview"
            />

          </div>

        </div>

      )}

    </section>
  );
}

export default ShopEasy;