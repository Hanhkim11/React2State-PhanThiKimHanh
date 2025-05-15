import React, { useState } from "react";
import dataGlasses from "../../dataGlasses.json";

const BTState = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(dataGlasses[0]);

  const handleChangeGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="backgroundIMG">
      <img
        className="card-img-top"
        src="./public/glassesImage/background.jpg"
        alt="background"
      />
      <div className="pageContent">
        {/* Header */}
        <div
          className="container-fluid  d-flex justify-content-center align-items-center"
          style={{ height: "80px" }}
        >
          <span className="navbar-brand mb-0 text-light fs-2">
            TRY GLASSES APP ONLINE
          </span>
        </div>

        {/* Model & Info */}
        <div>
          <div
            className="glassesModel mt-5 d-flex  "
            style={{ width: "340px", height: "400px" }}
          >
            <img src="./public/glassesImage/model.jpg" alt="Model" />

            <img
              className="glassesPicture"
              src={selectedGlasses.url}
              alt="Selected glasses"
            />
            <div className="bg px-2 py-1 ">
              <h3 className="title-text ">{selectedGlasses.name}</h3>
              <p className="text-light">{selectedGlasses.desc}</p>
            </div>
          </div>

          {/* List kính */}
          <div
            className="bg-secondary-subtle mt-5 mx-auto"
            style={{ width: "800px", height: "160px" }}
          >
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 py-3">
              {dataGlasses.map((glasses) => (
                <button
                  key={glasses.id}
                  className="btn btn-outline-secondary"
                  onClick={() => handleChangeGlasses(glasses)}
                >
                  <img
                    src={glasses.url}
                    alt={glasses.name}
                    style={{ width: "120px", height: "45px" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTState;
