import React, { useState } from 'react';
import './App.css';
import Selector from './Selector'
function App() {
  var [searchValue, setSearchValue] = useState('')
  const result = [
    { name: "Arthur", nickname: "kidmeeno" },
    { name: "Joshua", nickname: "Josh Sherran" },
    { name: "Nonso", nickname: "nonicalx" }
  ]

  console.log("search value", searchValue)

  return (
    <div>
      <Selector result={result} setValue={setSearchValue} isSearchable={true} />
    </div>
  );
}

export default App;
