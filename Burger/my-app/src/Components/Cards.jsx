import React from "react";

export default function Cards() {
  return (
    <div className="mainContainer">
      <div className="heading">
        <h2>
          <b>BEST SELLERS</b>
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        <div className="col">
          <div className="card">
            <img
              src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220314064416545518_262x360jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">VEG WHOPPER</h5>
              <span className="price">
                <h5>$209</h5>
              </span>
              <p className="card-text">
                Delight in the Veg Whopper Burger, where the finest ingredients
                harmoniously unite to create a symphony of flavors.
              </p>
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220221051205879754_262x360jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">FIERY CHICKEN BURGER</h5>
              <span className="price">
                <h5>$249</h5>
              </span>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220221051052537477_262x360jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">HOT 'N' CHEEZY BURGER</h5>
              <span className="price">
                <h5>$299</h5>
              </span>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220221051131524344_262x360jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">PANEER ROYALE BURGER</h5>
              <span className="price">
                <h5>$279</h5>
              </span>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
