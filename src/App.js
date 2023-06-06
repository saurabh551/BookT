import React, { useState } from 'react';
import ShowsList from './component/showList/ShowsList';
import ShowSummary from './component/summary/ShowSummary';
import TicketBookingForm from './component/ticketbook/TicketBookingForm';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  const handleShowSelection = show => {
    setSelectedShow(show);
    setIsBookingFormVisible(false);
  };

  const handleBookTicket = show => {
    setSelectedShow(show);
    setIsBookingFormVisible(true);
  };

// onClick={()=>{window.location.reload()}}
  return (
    <div>
      {!selectedShow && !isBookingFormVisible && <ShowsList onSelectShow={handleShowSelection} />}
      {selectedShow && !isBookingFormVisible && (
        <ShowSummary show={selectedShow} onBookTicket={handleBookTicket} />
      )}
      {selectedShow && isBookingFormVisible && <TicketBookingForm show={selectedShow} />}
    </div>
  );
};

export default App;
