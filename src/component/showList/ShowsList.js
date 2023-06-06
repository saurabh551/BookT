import React, { useEffect, useState } from 'react';
import './ShowList.css';


const ShowsList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data.map(item => item.show));
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  return (
    <div className="shows-list-container">
      <h1 className="shows-list-title">TV Shows</h1>
      <div className="shows-grid">
        {shows.map(show => (
          <div className="show-card" key={show.id} onClick={() => onSelectShow(show)}>
            <div className="show-image">
              {show.image && <img src={show.image.medium} alt={show.name} />}
            </div>
            <div className="show-details">
              <h2 className="show-name">{show.name}</h2>
              {/* Add additional show details here */}
              <button className="show-summary-button">Show Summary</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;
