import Calculator from "./components/Calculator/Calculator";
import { ReactComponent as SplitterLogo } from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <SplitterLogo />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
