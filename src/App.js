// JSX = JS + HTML
// IF A FUNCTION RETURNS HTML, THIS BECOMES A USER DEFINED TAG
// <App></App>
// <App />
// Compare with PreDefineTag
// h1, p, li,
// Why Master Case Convention ?
// For Pre Define Tag  :: Lowercase :: <h1>
// For User Define Tag :: MasterCase :: <App>
function App() {
  return <h1>Hello</h1>;
}

// UNUSED!!!
// JSX => JS + HTML/XML
// IF your function returns HTML
// Convention:: Start your function name in captial letter.
function Sum() {
  return <h1>100</h1>;
}
export default App;