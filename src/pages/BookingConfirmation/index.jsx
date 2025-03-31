import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import "./BookingConfirmation.css";
import { convertTo12HourFormat } from "../../utils";

const BookingConfirmation = () => {
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);
  return (
    <MainLayout>
      <section className="booking-confirmation">
        <Container>
          <div className="booking-confirmation__title">
            <h1>Your reservation is confirmed!</h1>
            <h2>We look forward to seeing you at Little Lemon.</h2>
          </div>
          <div className="booking-confirmation__details">
            <div>
              <span className="label">Date</span>
              <span className="value" data-testid="date">
                {booking.date}
              </span>
            </div>
            <div>
              <span className="label">Time</span>
              <span className="value" data-testid="time">
                {convertTo12HourFormat(booking.time)}
              </span>
            </div>
            <div>
              <span className="label">No of Guests</span>
              <span className="value" data-testid="guests">
                {booking.guests}
              </span>
            </div>
            <div>
              <span className="label">Occasion</span>
              <span className="value" data-testid="occasion">
                {booking.occasion}
              </span>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default BookingConfirmation;
