import "./App.css";

/**
 * Bcause 'class' is a keyword in JS.
 */
function App() {
  return (
    <>
      <h1 className="beautiful">Hello World</h1>

      <h1 style={{ color: "red" }}>Hello</h1>
    </>
  );
}

export default App;