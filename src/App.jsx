const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desc = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

function App() {
  return (
    <div>
      <Header></Header>

      <p>JSX is nothing but Javascript Syntax eXtension</p>
      <p>
        Function in react should return a JSX code and have name with captial
        letter
      </p>
      <p>
        Browser doesn't understand the JSX code react will sent it to browser so
        that it understands
      </p>
      <p>We can directly call the function as a HTML tag</p>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
