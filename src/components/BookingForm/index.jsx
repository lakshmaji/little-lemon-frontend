import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";
import { useNavigate } from "react-router";

const BookingForm = ({ submitAPI }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
      name: "",
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Date is required")
        .min(new Date(), "Date cannot be in the past"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .required("Number of guests is required")
        .positive("Must be a positive number")
        .integer("Must be an integer"),
      occasion: Yup.string().required("Occasion is required"),
      name: Yup.string().required("Your name is required"),
    }),
    onSubmit: (values) => {
      const response = submitAPI(values);
      console.log(values);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
  });

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-title">Reserve Table</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className="form-input"
          />
          {formik.touched.date && formik.errors.date && (
            <div className="error">{formik.errors.date}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
            className="form-input"
          />
          {formik.touched.time && formik.errors.time && (
            <div className="error">{formik.errors.time}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests" className="form-label">
            Number of Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guests}
            className="form-input"
          />
          {formik.touched.guests && formik.errors.guests && (
            <div className="error">{formik.errors.guests}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion" className="form-label">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}
            className="form-select"
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && (
            <div className="error">{formik.errors.occasion}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="form-input"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <button type="submit" className="form-button">
          Book Table
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
