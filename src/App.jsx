import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import { useState, Fragment } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import CoreConceptDestruct from "./components/CoreConceptDestruct";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import SampleText from "./components/SampleText";
import Examples from "./components/Examples";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  
  
  return (
    <>
      <Header></Header>
      <SampleText />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
