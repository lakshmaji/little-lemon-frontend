import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Booking />} path="/bookings" />
        <Route element={<BookingConfirmation />} path="/confirmation" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
