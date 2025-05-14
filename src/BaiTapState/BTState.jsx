import React, { useState } from "react";

const BTState = () => {
  const [glassesList, setGlassesList] = useState("./public/img/v1.png");

  const handleChangeGlasses = (glasses) => {
    let img = `./public/img/${glasses}.png`;
    setGlassesList(img);
  };
  return (
    <div>
      <div className="backgroundIMG">
        <img class="card-img-top" src="./public/img/background.jpg" alt="" />
        <div className="pageContent">
          <div
            className="container-fluid bg-dark d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <span className="navbar-brand mb-0 h1 text-light fs-2">
              TRY GLASSES APP ONLINE
            </span>
          </div>

          <div>
            <div className="glassesModel">
              <img src="./public/img/model.jpg" alt="Model" />

              <img
                className="glassesPicture"
                src={glassesList}
                alt="Glasses picture"
              />
              <div
                className="bg px-2"
                style={{ width: "480px", height: "150px" }}
              >
                <h3 className="title-text pt-3">FENDI F8750</h3>
                <p className="text-light">
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
          </div>

          <div
            className=" bg-primary-subtle mt-5 mx-auto"
            style={{
              width: "800px",
              height: "180px",
              backgroundColor: "white",
            }}
          >
            <div className="my-auto">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  handleChangeGlasses("v2");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v2.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handleChangeGlasses("v3");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v3.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-success"
                onClick={() => {
                  handleChangeGlasses("v4");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v4.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  handleChangeGlasses("v5");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v5.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  handleChangeGlasses("v6");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v6.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-info"
                onClick={() => {
                  handleChangeGlasses("v7");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v7.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  handleChangeGlasses("v8");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v8.png"
                  alt=""
                />
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handleChangeGlasses("v9");
                }}
              >
                <img
                  className=""
                  style={{ width: "120px", height: "60px" }}
                  src="./public/img/v9.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTState;
