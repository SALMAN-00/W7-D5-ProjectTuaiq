import { useState } from "react";
import "./App.css";
import header from "./component/header";
import nav from "./component/nav";
import Foot from "./foot";
import Underheader from "./component/under-heder";
import NabBar from "./component/header";
import footer from "./component/footer";
import Card from "./component/Card";
import Reg from "./component/Reg";
function App() {
  return (
    <>
    <NabBar></NabBar>
     <div className="cards">     
       <Card  name="برنامج" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في "  />
       <Card  name="معسكر" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="برنامج" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="معسكر" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="برنامج" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="معسكر" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="برنامج" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="معسكر" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
       <Card  name="برنامج" title="اختبار الاختراق للمبتدئين" locImg="https://tuwaiq.edu.sa/icons/location_icon.svg" loc="الرياض" calImg="https://tuwaiq.edu.sa/icons/caleander_icon.svg" cal="أسبوع واحد" startImg="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" start=" 10\11\20123 يبداء في " />
     </div>
     <Reg></Reg>
    <Underheader/>  
      <Foot/>

    </>
  );
}

export default App;
