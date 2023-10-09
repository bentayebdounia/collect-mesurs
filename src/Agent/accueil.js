import React, {useState} from "react"
import {Link} from 'react-router-dom'
import AjouterMesure from "./ModelMesure";
function AccueilAgent() {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ajouter = (e) => {
        
        handleShow()
    }

    const data = [
        {
            
            "localisation" : "15 , 16 -Oran",
            "type_mesure" : "",
            "nombre_repetion" : "3"
        },
        {
            "localisation" : "14 , 18 -Oran",
            "type_mesure" : "",
            "nombre_repetion" : "3"
        },
        {
            "localisation" : "10 , 15 -Oran",
            "type_mesure" : "",
            "nombre_repetion" : "3"
        },
        {
            "localisation" : "7 , 16 -Oran",
            "type_mesure" : "",
            "nombre_repetion" : "3"
        }
    ]

    return ( 
        <div>
            <nav className="navbar fixed-top flex-md-nowrap p-0 shadow" style={{backgroundColor: "#e3f2fd" }} >
                <div className="container-fluid" id='divContainer'>
                
                    <Link className="nav-link active p-3 position-absolute end-0 "  to='/'    >
                        <i className="bi bi-door-open-fill me-2" ></i>
                        Deconnecter
                    </Link>
              
                </div>
            </nav>
            

        <main role="main" className="col-md-10 ml-sm-auto col-lg-10">
                <div className="containerMain" style={{width:"80%", marginLeft:"10%"}}>
                <h1 id="titre">Votre designations de jour: </h1>

                <div className="divTab" style={{ width: "100%", margin: "0px" }}>
                    <table className="table table-bordered" >
                    <thead > 
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Localisation</th>
                        <th scope="col">Action </th>
                    
                    </tr>  
                    </thead>
                    <tbody>
                    { data.map((p, key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{p.localisation}</td>
                            
                            <td>
                            <input
                                onClick={(e) => ajouter(e)}
                                type="button"
                                className="btn"
                                style={{ background: "#478E8B", color: "white" , textAlign:"center"}}
                                value="AJOUTER"
                            ></input>
                            </td>
                        </tr>
            ))}
                        
                    </tbody>
                    </table>

                    
                </div>
                </div>
        </main>
        {show && (
        <AjouterMesure
          show={show}
          handleClose={handleClose}
          
          
        />
      )}
           
        </div>
     );
}

export default AccueilAgent;