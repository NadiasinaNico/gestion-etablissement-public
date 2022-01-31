import React from "react";
import Button from "./Button";
import ListePays from "../ListePays/ListePays";
import axios from "axios";

class Localisation extends React.Component {
  state = {
    listeEtablissement: [],
    loading: false,
  };

  rechercheData = (type) => {
    this.setState({ loading: true });
    axios
      .get(
        `https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`
      )
      .then((reponse) => {
        this.setState({ listeEtablissement: reponse.data.features });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <h4 className="text-success text-center">
            Rechercher un établissement :
          </h4>
          <Button
            name="Maire"
            color="btn-primary"
            click={() => this.rechercheData("mairie")}
          />
          <Button
            name="Commisaire de police"
            color="btn-primary"
            click={() => this.rechercheData("commissariat_police")}
          />
          <Button
            name="Pôle emploie"
            color="btn-primary"
            click={() => this.rechercheData("pole_emploi")}
          />
          <Button
            name="gendarmerie"
            color="btn-primary"
            click={() => this.rechercheData("gendarmerie")}
          />
          <Button
            name="Préfecture"
            color="btn-primary"
            click={() => this.rechercheData("prefecture")}
          />
          {this.state.listeEtablissement &&
            this.state.listeEtablissement.map((listeEtablissements) => {
              console.log(listeEtablissements);
              return (
                
                  <div className="col-12 col-md-6">
                    <ListePays
                      addresses={listeEtablissements.properties.addresses}
                      horaires={listeEtablissements.properties.horaires}
                      id={listeEtablissements.properties.id}
                      nom={listeEtablissements.properties.nom}
                      pivotLocal={listeEtablissements.properties.pivotLocal}
                      telephone={listeEtablissements.properties.telephone}
                      url={listeEtablissements.properties.url}
                    />
                 
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default Localisation;
