import React from "react";

function CosulterResultat() {

    const data = [
        {
            "agent" : "RAHMANI Mouhamed",
            "heure" :  "15:00",
            "date" : "2023-10-08",
            "localisation" : "15 , 16 -Oran",
            "type_mesure" : "m²",
            "valeur_mesure" : "15"
        },
        {
            "agent" : "KABDANI Salim",
            "heure" :  "15:00",
            "date" : "2023-10-08",
            "localisation" : "15 , 16 -Oran",
            "type_mesure" : "m²",
            "valeur_mesure" : "15"
        },
        {
            "agent" : "ZITOUNI Mouhamed",
            "heure" :  "15:00",
            "date" : "2023-10-08",
            "localisation" : "15 , 16 -Oran",
            "type_mesure" : "m²",
            "valeur_mesure" : "15"
        },
        {
            "agent" : "MAHMOUDI AKRAM",
            "heure" :  "10:00",
            "date" : "2023-10-08",
            "localisation" : "17 , 16 -Oran",
            "type_mesure" : "m²",
            "valeur_mesure" : "15"
        }
    ]

    return ( 
        <div>
            <h1 id="titre">Consulter les resultats</h1>
            <section className="section" id="consulterResultat">
            <div className="divTab" style={{ width: "100%", margin: "0px" }}>
            <table className="table table-bordered" >
              <thead > 
              <tr>
                <th scope="col">Agent</th>
                <th scope="col">Heure</th>
                <th scope="col">Date</th>
                <th scope="col">Localisation</th>
                <th scope="col">Type de mesures </th>
                <th scope="col">valeur de mesures </th>
               
            </tr>  
              </thead>
              <tbody>
              { data.map((p, key) => (
                <tr key={key}>
                    <td>{p.agent}</td>
                    <td>{p.heure}</td>
                    <td>{p.date}</td>
                    <td>{p.localisation}</td>
                    <td>{p.type_mesure}</td>
                    <td>{p.valeur_mesure}</td>
                </tr>
    ))}
                
              </tbody>
            </table>

            
          </div>

            </section>
        </div>
     );
}

export default CosulterResultat;