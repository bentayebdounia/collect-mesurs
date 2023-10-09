import "./authentification.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Autentification() {
  const [user, setUser] = useState("");
  const [password, SetPassword] = useState("");
  const [role, setRole] = useState("");
  const [verifier, setVerifier] = useState();
  const history = useHistory();
  //verifier les champs**********************************************************************
  const verificetionChamp = () => {
    if (user !== "" && password !== "" && role !== "") {
      return true;
    } else {
      setVerifier(false);
      return false;
    }
  };

  const login = () => {
    if (verificetionChamp()) {
      if (role === "1") {
        history.push({ pathname: "/accueil" });
      } else if (role === "2") {
        history.push({ pathname: "/accueilAgent" });
      }
    }
  };

  return (
    <div className="authentification">
      <div>
        <p id="title"> COLLECTE DE MESURES </p>
      </div>

      <div className="rectangle">
        <form className="needs-validation" name="form" noValidate>
          <p id="log"> LogIn </p>
          <div className="form-floating mb-4" id="formFloatingLog">
            <input
              type="email"
              className="form-control "
              name="id"
              placeholder="Utilisateur"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <label forhtmlfor="floatingInput">Utilisateur</label>
            {verifier === false && user === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir l'utilisateur{" "}
              </p>
            )}
          </div>
          <div className="form-floating mb-5" id="formFloatingLog">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              required
            />
            <label forhtmlfor="floatingPassword">mot de passe</label>
            {verifier === false && password === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le mot de passe{" "}
              </p>
            )}
          </div>
          <div className="form-floating mb-5" id="formFloatingLog">
            <div className="form-check form-check-inline  me-5">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="1"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" forhtmlfor="inlineRadio1">
                Administrateur
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="2"
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="form-check-label" forhtmlfor="inlineRadio2">
                Agent
              </label>
            </div>
            {verifier === false && role === "" && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez selectionner un role{" "}
              </p>
            )}
          </div>
        </form>
        <div
          className="d-grid gap-2"
          style={{ marginLeft: "100px", marginRight: " 100px" }}
        >
          <button className="btnlog" type="submit" onClick={(e) => login(e)}>
            {" "}
            CONNECTER{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Autentification;
