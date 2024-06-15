import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import CoreConceptDestruct from "./components/CoreConceptDestruct";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  let tabContent = "please select";
  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    // tabContent = selectedButton;
  }
  return (
    <div>
      <Header></Header>

      <div Style={"text-align:center;"}>
        <p>JSX is nothing but Javascript Syntax eXtension</p>
        <p>
          Function in react should return a JSX code and have name with captial
          letter
        </p>
        <p>
          Browser doesn't understand the JSX code react will sent it to browser
          so that it understands
        </p>
        <p>We can directly call the function as a HTML tag</p>
      </div>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConceptDestruct {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* if we want to define a function which needs to be executed upon an event but also want to control how it's going to be called and which args are goinf to be passed*/}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            {/*
            <TabButton onSelect={handleSelect}>State</TabButton>
            children will receive what ever passed between the component Tag
            <TabButton>
              This text is not shown in UI as react will not know where to
              display this so we use props
            </TabButton>
            <TabButton>
              Children props will add what ever text between here as a child to
              that prop and print
            </TabButton>
            */}
          </menu>
          {/*tabContent*/}
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
