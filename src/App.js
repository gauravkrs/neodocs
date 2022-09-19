import logo from "./logo.svg";
import "./App.css";
import { Nested } from "./components/Nested";
import { data } from "./components/data";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState(false);
  return (
    <div className="App">
      <div>
        <h2>Nested Check Box Of Teacher & Children</h2>
        <div>
          <Nested store={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
