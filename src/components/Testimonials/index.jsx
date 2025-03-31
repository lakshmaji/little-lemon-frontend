import React from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The food at Little Lemon is absolutely amazing! I can't wait to come back.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Great ambiance and even better food. Highly recommend the lemon chicken!",
    rating: 4,
  },
  {
    id: 3,
    name: "Alex Johnson",
    review:
      "A fantastic dining experience with friendly staff. Loved the dessert options!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1 className="testimonial-title">What Our Guests Say</h1>
      <div className="testimonial-list">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <div className="rating">{"⭐".repeat(testimonial.rating)} </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
