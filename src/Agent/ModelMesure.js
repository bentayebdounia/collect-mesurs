import Modal from 'react-bootstrap/Modal'
import React, {useState} from 'react';
const AjouterMesure = (props) => {

    const [type, setType] = useState("");
    const [mesure, setMesure] = useState("");
    const [nbrRepetition, setNbr_repetition] = useState();
    const [verifier, setVerifier] = useState();
    const [mesures] = useState([])

    const verificetionChamp = () => {
        if (
         type !== "" &&
         mesure !== "" &&
         nbrRepetition !== "" 
          
        ) {
          if (save()) props.handleClose()
          return true;
        } else {
          setVerifier(false);
          return false;
        }
      };

      const save = () => {
        var mesur = {
            type : type,
            mesure : mesure,
            nbrRepetition : nbrRepetition
        }
        mesures.push(mesur)
        sessionStorage.setItem("mesures", JSON.stringify(mesures));

        return true
      }
      
      const enregister = (e) => {
        e.preventDefault();
        verificetionChamp()

        

        
      }
    
    return ( 
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Ajouter mesure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
         

        <div className="mb-3 row">
          <label htmlFor="type" className="col-sm-3 col-form-label ">
            Type <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            {verifier === false  && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le type
              </p>
            )}
            
          </div>
          
        </div>
        <div className="mb-3 row">
          <label htmlFor="nbr" className="col-sm-3 col-form-label ">
            Mesure <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="type"
              value={nbrRepetition}
              onChange={(e) => setNbr_repetition(e.target.value)}
            />
            {verifier === false  && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le mesure
              </p>
            )}
            
          </div>
          
          
        </div>

        <div className="mb-3 row">
          <label htmlFor="nbr" className="col-sm-3 col-form-label ">
            Nombre de repetition <span style={{ color: "red" }}>*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="nbr"
              value={mesure}
              onChange={(e) => setMesure(e.target.value)}
            />
            {verifier === false  && (
              <p style={{ color: "red", fontSize: "11px" }}>
                {" "}
                *Veillez saisir le nombre de repetition
              </p>
            )}
            
          </div>
          
          
        </div>

        <div className="d-grid gap-2 my-4">
          <button
            className="btn1"
            type="submit"
            id="ajouterbtn"
            onClick={(e) => enregister(e)}
          >
            AJOUTER
          </button>
        </div>
                   
            </Modal.Body>
         
      </Modal>
     );
}
 
export default AjouterMesure;