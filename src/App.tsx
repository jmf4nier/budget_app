import "./App.css";
import Home from "./components/Home";
import GreenDisplay from "./components/GreenDisplay";
import RedDisplay from "./components/RedDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Home firstName="Budget" />
        </h1>
        <GreenDisplay />
        <br></br>
        <RedDisplay />
      </header>
    </div>
  );
}

export default App;
