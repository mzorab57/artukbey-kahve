
import React, {  useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";


import AppRoutes from './routes/AppRoute';



function App() {
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
