import React from "react";

const BTState = () => {
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

          <div className="">
            <img src="./public/img/model.jpg" alt="" />
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
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" class="btn btn-outline-success">
              Success
            </button>
            <button type="button" class="btn btn-outline-danger">
              Danger
            </button>
            <button type="button" class="btn btn-outline-warning">
              Warning
            </button>
            <button type="button" class="btn btn-outline-info">
              Info
            </button>
            <button type="button" class="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" class="btn btn-outline-dark">
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTState;
