import React from 'react';
import './App.css';
import Selector from './Selector'
function App() {

  const data = [
    { name: "Arthur", nickname: "kidmeeno" },
    { name: "Joshua", nickname: "Josh Sherran" },
    { name: "Joshua", nickname: "Josh Sherran" }
  ]

  return (
    <div>
      <Selector data={data} />
    </div>
  );
}

export default App;
