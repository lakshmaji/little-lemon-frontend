import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  return (
    <MainLayout>
      <section>
        <Container>
          <div className="booking-confirmation__title">
            <h1>Your reservation is confirmed!</h1>
            <h2>Little Lemon Restaurant</h2>
          </div>
          <div className="booking-confirmation__details">
            <div>
              <span className="label">DATE</span>
              <span className="value">2025-03-20</span>
            </div>
            <div>
              <span className="label">TIME</span>
              <span className="value">21:00</span>
            </div>
            <div>
              <span className="label">No of Guests</span>
              <span className="value">2</span>
            </div>
            <div>
              <span className="label">OCCASION</span>
              <span className="value">Birthday</span>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default BookingConfirmation;
