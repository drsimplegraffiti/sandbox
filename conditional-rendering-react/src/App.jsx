// import { useState } from "react";
import "./App.css";
// import { Cat, Choose } from "./components/Choose";
import Login from "./components/Login";
import Loading from "./Loading";
import SearchFilter from "./SearchFilter";
import SearchFilter2 from "./SearchFilter2";

function App() {
  // const [toggle, setIsToggle] = useState(false);
  return (
    <div className="App">
      <Login />
      {/* <SearchFilter /> */}
      {/* <SearchFilter2 /> */}
      <Loading />
    </div>
  );
}

export default App;
