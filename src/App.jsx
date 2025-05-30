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
      < Navbar/>
      <main>
        <Routes>
          <Route path="/TAKTIWIKI/" element={<Inicio />} />
          <Route path="/TAKTIWIKI/camos" element={<Camos />} />
          <Route path="/TAKTIWIKI/uniforms" element={<Uniforms />} />
          <Route path="/TAKTIWIKI/vests" element={<Vests />} />
        </Routes>
      </main>
      < Footer/>
    </>
  );
}

export default App;