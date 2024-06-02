import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import CoreConceptDestruct from "./components/CoreConceptDestruct";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            {/*
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
        </section>
      </main>
    </div>
  );
}

export default App;
