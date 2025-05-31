import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Agrega esto
import './Inicio.css';

// Puedes cambiar estas rutas por las imágenes que desees mostrar
import camoImg from '@assets/images/inicio-camuflaje.png';
import vestImg from '@assets/images/inicio-vests.png';
import uniImg from '@assets/images/inicio-uniform.png';
import logo from '@assets/images/logo-full.png';

const sections = [
  {
    img: camoImg,
    title: 'Camuflajes',
    href: '/camos'
  },
  {
    img: vestImg,
    title: 'Chalecos',
    href: '/Vests'
  },
  {
    img: uniImg,
    title: 'Uniformes',
    href: '/Uniforms'
  }
];

const Inicio = () => {
  return (
    <>
      <Helmet>
        <title>TACTIWIKI - Inicio</title>
      </Helmet>
      <section className="inicio-section">
        <div className="inicio-main-box">
          <div className="inicio-content">
            <div className="inicio-header">
              <img src={logo} alt="TACTIWIKI" />
              <p className="inicio-subtitle">Tu enciclopedia visual de equipamiento militar</p>
            </div>
            <div className="inicio-sections">
              {sections.map(({ img, title, href }) => (
                <Link to={href} key={title}>
                  <div className="inicio-section-card">
                    <div>
                      <img src={img} alt={title} className="inicio-section-img" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Inicio;