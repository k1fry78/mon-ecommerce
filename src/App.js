import "./App.css";
import Rooteur from "./Routeur";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <Navbar />
      </header>
      <Rooteur />
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
