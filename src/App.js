import logo from "./logo.svg";
import "./App.css";
import { Nested } from "./components/Nested";
import { data } from "./components/data";
import { useState } from "react";
import { Display } from "./components/Display";

function App() {
  const [info, setInfo] = useState(false);
  return (
    <div className="App">
      <div>
        <h2>Nested Check Box Of Teacher & Children</h2>
        <div className="grid-container">
          {data?.map((el, index) => (
            <Nested key={index} store={el} data={info} setData={setInfo} />
          ))}
        </div>
      </div>
      <div>
        <h2>Selected Techer and Student Data</h2>
        <div className="grid-container">
          {data.map((el, index) => (
            <Display key={index} info={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
