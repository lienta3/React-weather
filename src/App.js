import Weather from "./Weather.js";
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Auckland" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
