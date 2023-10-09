import React, { useState } from "react";
import ModelReponse from "../reponseModel/ModelRepense";

export default function AjouterAgent() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_naissance, setDateN] = useState("");
  const [adresse, setAdr] = useState("");
  const [num_tel, setTel] = useState("");

  const [mot_passe, setPassword] = useState("");
  const [listAgent] = useState([])
  const [verifier, setVerifier] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState("");

  //verifier les champs**********************************************************************
  const verificetionChamp = () => {
    if (
      nom !== "" &&
      prenom !== "" &&
      date_naissance !== "" &&
      adresse !== "" &&
      num_tel !== "" &&
      num_tel.length === 10 &&
      num_tel[0] === "0" &&
      mot_passe !== ""
    ) {
      return true;
    } else {
      setVerifier(false);
      return false;
    }
  };

  //ajouter l'agent à la bdd **********************************************************
  const saveAgent = (e) => {
    e.preventDefault();

    var agent = {
      nom: nom,
      prenom: prenom,
      date_naissance: date_naissance,
      num_tel: num_tel,
      adresse: adresse,
      mot_passe: mot_passe,
    };
    //verification des champs
    if (verificetionChamp()) {
      listAgent.push(agent)
      sessionStorage.setItem("Agent", JSON.stringify(listAgent));
      setNom("");
      setPrenom("");
      setDateN("");
      setAdr("");
      setTel("");
      setPassword("");

      setMessage("Agent bien ajouter ");
      handleShow();
    } else {
      setMessage("Agent n'est pas ajouter , verifier les champs");
      handleShow();
    }
  };

  return (
    <div>
      <h1 id="titre">Ajouter un agent</h1>

      <section className="section" id="ajouterAgent">
        <div className="mb-3 row">
          <label htmlFor="nomAgent" className="col-sm-3 col-form-label ">
            Nom <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="nomAgent"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            {verifier === false && nom === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le nom{" "}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="prenomAgent" className="col-sm-3 col-form-label ">
            Prénom <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="prenomAgent"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            {verifier === false && prenom === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le prénom
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="DNagent" className="col-sm-3 col-form-label ">
            Date de naissance <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="date"
              className="form-control label"
              id="DNagent"
              value={date_naissance}
              onChange={(e) => setDateN(e.target.value)}
            />
            {verifier === false && date_naissance === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir la date de naissance
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="adresseAgent" className="col-sm-3 col-form-label ">
            Adresse <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="adresseAgent"
              value={adresse}
              onChange={(e) => setAdr(e.target.value)}
            />
            {verifier === false && adresse === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir l'adresse{" "}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="numAgent" className="col-sm-3 col-form-label ">
            N° téléphone <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="numAgent"
              value={num_tel}
              onChange={(e) => setTel(e.target.value)}
            />
            {verifier === false && (num_tel === "" || num_tel.length < 10) && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le numéro de telephone
              </p>
            )}
            {(num_tel.length > 10 || num_tel[0] !== "0") && num_tel !== "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Le numéro de téléphone est incorrect
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
            Mot de passe <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="password"
              value={mot_passe}
              onChange={(e) => setPassword(e.target.value)}
            />
            {verifier === false && mot_passe === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le mot de passe
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
