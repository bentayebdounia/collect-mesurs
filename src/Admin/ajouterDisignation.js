import React, { useState } from "react";
import ModelReponse from "../reponseModel/ModelRepense";

export default function AjouterAgent() {
  const [id_agent, setId_agent] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [adresse, setAdresse] = useState("");
  const [listDesignation] = useState([])
  const [verifier, setVerifier] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState("");

  //verifier les champs**********************************************************************
  const verificetionChamp = () => {
    if (
      id_agent !== "" &&
      latitude !== "" &&
      longitude !== "" 
      
    ) {
      return true;
    } else {
      setVerifier(false);
      return false;
    }
  };

  //ajouter la designation à la bdd **********************************************************
  const saveAgent = (e) => {
    e.preventDefault();

    var designation = {
      id_agent: id_agent,
      latitude: latitude,
      longitude: longitude,
      adresse: adresse
    };
    //verification des champs
    if (verificetionChamp()) {
      listDesignation.push(designation)
      sessionStorage.setItem("designation", JSON.stringify(listDesignation));
      setId_agent("");
      setLatitude("");
      setLongitude("");
      setAdresse()
      setMessage("Designation bien ajouter ");
      handleShow();
    } else {
      setMessage("designation n'est pas ajouter , verifier les champs");
      handleShow();
    }
  };

  return (
    <div>
      <h1 id="titre">Ajouter designation</h1>

      <section className="section" id="ajouterDesignation">
        <div className="mb-3 row">
          <label htmlFor="agent" className="col-sm-3 col-form-label ">
            Agent <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <select
                className="form-select"
                aria-label="Default select example"
                id="roleAgentAjout"
                value={id_agent}
                onChange={(e) => setId_agent(e.target.value)}
                >
                <option defaultValue=""></option>
                <option defaultValue="1">RAHMANI Amine</option>
                <option defaultValue="2">ZITOUNI Karim</option>
                <option defaultValue="3">SLIMANI Nacer</option>
            </select>
            {verifier === false && id_agent === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez selectionner un agent
              </p>
            )}
          </div>
        </div>

        <div className="label">
            <div className="sepTitle">LOCALISATION:</div>
        </div>
        <div className="box">
            <hr className="he"/>
        </div>
        <div className="mb-3 row">
          <label htmlFor="latitude" className="col-sm-3 col-form-label ">
            Latitude <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            {verifier === false && latitude === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir la latitude
              </p>
            )}
          </div>
        </div>


        <div className="mb-3 row">
          <label htmlFor="longitude" className="col-sm-3 col-form-label ">
            Logitude <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
            {verifier === false && longitude === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir la longitude{" "}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="adr" className="col-sm-3 col-form-label ">
            Adresse <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="adr"
              value={longitude}
              onChange={(e) => setAdresse(e.target.value)}
            />
            {verifier === false && longitude === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir l'adresse'{" "}
              </p>
            )}
          </div>
        </div>


        <div className="d-grid gap-2 my-4">
          <button
            className="btn1"
            type="submit"
            id="ajouterbtn"
            onClick={(e) => saveAgent(e)}
          >
            AJOUTER
          </button>
        </div>
      </section>
      {show && (
        <ModelReponse
          show={show}
          handleClose={handleClose}
          titre={""}
          message={message}
        />
      )}
    </div>
  );
}
