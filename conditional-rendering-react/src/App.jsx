import { useState } from "react";
import "./App.css";
import { Cat, Choose } from "./components/Choose";
import Login from "./components/Login";

function App() {
  const [toggle, setIsToggle] = useState(false);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
