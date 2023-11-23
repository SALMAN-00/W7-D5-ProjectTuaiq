import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import header from "./component/header";
import nav from "./component/nav";
import Foot from "./foot";
import Underheader from "./component/under-heder";
function App() {
  return (
    <>
      <Underheader/>  
      <Foot/>
    </>
  );
}

export default App;
