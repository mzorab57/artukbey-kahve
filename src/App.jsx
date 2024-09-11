
import React, {  useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";


import AppRoutes from './routes/AppRoute';



function App() {
  // aw set show service bo awaia katek mouse lasar page lachu la har shwenek bet colse aw hover bkat
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppRoutes setMenuOpen={setMenuOpen} />
      <Footer />
      </BrowserRouter>
   
  );
}

export default App;
