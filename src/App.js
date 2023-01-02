import './App.css';
import Collapses from "./Collapse/Collapses.js";
import Form from "./Menu/Form.js";
import { useState } from "react";

function App() {

  const [collapses, setCollapses] = useState([]);
  const addCollapses = collapse => {
    setCollapses([...collapses, collapse])
  }
  return (
    <div className="App">
      <Collapses collapses={collapses}/>
      <Form func={addCollapses}/>
    </div>
  );
}

export default App;
