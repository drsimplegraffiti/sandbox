import "./App.css";
import Pallet from "./Pallet";

function App() {
  return (
    <div className="App">
      <h1>Copy to Clipboard</h1>
      <p>Click to copy</p>
      <div className="pallet-section">
        <Pallet color="192bc2" />
        <Pallet color="ff595e" />
        <Pallet color="ffca3a" />
      </div>
    </div>
  );
}

export default App;
