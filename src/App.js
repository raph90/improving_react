import React from "react";

function App() {
  const [on, setOn] = React.useState(false);
  return (
    <div className="App">
      Hello {on.toString()}
      <button onClick={() => setOn((old) => !old)}>Toggle</button>
    </div>
  );
}

export default App;
