import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vetements from "./pages/Vetements";
import Bijoux from "./pages/Bijoux";
import Electroniques from "./pages/Electronique";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Panier from "./pages/Panier";

function Routeur() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/vetements" element={<Vetements />} />
      <Route path="/bijoux" element={<Bijoux />} />
      <Route path="/electroniques" element={<Electroniques/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/panier" element={<Panier />} />
    </Routes>
  );
}

export default Routeur;
