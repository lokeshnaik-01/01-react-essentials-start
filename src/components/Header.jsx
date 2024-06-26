import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const desc = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>We use curly braces to output dynamic values</p>

      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
      <p>We have created a new component header</p>
    </header>
  );
}
