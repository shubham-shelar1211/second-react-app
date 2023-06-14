// HTML + JS => JSX
// Putting the Brain in HTML.
// Styling :: Color
// CSS is also JavaScript!!!
function App() {
  // object literals
  let style = { background: "green", color: "white" };

  return (
    <>
      <h1 style={style}>Hello World</h1>

      {/** First Curly Brace represents JS Expression */}
      {/** Second Culry Brace, its object literal */}
      <h1 style={{}}>Hello</h1>
      <h1 style={{ background: "blue", color: "white" }}>Hello Again</h1>

      {/** Observations */}
      {/** Style Attributes become CamelCase in Nature */}
      {/** Values we are wriing in double quotes */}
      {/** Multiple props are seperate by comma */}

      <h1 style={{ backgroundColor: "red", color: "white", padding: "8px" }}>
        hello World
      </h1>
    </>
  );
}

export default App;