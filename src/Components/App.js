import "../Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Commander from "./Commander";
import Réservation from "./Réservation";
import QuiSommesNous from "./QuiSommesNous";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Commander" element={<Commander />} />
          <Route path="/Réservation" element={<Réservation />} />
          <Route path="/QuiSommesNous" element={<QuiSommesNous />} />
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
