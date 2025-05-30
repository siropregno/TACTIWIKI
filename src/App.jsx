import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/component-navbar/navbar';
import Footer from './components/component-footer/footer'
import Inicio from './pages/Inicio';
import Camos from './pages/Camos';
import Uniforms from './pages/Uniforms';
import Vests from './pages/Vests';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/camos" element={<Camos />} />
          <Route path="/uniforms" element={<Uniforms />} />
          <Route path="/vests" element={<Vests />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;