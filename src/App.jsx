import Header from "./components/Header";
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
