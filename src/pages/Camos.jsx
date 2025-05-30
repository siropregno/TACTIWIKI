import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CamoCard from '../components/component-camocard/camocard';
import multicamImg from '../assets/camos/MULTICAM.png';
import m81WoodlandImg from '../assets/camos/M81-WOODLAND.png';
import mtpImg from '../assets/camos/MTP.png';
import emrImg from '../assets/camos/EMR.png';
import ucpImg from '../assets/camos/UCP.png';
import ocpImg from '../assets/camos/OCP.png';
import marpatImg from '../assets/camos/MARPAT.png';
import cceImg from '../assets/camos/CCE.png';
import dcuImg from '../assets/camos/DCU-3-COLORES.png';
import mm14Img from '../assets/camos/MM-14.png';

// Lista de países únicos para el filtro
const allCamos = [
  {
    image: multicamImg,
    name: "MULTICAM",
    year: 2002, // <-- Agrega el año de creación
    description: "Diseñado para su uso en una amplia gama de entornos y condiciones, desarrollado y producido por la empresa estadounidense Crye Precision. El patrón ha sido ampliamente adoptado a nivel mundial. Variantes de este, algunas no licenciadas, están en uso con ejércitos de todo el mundo, particularmente con unidades de fuerzas especiales y operaciones especiales.",
    developer: 'Crye Precision',
    terrain: ['bosque', 'desierto', 'urbano', 'montaña'],
    users: [
      { country: 'Afganistán', flag: '/src/assets/flags/af.svg' },
      { country: 'Albania', flag: '/src/assets/flags/al.svg' },
      { country: 'Angola', flag: '/src/assets/flags/ao.svg' },
      { country: 'Argentina', flag: '/src/assets/flags/ar.svg' },
      { country: 'Australia', flag: '/src/assets/flags/au.svg' },
      { country: 'Austria', flag: '/src/assets/flags/at.svg' },
      { country: 'Baréin', flag: '/src/assets/flags/bh.svg' },
      { country: 'Bangladés', flag: '/src/assets/flags/bd.svg' },
      { country: 'Bélgica', flag: '/src/assets/flags/be.svg' },
      { country: 'Botsuana', flag: '/src/assets/flags/bw.svg' },
      { country: 'Bulgaria', flag: '/src/assets/flags/bg.svg' },
      { country: 'Canadá', flag: '/src/assets/flags/ca.svg' },
      { country: 'Chile', flag: '/src/assets/flags/cl.svg' },
      { country: 'Colombia', flag: '/src/assets/flags/co.svg' },
      { country: 'Dinamarca', flag: '/src/assets/flags/dk.svg' },
      { country: 'Estonia', flag: '/src/assets/flags/ee.svg' },
      { country: 'Fiyi', flag: '/src/assets/flags/fj.svg' },
      { country: 'Francia', flag: '/src/assets/flags/fr.svg' },
      { country: 'Georgia', flag: '/src/assets/flags/ge.svg' },
      { country: 'Alemania', flag: '/src/assets/flags/de.svg' },
      { country: 'Grecia', flag: '/src/assets/flags/gr.svg' },
      { country: 'Hungría', flag: '/src/assets/flags/hu.svg' },
      { country: 'Indonesia', flag: '/src/assets/flags/id.svg' },
      { country: 'Irak', flag: '/src/assets/flags/iq.svg' },
      { country: 'Irlanda', flag: '/src/assets/flags/ie.svg' },
      { country: 'Italia', flag: '/src/assets/flags/it.svg' },
      { country: 'Jordania', flag: '/src/assets/flags/jo.svg' },
      { country: 'Kazajistán', flag: '/src/assets/flags/kz.svg' },
      { country: 'Kenia', flag: '/src/assets/flags/ke.svg' },
      { country: 'Kuwait', flag: '/src/assets/flags/kw.svg' },
      { country: 'Letonia', flag: '/src/assets/flags/lv.svg' },
      { country: 'Lituania', flag: '/src/assets/flags/lt.svg' },
      { country: 'Malasia', flag: '/src/assets/flags/my.svg' },
      { country: 'Malí', flag: '/src/assets/flags/ml.svg' },
      { country: 'Países Bajos', flag: '/src/assets/flags/nl.svg' },
      { country: 'Nueva Zelanda', flag: '/src/assets/flags/nz.svg' },
      { country: 'Nigeria', flag: '/src/assets/flags/ng.svg' },
      { country: 'Macedonia del Norte', flag: '/src/assets/flags/mk.svg' },
      { country: 'Noruega', flag: '/src/assets/flags/no.svg' },
      { country: 'Omán', flag: '/src/assets/flags/om.svg' },
      { country: 'Filipinas', flag: '/src/assets/flags/ph.svg' },
      { country: 'Polonia', flag: '/src/assets/flags/pl.svg' },
      { country: 'Portugal', flag: '/src/assets/flags/pt.svg' },
      { country: 'Catar', flag: '/src/assets/flags/qa.svg' },
      { country: 'Rumanía', flag: '/src/assets/flags/ro.svg' },
      { country: 'Arabia Saudita', flag: '/src/assets/flags/sa.svg' },
      { country: 'Singapur', flag: '/src/assets/flags/sg.svg' },
      { country: 'Eslovaquia', flag: '/src/assets/flags/sk.svg' },
      { country: 'Eslovenia', flag: '/src/assets/flags/si.svg' },
      { country: 'Somalia', flag: '/src/assets/flags/so.svg' },
      { country: 'Sudáfrica', flag: '/src/assets/flags/za.svg' },
      { country: 'Corea del Sur', flag: '/src/assets/flags/kr.svg' },
      { country: 'España', flag: '/src/assets/flags/es.svg' },
      { country: 'Suecia', flag: '/src/assets/flags/se.svg' },
      { country: 'Tanzania', flag: '/src/assets/flags/tz.svg' },
      { country: 'Tailandia', flag: '/src/assets/flags/th.svg' },
      { country: 'Turquía', flag: '/src/assets/flags/tr.svg' },
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
      { country: 'Emiratos Árabes Unidos', flag: '/src/assets/flags/ae.svg' },
      { country: 'Reino Unido', flag: '/src/assets/flags/gb.svg' },
      { country: 'Estados Unidos', flag: '/src/assets/flags/us.svg' },
      { country: 'Uzbekistán', flag: '/src/assets/flags/uz.svg' },
      { country: 'Yemen', flag: '/src/assets/flags/ye.svg' },
      { country: 'Zambia', flag: '/src/assets/flags/zm.svg' }
    ],
    former: [
      { country: 'República Islámica de Afganistán', flag: '/src/assets/flags/af.svg' },
      { country: 'China', flag: '/src/assets/flags/cn.svg' },
    ]
  },
  {
    image: m81WoodlandImg,
    name: "M81 WOODLAND",
    year: 1981, // <-- Agrega el año de creación
    description: "Un patrón de camuflaje clásico que se ha utilizado durante décadas, efectivo en áreas boscosas.",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['bosque'],
    users: [
      { country: 'Afganistán', flag: '/src/assets/flags/af.svg' },
      { country: 'Argentina', flag: '/src/assets/flags/ar.svg' },
      { country: 'Armenia', flag: '/src/assets/flags/am.svg' },
      { country: 'Azerbaiyán', flag: '/src/assets/flags/az.svg' },
      { country: 'Bangladés', flag: '/src/assets/flags/bd.svg' },
      { country: 'Bután', flag: '/src/assets/flags/bt.svg' },
      { country: 'Bolivia', flag: '/src/assets/flags/bo.svg' },
      { country: 'Bosnia y Herzegovina', flag: '/src/assets/flags/ba.svg' },
      { country: 'República Srpska', flag: '/src/assets/flags/ba.svg' },
      { country: 'Camboya', flag: '/src/assets/flags/kh.svg' },
      { country: 'Chad', flag: '/src/assets/flags/td.svg' },
      { country: 'Chile', flag: '/src/assets/flags/cl.svg' },
      { country: 'Colombia', flag: '/src/assets/flags/co.svg' },
      { country: 'FARC', flag: '/src/assets/flags/co.svg' },
      { country: 'Congo-Brazzaville', flag: '/src/assets/flags/cg.svg' },
      { country: 'Congo-Kinshasa', flag: '/src/assets/flags/cd.svg' },
      { country: 'Costa de Marfil', flag: '/src/assets/flags/ci.svg' },
      { country: 'Croacia', flag: '/src/assets/flags/hr.svg' },
      { country: 'Chipre', flag: '/src/assets/flags/cy.svg' },
      { country: 'Egipto', flag: '/src/assets/flags/eg.svg' },
      { country: 'El Salvador', flag: '/src/assets/flags/sv.svg' },
      { country: 'Estonia', flag: '/src/assets/flags/ee.svg' },
      { country: 'Fiyi', flag: '/src/assets/flags/fj.svg' },
      { country: 'Gambia', flag: '/src/assets/flags/gm.svg' },
      { country: 'Grecia', flag: '/src/assets/flags/gr.svg' },
      { country: 'Guatemala', flag: '/src/assets/flags/gt.svg' },
      { country: 'Haití', flag: '/src/assets/flags/ht.svg' },
      { country: 'Honduras', flag: '/src/assets/flags/hn.svg' },
      { country: 'Hong Kong', flag: '/src/assets/flags/hk.svg' },
      { country: 'Israel', flag: '/src/assets/flags/il.svg' },
      { country: 'Kirguistán', flag: '/src/assets/flags/kg.svg' },
      { country: 'Kuwait', flag: '/src/assets/flags/kw.svg' },
      { country: 'Lituania', flag: '/src/assets/flags/lt.svg' },
      { country: 'Luxemburgo', flag: '/src/assets/flags/lu.svg' },
      { country: 'Malasia', flag: '/src/assets/flags/my.svg' },
      { country: 'México', flag: '/src/assets/flags/mx.svg' },
      { country: 'Moldavia', flag: '/src/assets/flags/md.svg' },
      { country: 'Montenegro', flag: '/src/assets/flags/me.svg' },
      { country: 'Corea del Norte', flag: '/src/assets/flags/kp.svg' },
      { country: 'Filipinas', flag: '/src/assets/flags/ph.svg' },
      { country: 'Rusia', flag: '/src/assets/flags/ru.svg' },
      { country: 'San Cristóbal y Nieves', flag: '/src/assets/flags/kn.svg' },
      { country: 'Arabia Saudita', flag: '/src/assets/flags/sa.svg' },
      { country: 'Somalia', flag: '/src/assets/flags/so.svg' },
      { country: 'Corea del Sur', flag: '/src/assets/flags/kr.svg' },
      { country: 'Sri Lanka', flag: '/src/assets/flags/lk.svg' },
      { country: 'Tonga', flag: '/src/assets/flags/to.svg' },
      { country: 'Turquía', flag: '/src/assets/flags/tr.svg' },
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
      { country: 'Estados Unidos', flag: '/src/assets/flags/us.svg' },
      { country: 'Vietnam', flag: '/src/assets/flags/vn.svg' }
    ]
  },
  {
    image: mtpImg,
    name: "MTP (PATRÓN MULTITERRENO)",
    year: 2010, // <-- Agrega el año de creación
    description: "Un patrón de camuflaje moderno utilizado por las Fuerzas Armadas Británicas, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde desiertos hasta bosques. Su combinación única de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Ejército Británico & Crye Precision',
    terrain: ['bosque', 'desierto', 'montaña'],
    users: [
      { country: 'Baréin', flag: '/src/assets/flags/bh.svg' },
      { country: 'Dinamarca', flag: '/src/assets/flags/dk.svg' },
      { country: 'Malta', flag: '/src/assets/flags/mt.svg' },
      { country: 'Nueva Zelanda', flag: '/src/assets/flags/nz.svg' },
      { country: 'Tonga', flag: '/src/assets/flags/to.svg' },
      { country: 'Reino Unido', flag: '/src/assets/flags/gb.svg' },
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
      { country: 'Pakistán', flag: '/src/assets/flags/pk.svg' }
    ],
    former: []
  },
  {
    image: emrImg,
    name: "EMR (PATRÓN MULTITERRENO RUSO)",
    year: 2008,
    description: "Un patrón de camuflaje moderno utilizado por las Fuerzas Armadas Rusas, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde desiertos hasta bosques. Su combinación única de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Ejército Ruso',
    terrain: ['bosque', 'montaña'],
    users: [
      { country: 'Bielorrusia', flag: '/src/assets/flags/by.svg' },
      { country: 'Belice', flag: '/src/assets/flags/bz.svg' },
      { country: 'Rusia', flag: '/src/assets/flags/ru.svg' },
      { country: 'Tayikistán', flag: '/src/assets/flags/tj.svg' }
    ],
    former: [
      { country: 'Siria', flag: '/src/assets/flags/sy.svg' }
    ]
  },
  {
    image: ucpImg,
    name: "UCP (PATRÓN DE CAMUFLAJE UNIVERSAL)",
    year: 2005,
    description: "",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['urbano', 'desierto'],
    users: [
      { country: 'Afganistán', flag: '/src/assets/flags/af.svg' },
      { country: 'Argentina', flag: '/src/assets/flags/ar.svg' },
      { country: 'Azerbaiyán', flag: '/src/assets/flags/az.svg' },
      { country: 'Bolivia', flag: '/src/assets/flags/bo.svg' },
      { country: 'Bosnia y Herzegovina', flag: '/src/assets/flags/ba.svg' },
      { country: 'Chad', flag: '/src/assets/flags/td.svg' },
      { country: 'Chile', flag: '/src/assets/flags/cl.svg' },
      { country: 'Chipre', flag: '/src/assets/flags/cy.svg' },
      { country: 'Hungría', flag: '/src/assets/flags/hu.svg' },
      { country: 'India', flag: '/src/assets/flags/in.svg' },
      { country: 'Irán', flag: '/src/assets/flags/ir.svg' },
      { country: 'Kazajistán', flag: '/src/assets/flags/kz.svg' },
      { country: 'Líbano', flag: '/src/assets/flags/lb.svg' },
      { country: 'Malasia', flag: '/src/assets/flags/my.svg' },
      { country: 'México', flag: '/src/assets/flags/mx.svg' },
      { country: 'Montenegro', flag: '/src/assets/flags/me.svg' },
      { country: 'Moldavia', flag: '/src/assets/flags/md.svg' },
      { country: 'Macedonia del Norte', flag: '/src/assets/flags/mk.svg' },
      { country: 'Paraguay', flag: '/src/assets/flags/py.svg' },
      { country: 'Perú', flag: '/src/assets/flags/pe.svg' },
      { country: 'Arabia Saudita', flag: '/src/assets/flags/sa.svg' },
      { country: 'Serbia', flag: '/src/assets/flags/rs.svg' },
      { country: 'Tayikistán', flag: '/src/assets/flags/tj.svg' },
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' }
    ],
    former: []
  },
  {
    image: ocpImg,
    name: "OCP (PATRÓN DE CAMUFLAJE OPTIMIZADO)",
    year: 2009,
    description: "Un patrón de camuflaje moderno utilizado por las Fuerzas Armadas de los Estados Unidos, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde desiertos hasta bosques. Su combinación única de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Crye Precision & Natick Labs',
    terrain: ['bosque', 'desierto', 'montaña'],
    users: [
      { country: 'Australia', flag: '/src/assets/flags/au.svg' },
      { country: 'Líbano', flag: '/src/assets/flags/lb.svg' },
      { country: 'Corea del Sur', flag: '/src/assets/flags/kr.svg' },
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
      { country: 'Estados Unidos', flag: '/src/assets/flags/us.svg' }
    ],
    former: []
  },
  {
    image: marpatImg,
    name: "MARPAT (PATRÓN DE CAMUFLAJE DE MARINES)",
    year: 2000,
    description: "Un patrón de camuflaje digital utilizado por el Cuerpo de Marines de los Estados Unidos, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde bosques hasta áreas urbanas. Su diseño pixelado ayuda a romper la silueta humana y mejorar la ocultación.",
    developer: 'Cuerpo de Marines de los Estados Unidos',
    terrain: ['bosque', 'urbano'],
    users: [
    { country: 'Argentina', flag: '/src/assets/flags/ar.svg' },
    { country: 'Bahamas', flag: '/src/assets/flags/bs.svg' },
    { country: 'Bolivia', flag: '/src/assets/flags/bo.svg' },
    { country: 'Bosnia y Herzegovina', flag: '/src/assets/flags/ba.svg' },
    { country: 'Brasil', flag: '/src/assets/flags/br.svg' },
    { country: 'Chad', flag: '/src/assets/flags/td.svg' },
    { country: 'Chile', flag: '/src/assets/flags/cl.svg' },
    { country: 'Chipre', flag: '/src/assets/flags/cy.svg' },
    { country: 'Ecuador', flag: '/src/assets/flags/ec.svg' },
    { country: 'Georgia', flag: '/src/assets/flags/ge.svg' },
    { country: 'Haití', flag: '/src/assets/flags/ht.svg' },
    { country: 'India', flag: '/src/assets/flags/in.svg' },
    { country: 'Hungría', flag: '/src/assets/flags/hu.svg' },
    { country: 'Irán', flag: '/src/assets/flags/ir.svg' },
    { country: 'Líbano', flag: '/src/assets/flags/lb.svg' },
    { country: 'Mongolia', flag: '/src/assets/flags/mn.svg' },
    { country: 'Myanmar', flag: '/src/assets/flags/mm.svg' },
    { country: 'Macedonia del Norte', flag: '/src/assets/flags/mk.svg' },
    { country: 'Santa Lucía', flag: '/src/assets/flags/lc.svg' },
    { country: 'Arabia Saudita', flag: '/src/assets/flags/sa.svg' },
    { country: 'Serbia', flag: '/src/assets/flags/rs.svg' },
    { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
    { country: 'Estados Unidos', flag: '/src/assets/flags/us.svg' }
  ],
    former: []
  },
  {
    image: cceImg,
    name: "CCE (CAMOUFLAGE CENTRAL EUROPEO)",
    year: 1991,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas Francesas, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde bosques hasta áreas urbanas. Su combinación de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Fuerzas Armadas Francesas',
    terrain: ['urbano', 'desierto', 'bosque', 'montaña'],
    users: [
    { country: 'Austria', flag: '/src/assets/flags/at.svg' },
    { country: 'Cabo Verde', flag: '/src/assets/flags/cv.svg' },
    { country: 'República Centroafricana', flag: '/src/assets/flags/cf.svg' },
    { country: 'Comoras', flag: '/src/assets/flags/km.svg' },
    { country: 'Francia', flag: '/src/assets/flags/fr.svg' },
    { country: 'India', flag: '/src/assets/flags/in.svg' },
    { country: 'Rusia', flag: '/src/assets/flags/ru.svg' },
    { country: 'Catar', flag: '/src/assets/flags/qa.svg' },
    { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' },
    { country: 'Emiratos Árabes Unidos', flag: '/src/assets/flags/ae.svg' }
  ],
    former: []
  },
  {
    image: dcuImg,
    name: "DCU (DESERT CAMOUFLAGE UNIFORM)",
    year: 1989,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas de los Estados Unidos, diseñado para entornos desérticos. Se caracteriza por su combinación de colores arena y marrón, lo que ayuda a los soldados a mezclarse con el paisaje árido.",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['desierto'],
    users: [
    { country: 'Argentina', flag: '/src/assets/flags/ar.svg', type: 'current' },
    { country: 'Azerbaiyán', flag: '/src/assets/flags/az.svg', type: 'current' },
    { country: 'Bosnia y Herzegovina', flag: '/src/assets/flags/ba.svg', type: 'current' },
    { country: 'Georgia', flag: '/src/assets/flags/ge.svg', type: 'current' },
    { country: 'Israel', flag: '/src/assets/flags/il.svg', type: 'current' },
    { country: 'Arabia Saudita', flag: '/src/assets/flags/sa.svg', type: 'current' }
    ],
    former: [
    { country: 'Afganistán', flag: '/src/assets/flags/af.svg', type: 'former' },
    { country: 'Croacia', flag: '/src/assets/flags/hr.svg', type: 'former' },
    { country: 'Países Bajos', flag: '/src/assets/flags/nl.svg', type: 'former' },
    { country: 'Macedonia del Norte', flag: '/src/assets/flags/mk.svg', type: 'former' },
    { country: 'Eslovenia', flag: '/src/assets/flags/si.svg', type: 'former' },
    { country: 'Estados Unidos', flag: '/src/assets/flags/us.svg', type: 'former' }
  ]
  },
  {
    image: mm14Img,
    name: "MM-14",
    year: 2014,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas de Ucrania, diseñado para entornos urbanos y rurales. Se caracteriza por su combinación de colores que ayudan a los soldados a mezclarse con el paisaje ucraniano.",
    developer: 'Ejército de Ucrania',
    terrain: ['urbano', 'rural'],
    users: [
      { country: 'Ucrania', flag: '/src/assets/flags/ua.svg' }
    ],
    former: []
  }
];

// Obtener lista única de países (incluyendo former)
const allCountries = Array.from(
  new Set(
    allCamos.flatMap(camo => [
      ...(camo.users || []).map(u => u.country),
      ...(camo.former || []).map(u => u.country)
    ])
  )
).sort();

// Obtener lista única de terrenos
const allTerrains = Array.from(
  new Set(allCamos.flatMap(camo => camo.terrain))
).sort();

const Camos = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedTerrain, setSelectedTerrain] = useState('');
  // Un solo filtro combinado para orden
  const [order, setOrder] = useState('popularity-desc');

  // Filtrar camuflajes por país y terreno seleccionado (incluyendo former)
  const filteredCamos = allCamos.filter(camo => {
    const countryMatch = selectedCountry
      ? (camo.users && camo.users.some(user => user.country === selectedCountry)) ||
        (camo.former && camo.former.some(user => user.country === selectedCountry))
      : true;
    const terrainMatch = selectedTerrain
      ? camo.terrain.includes(selectedTerrain)
      : true;
    return countryMatch && terrainMatch;
  });

  // Ordenar según el filtro combinado
  const sortedCamos = [...filteredCamos].sort((a, b) => {
    switch (order) {
      case 'popularity-desc':
        return b.users.length - a.users.length;
      case 'popularity-asc':
        return a.users.length - b.users.length;
      case 'year-desc':
        return (b.year || 0) - (a.year || 0);
      case 'year-asc':
        return (a.year || 0) - (b.year || 0);
      default:
        return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>TACTIWIKI - Camuflajes</title>
      </Helmet>
      <section style={{ marginTop: '100px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: 'var(--yel)' }}>Camuflajes</h1>
        <p style={{ color: 'var(--wht)', maxWidth: '800px', textAlign: 'center' }}>
          Los camuflajes son patrones de diseño utilizados en uniformes militares y tácticos para ayudar a los soldados a mezclarse con su entorno. Estos patrones están diseñados para romper la silueta humana y reducir la visibilidad en diferentes terrenos, como bosques, desiertos o áreas urbanas.
        </p>
        <div style={{ margin: '20px 0', display: 'flex', gap: '16px', flexWrap: 'wrap', background: 'var(--gry2)', padding: '16px 32px', borderRadius: '8px' }}>
          <div>
            <label style={{ color: 'var(--wht)', fontFamily: 'var(--texto)', marginRight: 8 }}>
              País:&nbsp;
            </label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              style={{ background: 'var(--yel)', padding: '4px 8px', borderRadius: 4, border: '0px solid var(--wht)' }}
            >
              <option value="">Todos</option>
              {allCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ color: 'var(--wht)', fontFamily: 'var(--texto)', marginRight: 8 }}>
              Terreno:&nbsp;
            </label>
            <select
              value={selectedTerrain}
              onChange={e => setSelectedTerrain(e.target.value)}
              style={{ background: 'var(--yel)', padding: '4px 8px', borderRadius: 4, border: '0px solid var(--wht)' }}
            >
              <option value="">Todos</option>
              {allTerrains.map(terrain => (
                <option key={terrain} value={terrain}>{terrain.charAt(0).toUpperCase() + terrain.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ color: 'var(--wht)', fontFamily: 'var(--texto)', marginRight: 8 }}>
              Ordenar por:&nbsp;
            </label>
            <select
              value={order}
              onChange={e => setOrder(e.target.value)}
              style={{ background: 'var(--yel)', padding: '4px 8px', borderRadius: 4, border: '0px solid var(--wht)' }}
            >
              <option value="popularity-desc">Más popular primero</option>
              <option value="popularity-asc">Menos popular primero</option>
              <option value="year-desc">Más nuevo primero</option>
              <option value="year-asc">Más antiguo primero</option>
            </select>
          </div>
        </div>
        {sortedCamos.map(camo => (
          <CamoCard
            key={camo.name}
            image={camo.image}
            name={camo.name}
            year={camo.year}
            terrain={camo.terrain}
            description={camo.description}
            developer={camo.developer}
            users={camo.users}
            former={camo.former}
          />
        ))}
      </section>
    </>
  )
};

export default Camos;