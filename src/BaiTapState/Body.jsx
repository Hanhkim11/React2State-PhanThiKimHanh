import React from "react";

const Body = () => {
  return (
    <div className="bodyIMG d-flex justify-content-around">
      <div className="card" style={{ width: "18rem", height: "10rem" }}>
        <img src="./public/img/model.jpg" className="card-img-top" alt="..." />
        <div className="card-body bg">
          <h3 className="title-text">FENDI F8750</h3>
          <p className="card-text text-light">
            Light pink square lensce define these sunglasses, ending with
            another a pear efect tips
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem", height: "10rem" }}>
        <img src="./public/img/model.jpg" className="card-img-top" alt="..." />
        <div className="card-body bg">
          <h3 className="title-text">FENDI F8750</h3>
          <p className="card-text text-light">
            Light pink square lensce define these sunglasses, ending with
            another a pear efect tips
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
