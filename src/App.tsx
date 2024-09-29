import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Home />} />
        <Route path="/servicios" element={<Home />} />
        <Route path="/serviciosHome" element={<Home />} />
        <Route path="/imagenesGaleriaHome" element={<Home />} />
        <Route path="/imagenesGaleriaConocenos" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
