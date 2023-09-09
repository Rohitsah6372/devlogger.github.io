import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.burgerking.in/static/media/home-bk-wall.96e21fb4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
