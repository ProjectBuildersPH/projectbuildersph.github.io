import React from "react";
import "./shirtselling.css";
import midterm from "../../shirtdesign/midterm.png";
import survivalmode from "../../shirtdesign/survivalmode.jpg";
import struggle from "../../shirtdesign/struggle.png";

const shirtData = [
  {
    id: 1,
    name: "Midterm Exam",
    category: "T-Shirt",
    price: "",
    description: "For programmers facing the ultimate boss battle: the midterm exam, where every line of code counts.",
    image: midterm,
  },
  {
    id: 2,
    name: "Survivor Mode",
    category: "T-Shirt",
    price: "",
    description: "For programmers who keep coding through bugs, errors, deadlines, and endless debugging sessions.",
     image: survivalmode,
  },
  {
    id: 3,
    name: "Struggle",
    category: "T-Shirt",
    price: "",
    description: "For every programmer who has stared at one error for hours and somehow made it worse.",
     image: struggle,
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


<a
  href="https://www.messenger.com/e2ee/t/9333023970159622"
  target="_blank"
  rel="noopener noreferrer"
  className="shirt-button"
>
  Order Now
  <span>→</span>
</a>

              </div>

            </article>

          ))}

        </div>

      </main>

    </div>
  );
}

export default ShirtSelling;