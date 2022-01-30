import React from 'react';
import Chateau from "../../assets/image/chateau.jpg";

 const Accueil = () => {
  return (
    <div className="container">
      <h4 className="text-success text-center">Bievenue sur le site de l'Ariege !</h4>
      <p>Bievenue sur le site de l'Ariege !</p>
      <img src={Chateau} alt="" width="100%" />
    </div>
  )
}
export default Accueil;