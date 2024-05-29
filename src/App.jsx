function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
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
