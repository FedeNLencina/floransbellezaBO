import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Prices } from "./components/prices/Prices";
import { LogoComponent } from "./components/LogoComponent/LogoComponent";

function App() {
  return (
    <BrowserRouter>
      <LogoComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Prices />}>
          <Route path="/manicuria" />
          <Route path="/pestaniasYCejas" />
        </Route>
        <Route path="/servicios" element={<Home />} />
        <Route path="/serviciosHome" element={<Home />} />
        <Route path="/imagenesGaleriaHome" element={<Home />} />
        <Route path="/imagenesGaleriaConocenos" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
