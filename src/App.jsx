import React from "react";

function App() {
  const [on, setOn] = React.useState(false);
  return (
    <div className="App">
      <FilterBar />
      <br />
      <Todos showStrike />
    </div>
  );
}

export default App;
