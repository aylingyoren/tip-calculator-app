import Calculator from "./components/Calculator/Calculator";
import SplitterLogo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={SplitterLogo} alt="splitter logo" />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
