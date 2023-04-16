import React, { useState } from 'react';
import houseData from './houseData';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="App">
      {houseData.map((house) => (
        <div key={house.id} className={`house-container ${expanded === house.id ? 'expanded' : ''}`}>
          <h2>{house.title}</h2>
          <div className="main-image-container">
            <img className="main-image" src={house.mainImage} alt={house.title} />
          </div>
          <p className="location">{house.location}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${house.financingState}%` }}></div>
            <div className="progress-dot" style={{ left: `${house.financingState}%` }}></div>
          </div>
          <div className="stats-container">
            <div className="stat">
              <p className="stat-title">Volumen</p>
              <p className="stat-value">{house.volume}</p>
            </div>
            <div className="stat">
              <p className="stat-title">Zinsen P.A.</p>
              <p className="stat-value">{house.possibleRate}</p>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat">
              <p className="stat-title">Kurs</p>
              <p className="stat-value">{house.currentCurse}</p>
            </div>
            <div className="stat">
              <p className="stat-title">Laufzeitende</p>
              <p className="stat-value">{house.projectEndDate}</p>
            </div>
          </div>
          <p>{house.description}</p>
          {expanded === house.id && (
            <>
              <p>{house.moreInfo}</p>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <input type="submit" value="Submit" />
              </form>
            </>
          )}
          <button onClick={() => setExpanded(expanded === house.id ? null : house.id)}>
            {expanded === house.id ? 'Weniger Informationen' : 'Mehr Informationen'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
