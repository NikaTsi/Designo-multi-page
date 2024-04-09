import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from "./pages/main";
import WebDesign from "./pages/webDesign";
import AppDesign from './pages/appDesign';
import GraphicDesign from './pages/graphicDesign';
import AboutUs from './pages/aboutUs';
import Location from './pages/location';
import Contact from './pages/contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/webDesign' element={<WebDesign />} />
        <Route path='/appDesign' element={<AppDesign />} />
        <Route path='/graphicDesign' element={<GraphicDesign />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
