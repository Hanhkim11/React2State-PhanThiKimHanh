import React, { useState } from "react";

const BTState = () => {
  const [glassesList, setGlassesList] = useState("./public/img/g1.jpg");
  const handleChangeGlasses = (glasses) => {
    let img = `./public/img/${glasses}.jpg`;
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

              <div className="glassesList">
                <img
                  className="glassesPicture"
                  src={glassesList}
                  alt="Glasses picture"
                />
              </div>
            </div>
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

          <div
            className="bg-primary-subtle d-flex justify-content-center align-items-center"
            style={{ width: "800px", height: "100px" }}
          >
            <div>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  handleChangeGlasses("g2");
                }}
              >
                Primary
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handleChangeGlasses("g3");
                }}
              >
                Secondary
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  handleChangeGlasses("g4");
                }}
              >
                Success
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  handleChangeGlasses("g5");
                }}
              >
                Danger
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  handleChangeGlasses("g6");
                }}
              >
                Warning
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  handleChangeGlasses("g7");
                }}
              >
                Info
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  handleChangeGlasses("g8");
                }}
              >
                Primary
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  handleChangeGlasses("g9");
                }}
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTState;
