/* eslint-disable no-unused-vars */

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
import marpatdImg from '../assets/camos/MARPAT-DESERT.png';
import dpmImg from '../assets/camos/DPM.png';
import atacsImg from '../assets/camos/ATACS.png';
import cceImg from '../assets/camos/CCE.png';
import dcuImg from '../assets/camos/DCU-3-COLORES.png';
import dcu2Img from '../assets/camos/DCU-6-COLORES.png';
import mm14Img from '../assets/camos/MM-14.png';
import aor1Img from '../assets/camos/AOR1.png';
import aor2Img from '../assets/camos/AOR2.png';
import afFlag from '../assets/flags/af.svg';
import aeFlag from '../assets/flags/ae.svg';
import alFlag from '../assets/flags/al.svg';
import amFlag from '../assets/flags/am.svg';
import aoFlag from '../assets/flags/ao.svg';
import arFlag from '../assets/flags/ar.svg';
import atFlag from '../assets/flags/at.svg';
import auFlag from '../assets/flags/au.svg';
import azFlag from '../assets/flags/az.svg';
import baFlag from '../assets/flags/ba.svg';
import bdFlag from '../assets/flags/bd.svg';
import beFlag from '../assets/flags/be.svg';
import bgFlag from '../assets/flags/bg.svg';
import bhFlag from '../assets/flags/bh.svg';
import boFlag from '../assets/flags/bo.svg';
import brFlag from '../assets/flags/br.svg';
import bsFlag from '../assets/flags/bs.svg';
import btFlag from '../assets/flags/bt.svg';
import bwFlag from '../assets/flags/bw.svg';
import byFlag from '../assets/flags/by.svg';
import bzFlag from '../assets/flags/bz.svg';
import caFlag from '../assets/flags/ca.svg';
import cfFlag from '../assets/flags/cf.svg';
import cgFlag from '../assets/flags/cg.svg';
import chFlag from '../assets/flags/ch.svg';
import ciFlag from '../assets/flags/ci.svg';
import clFlag from '../assets/flags/cl.svg';
import cnFlag from '../assets/flags/cn.svg';
import coFlag from '../assets/flags/co.svg';
import crFlag from '../assets/flags/cr.svg';
import cvFlag from '../assets/flags/cv.svg';
import cyFlag from '../assets/flags/cy.svg';
import cdFlag from '../assets/flags/cd.svg';
import deFlag from '../assets/flags/de.svg';
import dkFlag from '../assets/flags/dk.svg';
import ecFlag from '../assets/flags/ec.svg';
import eeFlag from '../assets/flags/ee.svg';
import egFlag from '../assets/flags/eg.svg';
import esFlag from '../assets/flags/es.svg';
import fiFlag from '../assets/flags/fi.svg';
import fjFlag from '../assets/flags/fj.svg';
import frFlag from '../assets/flags/fr.svg';
import gbFlag from '../assets/flags/gb.svg';
import geFlag from '../assets/flags/ge.svg';
import gmFlag from '../assets/flags/gm.svg';
import grFlag from '../assets/flags/gr.svg';
import gtFlag from '../assets/flags/gt.svg';
import hrFlag from '../assets/flags/hr.svg';
import hkFlag from '../assets/flags/hk.svg';
import hnFlag from '../assets/flags/hn.svg';
import htFlag from '../assets/flags/ht.svg';
import huFlag from '../assets/flags/hu.svg';
import idFlag from '../assets/flags/id.svg';
import ieFlag from '../assets/flags/ie.svg';
import ilFlag from '../assets/flags/il.svg';
import inFlag from '../assets/flags/in.svg';
import iqFlag from '../assets/flags/iq.svg';
import irFlag from '../assets/flags/ir.svg';
import itFlag from '../assets/flags/it.svg';
import joFlag from '../assets/flags/jo.svg';
import keFlag from '../assets/flags/ke.svg';
import kgFlag from '../assets/flags/kg.svg';
import khFlag from '../assets/flags/kh.svg';
import kmFlag from '../assets/flags/km.svg';
import knFlag from '../assets/flags/kn.svg';
import kpFlag from '../assets/flags/kp.svg';
import krFlag from '../assets/flags/kr.svg';
import kwFlag from '../assets/flags/kw.svg';
import kzFlag from '../assets/flags/kz.svg';
import lbFlag from '../assets/flags/lb.svg';
import lcFlag from '../assets/flags/lc.svg';
import lkFlag from '../assets/flags/lk.svg';
import ltFlag from '../assets/flags/lt.svg';
import luFlag from '../assets/flags/lu.svg';
import lvFlag from '../assets/flags/lv.svg';
import meFlag from '../assets/flags/me.svg';
import mdFlag from '../assets/flags/md.svg';
import mkFlag from '../assets/flags/mk.svg';
import mlFlag from '../assets/flags/ml.svg';
import mnFlag from '../assets/flags/mn.svg';
import mmFlag from '../assets/flags/mm.svg';
import mtFlag from '../assets/flags/mt.svg';
import myFlag from '../assets/flags/my.svg';
import mxFlag from '../assets/flags/mx.svg';
import naFlag from '../assets/flags/na.svg';
import ngFlag from '../assets/flags/ng.svg';
import nlFlag from '../assets/flags/nl.svg';
import noFlag from '../assets/flags/no.svg';
import nzFlag from '../assets/flags/nz.svg';
import omFlag from '../assets/flags/om.svg';
import peFlag from '../assets/flags/pe.svg';
import phFlag from '../assets/flags/ph.svg';
import pkFlag from '../assets/flags/pk.svg';
import plFlag from '../assets/flags/pl.svg';
import ptFlag from '../assets/flags/pt.svg';
import pyFlag from '../assets/flags/py.svg';
import qaFlag from '../assets/flags/qa.svg';
import roFlag from '../assets/flags/ro.svg';
import rsFlag from '../assets/flags/rs.svg';
import ruFlag from '../assets/flags/ru.svg';
import saFlag from '../assets/flags/sa.svg';
import seFlag from '../assets/flags/se.svg';
import sgFlag from '../assets/flags/sg.svg';
import siFlag from '../assets/flags/si.svg';
import skFlag from '../assets/flags/sk.svg';
import soFlag from '../assets/flags/so.svg';
import svFlag from '../assets/flags/sv.svg';
import syFlag from '../assets/flags/sy.svg';
import tdFlag from '../assets/flags/td.svg';
import thFlag from '../assets/flags/th.svg';
import tjFlag from '../assets/flags/tj.svg';
import toFlag from '../assets/flags/to.svg';
import trFlag from '../assets/flags/tr.svg';
import tzFlag from '../assets/flags/tz.svg';
import uaFlag from '../assets/flags/ua.svg';
import usFlag from '../assets/flags/us.svg';
import uzFlag from '../assets/flags/uz.svg';
import vnFlag from '../assets/flags/vn.svg';
import yeFlag from '../assets/flags/ye.svg';
import zaFlag from '../assets/flags/za.svg';
import zmFlag from '../assets/flags/zm.svg';
import zwFlag from '../assets/flags/zw.svg';
import jmFlag from '../assets/flags/jm.svg';
import pgFlag from '../assets/flags/pg.svg';
import lsFlag from '../assets/flags/ls.svg';
import mwFlag from '../assets/flags/mw.svg';
import vuFlag from '../assets/flags/vu.svg';
import bnFlag from '../assets/flags/bn.svg';
import slFlag from '../assets/flags/sl.svg';


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
      { country: 'Afganistán', flag: afFlag },
      { country: 'Albania', flag: alFlag },
      { country: 'Angola', flag: aoFlag },
      { country: 'Argentina', flag: arFlag },
      { country: 'Australia', flag: auFlag },
      { country: 'Austria', flag: atFlag },
      { country: 'Baréin', flag: bhFlag },
      { country: 'Bangladés', flag: bdFlag },
      { country: 'Bélgica', flag: beFlag },
      { country: 'Botsuana', flag: bwFlag },
      { country: 'Bulgaria', flag: bgFlag },
      { country: 'Canadá', flag: caFlag },
      { country: 'Chile', flag: clFlag },
      { country: 'Colombia', flag: coFlag },
      { country: 'Dinamarca', flag: dkFlag },
      { country: 'Estonia', flag: eeFlag },
      { country: 'Fiyi', flag: fjFlag },
      { country: 'Francia', flag: frFlag },
      { country: 'Georgia', flag: geFlag },
      { country: 'Alemania', flag: deFlag },
      { country: 'Grecia', flag: grFlag },
      { country: 'Hungría', flag: huFlag },
      { country: 'Indonesia', flag: idFlag },
      { country: 'Irak', flag: iqFlag },
      { country: 'Irlanda', flag: ieFlag },
      { country: 'Italia', flag: itFlag },
      { country: 'Jordania', flag: joFlag },
      { country: 'Kazajistán', flag: kzFlag },
      { country: 'Kenia', flag: keFlag },
      { country: 'Kuwait', flag: kwFlag },
      { country: 'Letonia', flag: lvFlag },
      { country: 'Lituania', flag: ltFlag },
      { country: 'Malasia', flag: myFlag },
      { country: 'Malí', flag: mlFlag },
      { country: 'Países Bajos', flag: nlFlag },
      { country: 'Nueva Zelanda', flag: nzFlag },
      { country: 'Nigeria', flag: ngFlag },
      { country: 'Macedonia del Norte', flag: mkFlag },
      { country: 'Noruega', flag: noFlag },
      { country: 'Omán', flag: omFlag },
      { country: 'Filipinas', flag: phFlag },
      { country: 'Polonia', flag: plFlag },
      { country: 'Portugal', flag: ptFlag },
      { country: 'Catar', flag: qaFlag },
      { country: 'Rumanía', flag: roFlag },
      { country: 'Arabia Saudita', flag: saFlag },
      { country: 'Singapur', flag: sgFlag },
      { country: 'Eslovaquia', flag: skFlag },
      { country: 'Eslovenia', flag: siFlag },
      { country: 'Somalia', flag: soFlag },
      { country: 'Sudáfrica', flag: zaFlag },
      { country: 'Corea del Sur', flag: krFlag },
      { country: 'España', flag: esFlag },
      { country: 'Suecia', flag: seFlag },
      { country: 'Tanzania', flag: tzFlag },
      { country: 'Tailandia', flag: thFlag },
      { country: 'Turquía', flag: trFlag },
      { country: 'Ucrania', flag: uaFlag },
      { country: 'Emiratos Árabes Unidos', flag: aeFlag },
      { country: 'Reino Unido', flag: gbFlag },
      { country: 'Estados Unidos', flag: usFlag },
      { country: 'Uzbekistán', flag: uzFlag },
      { country: 'Yemen', flag: yeFlag },
      { country: 'Zambia', flag: zmFlag }
    ],
    former: [
      { country: 'República Islámica de Afganistán', flag: afFlag },
      { country: 'China', flag: cnFlag }
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
      { country: 'Afganistán', flag: afFlag },
      { country: 'Argentina', flag: arFlag },
      { country: 'Armenia', flag: amFlag },
      { country: 'Azerbaiyán', flag: azFlag },
      { country: 'Bangladés', flag: bdFlag },
      { country: 'Bután', flag: btFlag },
      { country: 'Bolivia', flag: boFlag },
      { country: 'Bosnia y Herzegovina', flag: baFlag },
      { country: 'Camboya', flag: khFlag },
      { country: 'Chad', flag: tdFlag },
      { country: 'Chile', flag: clFlag },
      { country: 'Colombia', flag: coFlag },
      { country: 'Congo-Brazzaville', flag: cgFlag },
      { country: 'Congo-Kinshasa', flag: cdFlag },
      { country: 'Costa de Marfil', flag: ciFlag },
      { country: 'Croacia', flag: hrFlag },
      { country: 'Chipre', flag: cyFlag },
      { country: 'Egipto', flag: egFlag },
      { country: 'El Salvador', flag: svFlag },
      { country: 'Estonia', flag: eeFlag },
      { country: 'Fiyi', flag: fjFlag },
      { country: 'Gambia', flag: gmFlag },
      { country: 'Grecia', flag: grFlag },
      { country: 'Guatemala', flag: gtFlag },
      { country: 'Haití', flag: htFlag },
      { country: 'Honduras', flag: hnFlag },
      { country: 'Hong Kong', flag: hkFlag },
      { country: 'Israel', flag: ilFlag },
      { country: 'Kirguistán', flag: kgFlag },
      { country: 'Kuwait', flag: kwFlag },
      { country: 'Lituania', flag: ltFlag },
      { country: 'Luxemburgo', flag: luFlag },
      { country: 'Malasia', flag: myFlag },
      { country: 'México', flag: mxFlag },
      { country: 'Moldavia', flag: mdFlag },
      { country: 'Montenegro', flag: meFlag },
      { country: 'Corea del Norte', flag: kpFlag },
      { country: 'Filipinas', flag: phFlag },
      { country: 'Rusia', flag: ruFlag },
      { country: 'San Cristóbal y Nieves', flag: knFlag },
      { country: 'Arabia Saudita', flag: saFlag },
      { country: 'Somalia', flag: soFlag },
      { country: 'Corea del Sur', flag: krFlag },
      { country: 'Sri Lanka', flag: lkFlag },
      { country: 'Tonga', flag: toFlag },
      { country: 'Turquía', flag: trFlag },
      { country: 'Ucrania', flag: uaFlag },
      { country: 'Estados Unidos (MARSOC)', flag: usFlag },
      { country: 'Vietnam', flag: vnFlag }
    ],
    former: [
      { country: 'República Islámica de Afganistán', flag: afFlag },
      { country: 'Australia', flag: auFlag },
      { country: 'Canadá', flag: caFlag },
      { country: 'Colombia', flag: coFlag },
      { country: 'Costa Rica', flag: crFlag },
      { country: 'Alemania', flag: deFlag },
      { country: 'Georgia', flag: geFlag },
      { country: 'Irak', flag: iqFlag },
      { country: 'Letonia', flag: lvFlag },
      { country: 'Líbano', flag: lbFlag },
      { country: 'Países Bajos', flag: nlFlag },
      { country: 'Nigeria', flag: ngFlag },
      { country: 'Siria (Baazista)', flag: syFlag }
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
      { country: 'Baréin', flag: bhFlag },
      { country: 'Dinamarca', flag: dkFlag },
      { country: 'Malta', flag: mtFlag },
      { country: 'Nueva Zelanda', flag: nzFlag },
      { country: 'Tonga', flag: toFlag },
      { country: 'Reino Unido', flag: gbFlag },
      { country: 'Ucrania', flag: uaFlag },
      { country: 'Pakistán', flag: pkFlag }
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
      { country: 'Bielorrusia', flag: byFlag },
      { country: 'Belice', flag: bzFlag },
      { country: 'Rusia', flag: ruFlag },
      { country: 'Tayikistán', flag: tjFlag }
    ],
    former: [
      { country: 'Siria', flag: syFlag }
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
      { country: 'Afganistán', flag: afFlag },
      { country: 'Argentina', flag: arFlag },
      { country: 'Azerbaiyán', flag: azFlag },
      { country: 'Bolivia', flag: boFlag },
      { country: 'Bosnia y Herzegovina', flag: baFlag },
      { country: 'Chad', flag: tdFlag },
      { country: 'Chile', flag: clFlag },
      { country: 'Chipre', flag: cyFlag },
      { country: 'Hungría', flag: huFlag },
      { country: 'India', flag: inFlag },
      { country: 'Irán', flag: irFlag },
      { country: 'Kazajistán', flag: kzFlag },
      { country: 'Líbano', flag: lbFlag },
      { country: 'Malasia', flag: myFlag },
      { country: 'México', flag: mxFlag },
      { country: 'Montenegro', flag: meFlag },
      { country: 'Moldavia', flag: mdFlag },
      { country: 'Macedonia del Norte', flag: mkFlag },
      { country: 'Paraguay', flag: pyFlag },
      { country: 'Perú', flag: peFlag },
      { country: 'Arabia Saudita', flag: saFlag },
      { country: 'Serbia', flag: rsFlag },
      { country: 'Tayikistán', flag: tjFlag },
      { country: 'Ucrania', flag: uaFlag }
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
      { country: 'Australia', flag: auFlag },
      { country: 'Líbano', flag: lbFlag },
      { country: 'Corea del Sur', flag: krFlag },
      { country: 'Ucrania', flag: uaFlag },
      { country: 'Estados Unidos', flag: usFlag }
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
    { country: 'Argentina', flag: arFlag },
    { country: 'Bahamas', flag: bsFlag },
    { country: 'Bolivia', flag: boFlag },
    { country: 'Bosnia y Herzegovina', flag: baFlag },
    { country: 'Brasil', flag: brFlag },
    { country: 'Chad', flag: tdFlag },
    { country: 'Chile', flag: clFlag },
    { country: 'Chipre', flag: cyFlag },
    { country: 'Ecuador', flag: ecFlag },
    { country: 'Georgia', flag: geFlag },
    { country: 'Haití', flag: htFlag },
    { country: 'India', flag: inFlag },
    { country: 'Hungría', flag: huFlag },
    { country: 'Irán', flag: irFlag },
    { country: 'Líbano', flag: lbFlag },
    { country: 'Mongolia', flag: mnFlag },
    { country: 'Myanmar', flag: mmFlag },
    { country: 'Macedonia del Norte', flag: mkFlag },
    { country: 'Santa Lucía', flag: lcFlag },
    { country: 'Arabia Saudita', flag: saFlag },
    { country: 'Serbia', flag: rsFlag },
    { country: 'Ucrania', flag: uaFlag },
    { country: 'Estados Unidos', flag: usFlag }
  ],
    former: []
  },
  {
    image: cceImg,
    name: "CCE (CAMOUFLAGE CENTRAL EUROPEO)",
    year: 1991,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas Francesas, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde bosques hasta áreas urbanas. Su combinación de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Fuerzas Armadas Francesas',
    terrain: ['urbano', 'bosque', 'montaña'],
    users: [
    { country: 'Austria', flag: atFlag },
    { country: 'Cabo Verde', flag: cvFlag },
    { country: 'República Centroafricana', flag: cfFlag },
    { country: 'Comoras', flag: kmFlag },
    { country: 'Francia', flag: frFlag },
    { country: 'India', flag: inFlag },
    { country: 'Rusia', flag: ruFlag },
    { country: 'Catar', flag: qaFlag },
    { country: 'Ucrania', flag: uaFlag },
    { country: 'Emiratos Árabes Unidos', flag: aeFlag }
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
    { country: 'Argentina', flag: arFlag },
    { country: 'Azerbaiyán', flag: azFlag },
    { country: 'Bosnia y Herzegovina', flag: baFlag },
    { country: 'Georgia', flag: geFlag },
    { country: 'Israel', flag: ilFlag },
    { country: 'Arabia Saudita', flag: saFlag }
    ],
    former: [
    { country: 'Afganistán', flag: afFlag},
    { country: 'Croacia', flag: hrFlag},
    { country: 'Países Bajos', flag: nlFlag},
    { country: 'Macedonia del Norte', flag: mkFlag},
    { country: 'Eslovenia', flag: siFlag},
    { country: 'Estados Unidos', flag: usFlag}
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
      { country: 'Ucrania', flag: uaFlag },
    ],
    former: []
  },
  {
    image: dpmImg,
    name: "DPM (DISRUPTIVE PATTERN MATERIAL)",
    year: 1960,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas del Reino Unido, diseñado para entornos boscosos y rurales. Se caracteriza por su combinación de colores que ayudan a los soldados a mezclarse con el paisaje británico.",
    developer: 'Ejército Británico',
    terrain: ['bosque', 'rural'],
    users: [
      { country: 'Botsuana', flag: bwFlag },
      { country: 'Bulgaria', flag: bgFlag },
      { country: 'Camboya', flag: khFlag },
      { country: 'Georgia', flag: geFlag },
      { country: 'Grecia', flag: grFlag },
      { country: 'Hong Kong', flag: hkFlag },
      { country: 'Indonesia', flag: idFlag },
      { country: 'India', flag: inFlag },
      { country: 'Irán', flag: irFlag },
      { country: 'Jamaica', flag: jmFlag },
      { country: 'Kenia', flag: keFlag },
      { country: 'Lesoto', flag: lsFlag },
      { country: 'Malaui', flag: mwFlag },
      { country: 'Corea del Norte', flag: kpFlag },
      { country: 'Omán', flag: omFlag },
      { country: 'Papúa Nueva Guinea', flag: pgFlag },
      { country: 'Filipinas', flag: phFlag },
      { country: 'Rusia', flag: ruFlag },
      { country: 'Serbia', flag: rsFlag },
      { country: 'Sri Lanka', flag: lkFlag },
      { country: 'Ucrania', flag: uaFlag },
      { country: 'Reino Unido', flag: gbFlag },
      { country: 'Vanuatu', flag: vuFlag }
    ],
    former: [
      { country: 'Argentina', flag: arFlag },
      { country: 'Australia', flag: auFlag },
      { country: 'Baréin', flag: bhFlag },
      { country: 'Bangladés', flag: bdFlag },
      { country: 'Brunéi', flag: bnFlag },
      { country: 'Canadá', flag: caFlag },
      { country: 'China', flag: cnFlag },
      { country: 'Croacia', flag: hrFlag },
      { country: 'Irak', flag: iqFlag },
      { country: 'Irlanda', flag: ieFlag },
      { country: 'Kuwait', flag: kwFlag },
      { country: 'Malasia', flag: myFlag },
      { country: 'Países Bajos', flag: nlFlag },
      { country: 'Nueva Zelanda', flag: nzFlag },
      { country: 'Pakistán', flag: pkFlag },
      { country: 'Filipinas (Guardia Costera)', flag: phFlag },
      { country: 'Portugal', flag: ptFlag },
      { country: 'Rumanía', flag: roFlag },
      { country: 'Arabia Saudita', flag: saFlag },
      { country: 'Sierra Leona', flag: slFlag },
      { country: 'Sudáfrica', flag: zaFlag },
      { country: 'Eslovenia', flag: siFlag },
      { country: 'Siria', flag: syFlag },
      { country: 'Tailandia', flag: thFlag },
      { country: 'Hong Kong', flag: hkFlag },
      { country: 'Uzbekistán', flag: uzFlag },
      { country: 'Yemen', flag: yeFlag }
    ]
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
              Usuario:&nbsp;
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