import React from "react";
import Navbar from "../Navbar/Navbar";
import Accueil from "../Accueil/Accueil";
import Contact from "../Contact/Contact";
import Localisation from "../Localisation/Localisation";
import Error404 from "../Error/Error";
import { Route, Routes } from "react-router-dom";

class Etablissement extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<Error404 />} />
        </Routes>
      </div>
    );
  }
}
export default Etablissement;
