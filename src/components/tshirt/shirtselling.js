import React from "react";
import "./shirtselling.css";
import midterm from "../../shirtdesign/midterm.png";
import survivalmode from "../../shirtdesign/survivalmode.jpg";

const shirtData = [
  {
    id: 1,
    name: "Midterm Exam",
    category: "T-Shirt",
    price: "",
    description: "A programmer shirt made for surviving C++ exams and debugging sessions.",
    image: midterm,
  },
  {
    id: 2,
    name: "Survivor Mode",
    category: "T-Shirt",
    price: "",
    description: "For Java developers who survive every error, loop, and exam.",
     image: survivalmode,
  },

];

function ShirtSelling() {
  return (
    <div className="shirt-page">

      {/* HEADER */}
      <section className="shirt-header">

        <div className="shirt-header-content">

          <span className="shirt-eyebrow">
            PROJECTBUILDERSPH STORE
          </span>

          <h1>
            Wear Your Code.
          </h1>

          <p>
            Programming-inspired shirts made for developers,
            students, and future software engineers.
          </p>

        </div>

      </section>


      {/* STORE CONTENT */}
      <main className="shirt-store">

        <div className="store-title">

          <div>
            <span>
              OUR COLLECTION
            </span>

            <h2>
              Developer Shirts
            </h2>
          </div>

          <p>
            Choose your favorite programming design.
          </p>

        </div>


        {/* SHIRT GRID */}
        <div className="shirt-grid">

          {shirtData.map((shirt) => (

            <article
              className="shirt-card"
              key={shirt.id}
            >

              {/* IMAGE */}
              <div className="shirt-image">

                <img
                  src={shirt.image}
                  alt={shirt.name}
                />

                <span className="shirt-category">
                  {shirt.category}
                </span>

              </div>


              {/* CARD CONTENT */}
              <div className="shirt-card-content">

                <div className="shirt-card-top">

                  <h3>
                    {shirt.name}
                  </h3>

                  <strong>
                    {shirt.price}
                  </strong>

                </div>


                <p className="shirt-description">
                  {shirt.description}
                </p>


                <div className="shirt-info">

                  <span>
                    👕 Premium Shirt
                  </span>

                  <span>
                    ✓ Available
                  </span>

                </div>


                <button
                  type="button"
                  className="shirt-button"
                >
                  View Design
                  <span>→</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}

export default ShirtSelling;