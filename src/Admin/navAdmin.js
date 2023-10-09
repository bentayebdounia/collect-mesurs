import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import AjouterAgent from "./ajouterAgent"
import AjouterDesignation from "./ajouterDisignation"
import './navbar.css'
import CosulterResultat from './consulterResultat'


const Navbar = () => {
  
    const [controleAgent, setControleAgent] = useState(false)
    const [controleDesignation, setControleDesignation] = useState(false)
    const [controleConsult, setControlconsult] = useState(false)
    const agent=() => {
        setControleAgent(true)
        setControleDesignation(false)
        setControlconsult(false)
    }
    const designation=() => {
        setControleDesignation(true)
        setControleAgent(false) 
        setControlconsult(false)
    }

    const consultation =() => {
        setControlconsult(true)
        setControleDesignation(false)
        setControleAgent(false) 
    }
    

 /**************le menu  ********* */
    return (
        <div>
          <nav className="navbar fixed-top flex-md-nowrap p-0 shadow" style={{backgroundColor: "#e3f2fd" }} >
                <div className="container-fluid" id='divContainer'>
                
                    <Link className="nav-link active  "  to='#' onClick={agent} >
                        <i className="bi bi-door-open-fill me-2" ></i>
                        Ajouter agent
                    </Link>

                    <Link className="nav-link active "  to='#' onClick={designation} >
                        <i className="bi bi-door-open-fill me-2" ></i>
                        Ajouter disignation
                    </Link>

                    <Link className="nav-link active "  to='#'  onClick={consultation}>
                        <i className="bi bi-door-open-fill me-2" ></i>
                        Consulter les resultats
                    </Link>
                    <Link className="nav-link active "  to='/'  >
                        <i className="bi bi-door-open-fill me-2" ></i>
                       Deconnecter
                    </Link>

              
                </div>
        </nav>
        <main role="main" className="col-md-10 ml-sm-auto col-lg-10">
                <div className="containerMain" style={{width:"80%", marginLeft:"10%"}}>
                    {controleAgent && <AjouterAgent/>}  
                </div>
                <div className="containerMain" style={{width:"80%", marginLeft:"10%"}}>
                    {controleDesignation && <AjouterDesignation/>}  
                </div>
                <div className="containerMain" style={{width:"80%", marginLeft:"10%"}}>
                    {controleConsult && <CosulterResultat/>}  
                </div>
            </main>
        
        </div>
    
    )
}

export default Navbar 