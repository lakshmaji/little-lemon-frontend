import BookingForm from "../../components/BookingForm";
import MainLayout from "../../components/layout/MainLayout";
import "./Booking.css";

const Booking = () => {
  return (
    <MainLayout>
      <section className="booking-container">
        <BookingForm />
      </section>
    </MainLayout>
  );
};

export default Booking;
