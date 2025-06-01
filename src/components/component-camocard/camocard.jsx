import React, { useState } from 'react';
import './camocard.css';

// Puedes personalizar los nombres de los terrenos aquí si lo deseas
const terrainLabels = {
  bosque: 'Bosque',
  desierto: 'Desierto',
  urbano: 'Urbano',
  montaña: 'Montaña',
  nieve: 'Nieve',
  rural: 'Rural',
  jungla: 'Jungla'
};

const CamoCard = ({ image, name, description, terrain, year, developer, users, former }) => {
  const [showFlags, setShowFlags] = useState(false);

  return (
    <div className="camo-card">
      <img src={image} alt={name} className='camo-image'/>
      <div className="camo-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Desarrollador: {developer} - {year}</p>
        <p>
          Terrenos:&nbsp;
          {Array.isArray(terrain) && terrain.length > 0
            ? terrain.map((t, i) => (
                <span key={t}>
                  {terrainLabels[t] || t.charAt(0).toUpperCase() + t.slice(1)}
                  {i < terrain.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No especificado'}
        </p>
        <div className="button-container">
          <button
            type="button"
            className="toggle-flags-btn"
            onClick={() => setShowFlags(v => !v)}
          >
            Usuarios {showFlags ? '▲' : '▼'}
          </button>
          {showFlags && (
            <div className='user-flag-div'>
              <p>Usuarios actuales:</p>
              {users.map(user => (
                <span
                  key={user.country}
                  className="flag-hover-container"
                >
                  <img
                    src={user.flag}
                    alt={user.country}
                    className='flag'
                  />
                  <span className="flag-tooltip">{user.country}{user.force ? ` - ${user.force}` : ''}</span>
                </span>
              ))}
              {former && former.length > 0 && (
                <>
                  <p>Usuarios anteriores:</p>
                  {former.map(former => (
                    <span key={former.country} className="flag-hover-container">
                      <img src={former.flag} alt={former.country} className='flag'/>
                      <span className="flag-tooltip">{former.country}{former.force ? ` - ${former.force}` : ''}</span>
                    </span>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CamoCard;