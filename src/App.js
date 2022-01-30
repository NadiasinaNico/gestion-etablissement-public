import React from "react";

import Etablissement from "./Component/Etablissement/Etablissement";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Etablissement />
    </BrowserRouter>
        
    </>
  );
};
export default App;
