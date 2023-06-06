import React from 'react';
import './Showsummary.css';

const ShowSummary = ({ show, onBookTicket }) => {
  const { name, language, genres, premiered, rating, summary } = show;

  const handleBookTicket = () => {
    onBookTicket(show);
  };

  const parseSummary = () => {
    const parser = new DOMParser();
    const parsedSummary = parser.parseFromString(summary, 'text/html');
    return parsedSummary.body.textContent;
  };



  return (
    <div className="show-summary-container">
      <div className="show-summary-header">
        <h1 className="show-name">{name}</h1>
        <button className="book-ticket-button" onClick={handleBookTicket}>
          Book Ticket
        </button>
      </div>
      <div className="show-summary-details">
        <div className="show-image">
          <img src={show.image && show.image.medium} alt={name} />
        </div>
        <div className="show-info">
          <p className="show-language">Language: {language}</p>
          <p className="show-genres">Genres: {genres.join(', ')}</p>
          <p className="show-premiered">Premiered: {premiered}</p>
          <p className="show-rating">Average Rating: {rating.average}</p>
        </div>
      </div>
      <div className="show-summary-summary">
        <h2 className="summary-heading">Summary</h2>
        <p>{parseSummary(show.summary)}</p>
        {/* <p className="show-summary">{summary}</p> */}
      </div>
    </div>
  );
};

export default ShowSummary;
