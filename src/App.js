function App() {
  let str = `Hello Universe!!!`;
  let pi = 3.141159;
  let active = true;
  let isUserdLoggedIn = true;

  // JSX
  return (
    <>
      <h1>Hello World</h1>
      <h1>{str}</h1>
      <h1>PI {pi} !!</h1>

      {/**IF Logged In */}
      {isUserdLoggedIn && <h1>Welcome CDAC!</h1>}

      {/** Usage of Boolean */}
      <h1>{active ? "good morning" : "good night"}</h1>

      {/** MOST USEFUL  */}
      {active && <h1>Good Morning</h1>}
      {active ? <h1>Good Morning</h1> : <h1>Good Night</h1>}
    </>
  );
}

export default App;