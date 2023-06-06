import React, { useState } from 'react';
import './TicketBookingForm.css';



const TicketBookingForm = ({ show }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numSeats, setNumSeats] = useState(1);
  const [isTicketBooked, setIsTicketBooked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Number of Seats:', numSeats);

       // Store data in local storage
      const formData = {
        name,
        email,
        phoneNumber,
        numSeats
      };
      localStorage.setItem('formData', JSON.stringify(formData));
      setIsTicketBooked(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }
    if (numSeats < 1) {
      errors.numSeats = 'Number of seats should be at least 1';
    }
    return errors;
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = phoneNumber => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="container">
      <h1>Book Ticket: {show.name}</h1>
      {isTicketBooked ? (
        <p>Your ticket is booked!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            {errors.name && <span>{errors.name}</span>}
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            {errors.email && <span>{errors.email}</span>}
          </label>
          <br />
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </label>
          <br />
          <label>
            Number of Seats:
            <input type="number" value={numSeats} onChange={e => setNumSeats(parseInt(e.target.value))} />
            {errors.numSeats && <span>{errors.numSeats}</span>}
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
  

};

export default TicketBookingForm;


