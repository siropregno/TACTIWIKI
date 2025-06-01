/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Camos.css';
import CamoCard from '@components/component-camocard/camocard';
import multicamImg from '@assets/camos/MULTICAM.png';
import m81WoodlandImg from '@assets/camos/M81-WOODLAND.png';
import mtpImg from '@assets/camos/MTP.png';
import emrImg from '@assets/camos/EMR.png';
import ucpImg from '@assets/camos/UCP.png';
import ocpImg from '@assets/camos/OCP.png';
import marpatImg from '@assets/camos/MARPAT.png';
import marpatdImg from '@assets/camos/MARPAT-DESERT.png';
import dpmImg from '@assets/camos/DPM.png';
import atacsImg from '@assets/camos/ATACS.png';
import cceImg from '@assets/camos/CCE.png';
import dcuImg from '@assets/camos/DCU-3-COLORES.png';
import dcu2Img from '@assets/camos/DCU-6-COLORES.png';
import mm14Img from '@assets/camos/MM-14.png';
import aor1Img from '@assets/camos/AOR1.png';
import aor2Img from '@assets/camos/AOR2.png';
import tigerImg from '@assets/camos/TIGER.png';
import flecktarnImg from '@assets/camos/FLECKTARN.png';
import jpFlag from '@assets/flags/jp.svg';
import psFlag from '@assets/flags/ps.svg';
import doFlag from '@assets/flags/do.svg';
import afFlag from '@assets/flags/af.svg';
import aeFlag from '@assets/flags/ae.svg';
import alFlag from '@assets/flags/al.svg';
import amFlag from '@assets/flags/am.svg';
import aoFlag from '@assets/flags/ao.svg';
import arFlag from '@assets/flags/ar.svg';
import atFlag from '@assets/flags/at.svg';
import auFlag from '@assets/flags/au.svg';
import azFlag from '@assets/flags/az.svg';
import baFlag from '@assets/flags/ba.svg';
import bdFlag from '@assets/flags/bd.svg';
import beFlag from '@assets/flags/be.svg';
import bgFlag from '@assets/flags/bg.svg';
import bhFlag from '@assets/flags/bh.svg';
import boFlag from '@assets/flags/bo.svg';
import brFlag from '@assets/flags/br.svg';
import bsFlag from '@assets/flags/bs.svg';
import btFlag from '@assets/flags/bt.svg';
import bwFlag from '@assets/flags/bw.svg';
import byFlag from '@assets/flags/by.svg';
import bzFlag from '@assets/flags/bz.svg';
import caFlag from '@assets/flags/ca.svg';
import cfFlag from '@assets/flags/cf.svg';
import cgFlag from '@assets/flags/cg.svg';
import chFlag from '@assets/flags/ch.svg';
import ciFlag from '@assets/flags/ci.svg';
import clFlag from '@assets/flags/cl.svg';
import cnFlag from '@assets/flags/cn.svg';
import coFlag from '@assets/flags/co.svg';
import crFlag from '@assets/flags/cr.svg';
import cvFlag from '@assets/flags/cv.svg';
import cyFlag from '@assets/flags/cy.svg';
import cdFlag from '@assets/flags/cd.svg';
import deFlag from '@assets/flags/de.svg';
import dkFlag from '@assets/flags/dk.svg';
import ecFlag from '@assets/flags/ec.svg';
import eeFlag from '@assets/flags/ee.svg';
import egFlag from '@assets/flags/eg.svg';
import esFlag from '@assets/flags/es.svg';
import fiFlag from '@assets/flags/fi.svg';
import fjFlag from '@assets/flags/fj.svg';
import frFlag from '@assets/flags/fr.svg';
import gbFlag from '@assets/flags/gb.svg';
import geFlag from '@assets/flags/ge.svg';
import gmFlag from '@assets/flags/gm.svg';
import grFlag from '@assets/flags/gr.svg';
import gtFlag from '@assets/flags/gt.svg';
import hrFlag from '@assets/flags/hr.svg';
import hkFlag from '@assets/flags/hk.svg';
import hnFlag from '@assets/flags/hn.svg';
import htFlag from '@assets/flags/ht.svg';
import huFlag from '@assets/flags/hu.svg';
import idFlag from '@assets/flags/id.svg';
import ieFlag from '@assets/flags/ie.svg';
import ilFlag from '@assets/flags/il.svg';
import inFlag from '@assets/flags/in.svg';
import iqFlag from '@assets/flags/iq.svg';
import irFlag from '@assets/flags/ir.svg';
import itFlag from '@assets/flags/it.svg';
import joFlag from '@assets/flags/jo.svg';
import keFlag from '@assets/flags/ke.svg';
import kgFlag from '@assets/flags/kg.svg';
import khFlag from '@assets/flags/kh.svg';
import kmFlag from '@assets/flags/km.svg';
import knFlag from '@assets/flags/kn.svg';
import kpFlag from '@assets/flags/kp.svg';
import krFlag from '@assets/flags/kr.svg';
import kwFlag from '@assets/flags/kw.svg';
import kzFlag from '@assets/flags/kz.svg';
import lbFlag from '@assets/flags/lb.svg';
import lcFlag from '@assets/flags/lc.svg';
import lkFlag from '@assets/flags/lk.svg';
import ltFlag from '@assets/flags/lt.svg';
import luFlag from '@assets/flags/lu.svg';
import lvFlag from '@assets/flags/lv.svg';
import meFlag from '@assets/flags/me.svg';
import mdFlag from '@assets/flags/md.svg';
import mkFlag from '@assets/flags/mk.svg';
import mlFlag from '@assets/flags/ml.svg';
import mnFlag from '@assets/flags/mn.svg';
import mmFlag from '@assets/flags/mm.svg';
import mtFlag from '@assets/flags/mt.svg';
import myFlag from '@assets/flags/my.svg';
import mxFlag from '@assets/flags/mx.svg';
import naFlag from '@assets/flags/na.svg';
import ngFlag from '@assets/flags/ng.svg';
import nlFlag from '@assets/flags/nl.svg';
import noFlag from '@assets/flags/no.svg';
import nzFlag from '@assets/flags/nz.svg';
import omFlag from '@assets/flags/om.svg';
import peFlag from '@assets/flags/pe.svg';
import phFlag from '@assets/flags/ph.svg';
import pkFlag from '@assets/flags/pk.svg';
import plFlag from '@assets/flags/pl.svg';
import ptFlag from '@assets/flags/pt.svg';
import pyFlag from '@assets/flags/py.svg';
import qaFlag from '@assets/flags/qa.svg';
import roFlag from '@assets/flags/ro.svg';
import rsFlag from '@assets/flags/rs.svg';
import ruFlag from '@assets/flags/ru.svg';
import saFlag from '@assets/flags/sa.svg';
import seFlag from '@assets/flags/se.svg';
import sgFlag from '@assets/flags/sg.svg';
import siFlag from '@assets/flags/si.svg';
import skFlag from '@assets/flags/sk.svg';
import soFlag from '@assets/flags/so.svg';
import svFlag from '@assets/flags/sv.svg';
import syFlag from '@assets/flags/sy.svg';
import tdFlag from '@assets/flags/td.svg';
import thFlag from '@assets/flags/th.svg';
import tjFlag from '@assets/flags/tj.svg';
import toFlag from '@assets/flags/to.svg';
import trFlag from '@assets/flags/tr.svg';
import tzFlag from '@assets/flags/tz.svg';
import uaFlag from '@assets/flags/ua.svg';
import usFlag from '@assets/flags/us.svg';
import uzFlag from '@assets/flags/uz.svg';
import vnFlag from '@assets/flags/vn.svg';
import yeFlag from '@assets/flags/ye.svg';
import zaFlag from '@assets/flags/za.svg';
import zmFlag from '@assets/flags/zm.svg';
import zwFlag from '@assets/flags/zw.svg';
import jmFlag from '@assets/flags/jm.svg';
import pgFlag from '@assets/flags/pg.svg';
import lsFlag from '@assets/flags/ls.svg';
import mwFlag from '@assets/flags/mw.svg';
import vuFlag from '@assets/flags/vu.svg';
import bnFlag from '@assets/flags/bn.svg';
import slFlag from '@assets/flags/sl.svg';
import gyFlag from '@assets/flags/gy.svg';
import djFlag from '@assets/flags/dj.svg';
import erFlag from '@assets/flags/er.svg';
import etFlag from '@assets/flags/et.svg';
import lyFlag from '@assets/flags/ly.svg';
import sdFlag from '@assets/flags/sd.svg';
import rwFlag from '@assets/flags/rw.svg';


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
      { country: 'Afganistán', force: '', flag: afFlag },
      { country: 'Albania', force: '', flag: alFlag },
      { country: 'Angola', force: '', flag: aoFlag },
      { country: 'Argentina', force: '', flag: arFlag },
      { country: 'Australia', force: '', flag: auFlag },
      { country: 'Austria', force: '', flag: atFlag },
      { country: 'Baréin', force: '', flag: bhFlag },
      { country: 'Bangladés', force: '', flag: bdFlag },
      { country: 'Bélgica', force: '', flag: beFlag },
      { country: 'Botsuana', force: '', flag: bwFlag },
      { country: 'Bulgaria', force: '', flag: bgFlag },
      { country: 'Canadá', force: '', flag: caFlag },
      { country: 'Chile', force: '', flag: clFlag },
      { country: 'Colombia', force: '', flag: coFlag },
      { country: 'Dinamarca', force: '', flag: dkFlag },
      { country: 'Estonia', force: '', flag: eeFlag },
      { country: 'Fiyi', force: '', flag: fjFlag },
      { country: 'Francia', force: '', flag: frFlag },
      { country: 'Georgia', force: '', flag: geFlag },
      { country: 'Alemania', force: '', flag: deFlag },
      { country: 'Grecia', force: '', flag: grFlag },
      { country: 'Hungría', force: '', flag: huFlag },
      { country: 'Indonesia', force: '', flag: idFlag },
      { country: 'Irak', force: '', flag: iqFlag },
      { country: 'Irlanda', force: '', flag: ieFlag },
      { country: 'Italia', force: '', flag: itFlag },
      { country: 'Jordania', force: '', flag: joFlag },
      { country: 'Kazajistán', force: '', flag: kzFlag },
      { country: 'Kenia', force: '', flag: keFlag },
      { country: 'Kuwait', force: '', flag: kwFlag },
      { country: 'Letonia', force: '', flag: lvFlag },
      { country: 'Lituania', force: '', flag: ltFlag },
      { country: 'Malasia', force: '', flag: myFlag },
      { country: 'Malí', force: '', flag: mlFlag },
      { country: 'Países Bajos', force: '', flag: nlFlag },
      { country: 'Nueva Zelanda', force: '', flag: nzFlag },
      { country: 'Nigeria', force: '', flag: ngFlag },
      { country: 'Macedonia del Norte', force: '', flag: mkFlag },
      { country: 'Noruega', force: '', flag: noFlag },
      { country: 'Omán', force: '', flag: omFlag },
      { country: 'Filipinas', force: '', flag: phFlag },
      { country: 'Polonia', force: '', flag: plFlag },
      { country: 'Portugal', force: '', flag: ptFlag },
      { country: 'Catar', force: '', flag: qaFlag },
      { country: 'Rumanía', force: '', flag: roFlag },
      { country: 'Arabia Saudita', force: '', flag: saFlag },
      { country: 'Singapur', force: '', flag: sgFlag },
      { country: 'Eslovaquia', force: '', flag: skFlag },
      { country: 'Eslovenia', force: '', flag: siFlag },
      { country: 'Somalia', force: '', flag: soFlag },
      { country: 'Sudáfrica', force: '', flag: zaFlag },
      { country: 'Corea del Sur', force: '', flag: krFlag },
      { country: 'España', force: '', flag: esFlag },
      { country: 'Suecia', force: '', flag: seFlag },
      { country: 'Tanzania', force: '', flag: tzFlag },
      { country: 'Tailandia', force: '', flag: thFlag },
      { country: 'Turquía', force: '', flag: trFlag },
      { country: 'Ucrania', force: '', flag: uaFlag },
      { country: 'Emiratos Árabes Unidos', force: '', flag: aeFlag },
      { country: 'Reino Unido', force: '', flag: gbFlag },
      { country: 'Estados Unidos', force: '', flag: usFlag },
      { country: 'Uzbekistán', force: '', flag: uzFlag },
      { country: 'Yemen', force: '', flag: yeFlag },
      { country: 'Zambia', force: '', flag: zmFlag }
    ],
    former: [
      { country: 'Afganistán', force: 'República Islámica', flag: afFlag },
      { country: 'China', force: '', flag: cnFlag }
    ]
  },
  {
    image: m81WoodlandImg,
    name: "M81 WOODLAND",
    year: 1981,
    description: "El M81 Woodland es un patrón de camuflaje desarrollado por el Ejército de los Estados Unidos, caracterizado por sus manchas verdes, marrones, negras y beige. Fue ampliamente utilizado por fuerzas militares de todo el mundo en entornos boscosos y templados.",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['bosque'],
    users: [
      { country: 'Afganistán', force: '', flag: afFlag },
      { country: 'Argentina', force: '', flag: arFlag },
      { country: 'Armenia', force: '', flag: amFlag },
      { country: 'Azerbaiyán', force: '', flag: azFlag },
      { country: 'Bangladés', force: '', flag: bdFlag },
      { country: 'Bután', force: '', flag: btFlag },
      { country: 'Bolivia', force: '', flag: boFlag },
      { country: 'Bosnia y Herzegovina', force: '', flag: baFlag },
      { country: 'Camboya', force: '', flag: khFlag },
      { country: 'Chad', force: '', flag: tdFlag },
      { country: 'Chile', force: '', flag: clFlag },
      { country: 'Colombia', force: '', flag: coFlag },
      { country: 'Congo-Brazzaville', force: '', flag: cgFlag },
      { country: 'Congo-Kinshasa', force: '', flag: cdFlag },
      { country: 'Costa de Marfil', force: '', flag: ciFlag },
      { country: 'Croacia', force: '', flag: hrFlag },
      { country: 'Chipre', force: '', flag: cyFlag },
      { country: 'Egipto', force: '', flag: egFlag },
      { country: 'El Salvador', force: '', flag: svFlag },
      { country: 'Estonia', force: '', flag: eeFlag },
      { country: 'Fiyi', force: '', flag: fjFlag },
      { country: 'Gambia', force: '', flag: gmFlag },
      { country: 'Grecia', force: '', flag: grFlag },
      { country: 'Guatemala', force: '', flag: gtFlag },
      { country: 'Haití', force: '', flag: htFlag },
      { country: 'Honduras', force: '', flag: hnFlag },
      { country: 'Hong Kong', force: '', flag: hkFlag },
      { country: 'Israel', force: '', flag: ilFlag },
      { country: 'Kirguistán', force: '', flag: kgFlag },
      { country: 'Kuwait', force: '', flag: kwFlag },
      { country: 'Lituania', force: '', flag: ltFlag },
      { country: 'Luxemburgo', force: '', flag: luFlag },
      { country: 'Malasia', force: '', flag: myFlag },
      { country: 'México', force: '', flag: mxFlag },
      { country: 'Moldavia', force: '', flag: mdFlag },
      { country: 'Montenegro', force: '', flag: meFlag },
      { country: 'Corea del Norte', force: '', flag: kpFlag },
      { country: 'Filipinas', force: '', flag: phFlag },
      { country: 'Rusia', force: '', flag: ruFlag },
      { country: 'San Cristóbal y Nieves', force: '', flag: knFlag },
      { country: 'Arabia Saudita', force: '', flag: saFlag },
      { country: 'Somalia', force: '', flag: soFlag },
      { country: 'Corea del Sur', force: '', flag: krFlag },
      { country: 'Sri Lanka', force: '', flag: lkFlag },
      { country: 'Tonga', force: '', flag: toFlag },
      { country: 'Turquía', force: '', flag: trFlag },
      { country: 'Ucrania', force: '', flag: uaFlag },
      { country: 'Estados Unidos', force: 'MARSOC', flag: usFlag },
      { country: 'Vietnam', force: '', flag: vnFlag }
    ],
    former: [
      { country: 'Afganistán', force: 'República Islámica', flag: afFlag },
      { country: 'Australia', force: '', flag: auFlag },
      { country: 'Canadá', force: '', flag: caFlag },
      { country: 'Colombia', force: '', flag: coFlag },
      { country: 'Costa Rica', force: '', flag: crFlag },
      { country: 'Alemania', force: '', flag: deFlag },
      { country: 'Georgia', force: '', flag: geFlag },
      { country: 'Irak', force: '', flag: iqFlag },
      { country: 'Letonia', force: '', flag: lvFlag },
      { country: 'Líbano', force: '', flag: lbFlag },
      { country: 'Países Bajos', force: '', flag: nlFlag },
      { country: 'Nigeria', force: '', flag: ngFlag },
      { country: 'Siria', force: 'Baazista', flag: syFlag }
    ]
  },
  {
    image: mtpImg,
    name: "MTP (PATRÓN MULTITERRENO)",
    year: 2010,
    description: "Un patrón de camuflaje moderno utilizado por las Fuerzas Armadas Británicas, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde desiertos hasta bosques. Su combinación única de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Ejército Británico & Crye Precision',
    terrain: ['bosque', 'desierto', 'montaña'],
    users: [
      { country: 'Baréin', force: '', flag: bhFlag },
      { country: 'Dinamarca', force: '', flag: dkFlag },
      { country: 'Malta', force: '', flag: mtFlag },
      { country: 'Nueva Zelanda', force: '', flag: nzFlag },
      { country: 'Tonga', force: '', flag: toFlag },
      { country: 'Reino Unido', force: '', flag: gbFlag },
      { country: 'Ucrania', force: '', flag: uaFlag },
      { country: 'Pakistán', force: '', flag: pkFlag }
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
      { country: 'Bielorrusia', force: '', flag: byFlag },
      { country: 'Belice', force: '', flag: bzFlag },
      { country: 'Rusia', force: '', flag: ruFlag },
      { country: 'Tayikistán', force: '', flag: tjFlag }
    ],
    former: [
      { country: 'Siria', force: '', flag: syFlag }
    ]
  },
  {
    image: ucpImg,
    name: "UCP (PATRÓN DE CAMUFLAJE UNIVERSAL)",
    year: 2005,
    description: "El UCP (Universal Camouflage Pattern) fue desarrollado por el Ejército de los Estados Unidos como un patrón de camuflaje digital destinado a ser efectivo en una amplia variedad de entornos, incluyendo zonas urbanas, desérticas y boscosas. Su diseño pixelado en tonos grises, verdes y beige buscaba proporcionar versatilidad, aunque en la práctica su efectividad fue limitada, lo que llevó a su reemplazo por otros patrones más especializados.",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['urbano', 'desierto'],
    users: [
      { country: 'Afganistán', force: '', flag: afFlag },
      { country: 'Argentina', force: 'GOE, Grupo Especial Uno', flag: arFlag },
      { country: 'Azerbaiyán', force: '', flag: azFlag },
      { country: 'Bolivia', force: '', flag: boFlag },
      { country: 'Bosnia y Herzegovina', force: '', flag: baFlag },
      { country: 'Chad', force: '', flag: tdFlag },
      { country: 'Chile', force: '', flag: clFlag },
      { country: 'Chipre', force: '', flag: cyFlag },
      { country: 'Hungría', force: '', flag: huFlag },
      { country: 'India', force: '', flag: inFlag },
      { country: 'Irán', force: '', flag: irFlag },
      { country: 'Kazajistán', force: '', flag: kzFlag },
      { country: 'Líbano', force: '', flag: lbFlag },
      { country: 'Malasia', force: '', flag: myFlag },
      { country: 'México', force: '', flag: mxFlag },
      { country: 'Montenegro', force: '', flag: meFlag },
      { country: 'Moldavia', force: '', flag: mdFlag },
      { country: 'Macedonia del Norte', force: '', flag: mkFlag },
      { country: 'Paraguay', force: '', flag: pyFlag },
      { country: 'Perú', force: '', flag: peFlag },
      { country: 'Arabia Saudita', force: '', flag: saFlag },
      { country: 'Serbia', force: '', flag: rsFlag },
      { country: 'Tayikistán', force: '', flag: tjFlag },
      { country: 'Ucrania', force: '', flag: uaFlag }
    ],
    former: [
      { country: 'Corea del Sur', force: 'KATUSA', flag: krFlag },
      { country: 'Estados Unidos', force: '', flag: usFlag }
    ]
  },
  {
    image: ocpImg,
    name: "OCP (PATRÓN DE CAMUFLAJE OPTIMIZADO)",
    year: 2009,
    description: "Un patrón de camuflaje moderno utilizado por las Fuerzas Armadas de los Estados Unidos, diseñado para múltiples terrenos. Se adapta bien a diversos entornos, desde desiertos hasta bosques. Su combinación única de colores ayuda a los soldados a permanecer ocultos en paisajes variados.",
    developer: 'Crye Precision & Natick Labs',
    terrain: ['bosque', 'desierto', 'montaña'],
    users: [
      { country: 'Australia', force: '', flag: auFlag },
      { country: 'Líbano', force: '', flag: lbFlag },
      { country: 'Corea del Sur', force: '', flag: krFlag },
      { country: 'Ucrania', force: '', flag: uaFlag },
      { country: 'Estados Unidos', force: '', flag: usFlag }
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
    { country: 'Argentina', force: '', flag: arFlag },
    { country: 'Bahamas', force: '', flag: bsFlag },
    { country: 'Bolivia', force: '', flag: boFlag },
    { country: 'Bosnia y Herzegovina', force: '', flag: baFlag },
    { country: 'Brasil', force: '', flag: brFlag },
    { country: 'Chad', force: '', flag: tdFlag },
    { country: 'Chile', force: '', flag: clFlag },
    { country: 'Chipre', force: '', flag: cyFlag },
    { country: 'Ecuador', force: '', flag: ecFlag },
    { country: 'Georgia', force: '', flag: geFlag },
    { country: 'Haití', force: '', flag: htFlag },
    { country: 'India', force: '', flag: inFlag },
    { country: 'Hungría', force: '', flag: huFlag },
    { country: 'Irán', force: '', flag: irFlag },
    { country: 'Líbano', force: '', flag: lbFlag },
    { country: 'Mongolia', force: '', flag: mnFlag },
    { country: 'Myanmar', force: '', flag: mmFlag },
    { country: 'Macedonia del Norte', force: '', flag: mkFlag },
    { country: 'Santa Lucía', force: '', flag: lcFlag },
    { country: 'Arabia Saudita', force: '', flag: saFlag },
    { country: 'Serbia', force: '', flag: rsFlag },
    { country: 'Ucrania', force: '', flag: uaFlag },
    { country: 'Estados Unidos', force: '', flag: usFlag }
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
      { country: 'Austria', force: 'SFOR en Bosnia, 2004', flag: atFlag },
      { country: 'Cabo Verde', force: 'Guardia Nacional', flag: cvFlag },
      { country: 'República Centroafricana', force: 'unidades militares, clon CCE', flag: cfFlag },
      { country: 'Comoras', force: 'unidades militares, clon CCE', flag: kmFlag },
      { country: 'Francia', force: '', flag: frFlag },
      { country: 'India', force: 'PC-DPM, patrón inspirado en CCE', flag: inFlag },
      { country: 'Rusia', force: 'Alpha Group', flag: ruFlag },
      { country: 'Catar', force: 'tropas en Líbano, 2006', flag: qaFlag },
      { country: 'Ucrania', force: 'Regimiento Kastuś Kalinoŭski, Maksym I.', flag: uaFlag },
      { country: 'Emiratos Árabes Unidos', force: 'Kosovo, operaciones de paz', flag: aeFlag }
    ],
    former: []
  },
  {
    image: dcuImg,
    name: "DCU 3 COLORES (DESERT CAMOUFLAGE UNIFORM)",
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
    { country: 'Afganistán', force: '', flag: afFlag},
    { country: 'Croacia', force: '', flag: hrFlag},
    { country: 'Países Bajos', force: '', flag: nlFlag},
    { country: 'Macedonia del Norte', force: '', flag: mkFlag},
    { country: 'Eslovenia', force: '', flag: siFlag},
    { country: 'Estados Unidos', force: '', flag: usFlag}
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
      { country: 'Ucrania', force: '', flag: uaFlag },
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
      { country: 'Botsuana', force: '', flag: bwFlag },
      { country: 'Bulgaria', force: '', flag: bgFlag },
      { country: 'Camboya', force: '', flag: khFlag },
      { country: 'Georgia', force: '', flag: geFlag },
      { country: 'Grecia', force: '', flag: grFlag },
      { country: 'Hong Kong', force: '', flag: hkFlag },
      { country: 'Indonesia', force: '', flag: idFlag },
      { country: 'India', force: '', flag: inFlag },
      { country: 'Irán', force: '', flag: irFlag },
      { country: 'Jamaica', force: '', flag: jmFlag },
      { country: 'Kenia', force: '', flag: keFlag },
      { country: 'Lesoto', force: '', flag: lsFlag },
      { country: 'Malaui', force: '', flag: mwFlag },
      { country: 'Corea del Norte', force: '', flag: kpFlag },
      { country: 'Omán', force: '', flag: omFlag },
      { country: 'Papúa Nueva Guinea', force: '', flag: pgFlag },
      { country: 'Filipinas', force: '', flag: phFlag },
      { country: 'Rusia', force: '', flag: ruFlag },
      { country: 'Serbia', force: '', flag: rsFlag },
      { country: 'Sri Lanka', force: '', flag: lkFlag },
      { country: 'Ucrania', force: '', flag: uaFlag },
      { country: 'Reino Unido', force: '', flag: gbFlag },
      { country: 'Vanuatu', force: '', flag: vuFlag }
    ],
    former: [
      { country: 'Argentina', force: '', flag: arFlag },
      { country: 'Australia', force: 'Fuerza aerea', flag: auFlag },
      { country: 'Baréin', force: '', flag: bhFlag },
      { country: 'Bangladés', force: '', flag: bdFlag },
      { country: 'Brunéi', force: '', flag: bnFlag },
      { country: 'Canadá', force: '', flag: caFlag },
      { country: 'China', force: '', flag: cnFlag },
      { country: 'Croacia', force: '', flag: hrFlag },
      { country: 'Hong Kong', force: '', flag: hkFlag },
      { country: 'Irak', force: '', flag: iqFlag },
      { country: 'Irlanda', force: '', flag: ieFlag },
      { country: 'Kuwait', force: '', flag: kwFlag },
      { country: 'Malasia', force: 'Peacekeepers', flag: myFlag },
      { country: 'Países Bajos', force: '', flag: nlFlag },
      { country: 'Nueva Zelanda', force: '', flag: nzFlag },
      { country: 'Pakistán', force: '', flag: pkFlag },
      { country: 'Filipinas', force: 'Guardia Costera', flag: phFlag },
      { country: 'Portugal', force: '', flag: ptFlag },
      { country: 'Rumanía', force: '', flag: roFlag },
      { country: 'Arabia Saudita', force: '', flag: saFlag },
      { country: 'Sierra Leona', force: '', flag: slFlag },
      { country: 'Sudáfrica', force: 'Batallon 32 de Unión Sudafricana', flag: zaFlag },
      { country: 'Sri Lanka', force: 'Comandos', flag: lkFlag },
      { country: 'Eslovenia', force: '', flag: siFlag },
      { country: 'Siria', force: '', flag: syFlag },
      { country: 'Tailandia', force: 'Fuerzas especiales', flag: thFlag },
      { country: 'Uzbekistán', force: 'Fuerzas especiales', flag: uzFlag },
      { country: 'Yemen', force: '', flag: yeFlag }
    ]
  },
  {
    image: dcu2Img,
    name: "DCU 6 COLORES (CAMUFLAJE DE CHISPAS, DBDU)",
    year: 1981,
    description: "Un patrón de camuflaje utilizado por las Fuerzas Armadas de los Estados Unidos, diseñado para entornos desérticos. Se caracteriza por su combinación de colores arena y marrón, lo que ayuda a los soldados a mezclarse con el paisaje árido.",
    developer: 'Ejército de los Estados Unidos',
    terrain: ['desierto'],
    users: [
      
      { country: 'Arabia Saudita', force: 'Unidades policiales', flag: saFlag },
      { country: 'Egipto', force: 'Paramilitares/Unidades policiales', flag: egFlag },
      { country: 'Irak', force: 'Milicias', flag: iqFlag },
      { country: 'Omán', force: 'Fuerzas de seguridad', flag: omFlag },
      { country: 'Yemen', force: '', flag: yeFlag },
    ],
    former: [
      { country: 'Argentina', force: '', flag: arFlag },
      { country: 'Bolivia', force: '', flag: boFlag },
      { country: 'Brasil', force: '', flag: brFlag },
      { country: 'Chad', force: '', flag: tdFlag },
      { country: 'China', force: '', flag: cnFlag },
      { country: 'Yibuti', force: '', flag: djFlag },
      { country: 'República Dominicana', force: '', flag: doFlag },
      { country: 'El Salvador', force: '', flag: svFlag },
      { country: 'Eritrea', force: '', flag: erFlag },
      { country: 'Estonia', force: '', flag: eeFlag },
      { country: 'Etiopía', force: '', flag: etFlag },
      { country: 'Palestina', force: 'Brigadas Al-Qassam, Hamas', flag: psFlag },
      { country: 'Irán', force: '', flag: irFlag },
      { country: 'Irlanda', force: 'Operaciones de paz en Somalia, 1993', flag: ieFlag },
      { country: 'Israel', force: '', flag: ilFlag },
      { country: 'Japón', force: '', flag: jpFlag },
      { country: 'Jordania', force: '', flag: joFlag },
      { country: 'Kazajistán', force: '', flag: kzFlag },
      { country: 'Kuwait', force: '', flag: kwFlag },
      { country: 'Libia', force: '', flag: lyFlag },
      { country: 'Malí', force: '', flag: mlFlag },
      { country: 'México', force: '', flag: mxFlag },
      { country: 'Níger', force: '', flag: ngFlag },
      { country: 'Pakistán', force: '', flag: pkFlag },
      { country: 'Palestina', force: '', flag: psFlag },
      { country: 'Paraguay', force: '', flag: pyFlag },
      { country: 'Perú', force: '', flag: peFlag },
      { country: 'Filipinas', force: '', flag: phFlag },
      { country: 'Ruanda', force: '', flag: rwFlag },
      { country: 'Somalia', force: 'Infantería naval y guardacostas', flag: soFlag },
      { country: 'Corea del Sur', force: '', flag: krFlag },
      { country: 'Sudán', force: '', flag: sdFlag },
      { country: 'Siria', force: '', flag: syFlag },
      { country: 'Tayikistán', force: '', flag: tjFlag },
      { country: 'Tailandia', force: '', flag: thFlag },
      { country: 'Emiratos Árabes Unidos', force: '', flag: aeFlag },
      { country: 'España', force: '', flag: esFlag },
      { country: 'Estados Unidos', force: '', flag: usFlag }
    ]
  },
  {
    image: tigerImg,
    name: "TIGER STRIPE",
    year: 1962,
    description: "El camuflaje Tiger se popularizó durante la Guerra de Vietnam. Su diseño, inspirado en la vegetación densa y selvática del sudeste asiático, presenta franjas irregulares que imitan las rayas de un tigre. Fue utilizado principalmente por fuerzas especiales estadounidenses y unidades aliadas de Vietnam del Sur, destacándose por su efectividad en entornos de jungla y su distintivo aspecto visual. Con el tiempo, el Tiger Stripe se convirtió en un ícono de los conflictos en Asia y ha influido en muchos patrones de camuflaje posteriores.",
    developer: 'Desconocido',
    terrain: ['bosque', 'selva'],
    users: [
      { country: 'Afganistán', force: 'Emirato Islámico', flag: afFlag },
      { country: 'Argentina', force: 'GEOF', flag: arFlag },
      { country: 'República Dominicana', force: 'Fuerzas Especiales', flag: doFlag },
      { country: 'Francia', force: 'Legión Extranjera en Guayana Francesa', flag: frFlag },
      { country: 'Irak', force: 'Comandos, variante desértica', flag: iqFlag },
      { country: 'Filipinas', force: 'Ejército y Marina, fuerzas especiales', flag: phFlag },
      { country: 'Rusia', force: 'MVD, OMON, Kamysh/Tigr/Ten\'', flag: ruFlag },
      { country: 'Ucrania', force: 'Helikon-Tex, FF.AA.', flag: uaFlag }
    ],
    former: [
      { country: 'Afganistán', force: 'República Islámica, NDS', flag: afFlag },
      { country: 'Australia', force: 'SASR, Guerra de Vietnam', flag: auFlag },
      { country: 'Croacia', force: 'Guardia Nacional, copias locales', flag: hrFlag }, 
      { country: 'Guyana', force: 'GDF y Guardia Costera', flag: gyFlag },
      { country: 'Camboya', force: 'República Jemer, 1970s', flag: khFlag },
      { country: 'Paraguay', force: 'unidades militares, patrón ROC', flag: pyFlag },
      { country: 'Filipinas', force: 'Special Action Force, Revolución EDSA', flag: phFlag },
      { country: 'Nueva Zelanda', force: 'NZSAS, Guerra de Vietnam', flag: nzFlag },
      { country: 'Vietnam del Sur', force: 'ARVN Rangers, CIDG, Marines', flag: vnFlag },
      { country: 'Tailandia', force: 'fuerzas especiales, Shadowtiger', flag: thFlag },
      { country: 'Ucrania', force: 'Berkut', flag: uaFlag },
      { country: 'Estados Unidos', force: 'asesores y fuerzas especiales en Vietnam', flag: usFlag }
    ]
  },
  {
    image: flecktarnImg,
    name: "FLECKTARN",
    year: 1990,
    description: "Un patrón de camuflaje utilizado por las fuerzas armadas alemanas, caracterizado por su diseño de manchas en tonos verdes y marrones. Es efectivo en entornos boscosos y urbanos.",
    developer: 'Bundeswehr',
    terrain: ['bosque', 'urbano'],
    users: [
      { country: 'Austria', force: 'EKO Cobra', flag: atFlag },
      { country: 'Bélgica', force: 'Fuerzas de seguridad', flag: beFlag },
      { country: 'China', force: '', flag: cnFlag },
      { country: 'Alemania', force: '', flag: deFlag },
      { country: 'Georgia', force: 'Tropas en KFOR', flag: geFlag },
      { country: 'Kirguistán', force: '', flag: kgFlag },
      { country: 'Ucrania', force: 'Azov, fuerzas especiales y aerotransportadas', flag: uaFlag }
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
  const [order, setOrder] = useState('popularity-desc');
  const [search, setSearch] = useState(''); // Nuevo estado para la búsqueda

  // Filtrar camuflajes por país, terreno y búsqueda (incluyendo former)
  const filteredCamos = allCamos.filter(camo => {
    const countryMatch = selectedCountry
      ? (camo.users && camo.users.some(user => user.country === selectedCountry)) ||
        (camo.former && camo.former.some(user => user.country === selectedCountry))
      : true;
    const terrainMatch = selectedTerrain
      ? camo.terrain.includes(selectedTerrain)
      : true;
    const searchLower = search.toLowerCase();
    const searchMatch = search
      ? (
          camo.name.toLowerCase().includes(searchLower) ||
          (camo.description && camo.description.toLowerCase().includes(searchLower)) ||
          (camo.users && camo.users.some(user =>
            user.country.toLowerCase().includes(searchLower) ||
            (user.force && user.force.toLowerCase().includes(searchLower))
          )) ||
          (camo.former && camo.former.some(user =>
            user.country.toLowerCase().includes(searchLower) ||
            (user.force && user.force.toLowerCase().includes(searchLower))
          ))
        )
      : true;
    return countryMatch && terrainMatch && searchMatch;
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
      <section>
        <div className="camos-section">
          <div className="camos-container">
          <h1 className="camos-title">Camuflajes</h1>
          <p className="camos-description">
            Explora los camuflajes utilizados por las fuerzas armadas de todo el mundo. Filtra por país, terreno y ordena por popularidad o año de creación.
          </p>
          {/* Barra de búsqueda */}
          <div className="camos-search-bar">
            <input
              type="text"
              placeholder="Buscar camuflaje..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="camos-search-input"
            />
          </div>
          <div className="camo-filter-bar">
            <div className="camo-filter-group">
              <label className="camo-filter-label">
                Usuario:&nbsp;
              </label>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className="camo-filter-select"
              >
                <option value="">Todos</option>
                {allCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="camo-filter-group">
              <label className="camo-filter-label">
                Terreno:&nbsp;
              </label>
              <select
                value={selectedTerrain}
                onChange={e => setSelectedTerrain(e.target.value)}
                className="camo-filter-select"
              >
                <option value="">Todos</option>
                {allTerrains.map(terrain => (
                  <option key={terrain} value={terrain}>{terrain.charAt(0).toUpperCase() + terrain.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="camo-filter-group order">
              <label className="camo-filter-label">
                Ordenar por:&nbsp;
              </label>
              <select
                value={order}
                onChange={e => setOrder(e.target.value)}
                className="camo-filter-select"
              >
                <option value="popularity-desc">Más popular primero</option>
                <option value="popularity-asc">Menos popular primero</option>
                <option value="year-desc">Más nuevo primero</option>
                <option value="year-asc">Más antiguo primero</option>
              </select>
            </div>
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
              force={camo.force}
            />
          ))}
        </div>
      </section>
    </>
  )
};

export default Camos;