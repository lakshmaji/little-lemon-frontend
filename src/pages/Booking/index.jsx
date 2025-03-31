import BookingForm from "../../components/BookingForm";
import MainLayout from "../../components/layout/MainLayout";
import "./Booking.css";
import { submitAPI } from "../../utils";

const Booking = () => {
  return (
    <MainLayout>
      <section className="booking-container">
        <BookingForm submitAPI={submitAPI} />
      </section>
    </MainLayout>
  );
};

export default Booking;
