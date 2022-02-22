import Main from "./components/Main";
import { CityProvider } from "./context/CityContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <Main />
      </CityProvider>
    </div>
  );
}

export default App;
