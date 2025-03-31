import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import BookingForm from "./index";
import { BrowserRouter as Router } from "react-router";

vi.mock("react-router", async () => {
  const rr = await vi.importActual("react-router");

  return { ...rr, useNavigate: vi.fn(() => vi.fn()) };
});

describe("BookingForm", () => {
  it("renders all form fields and labels", () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByText(/book table/i)).toBeInTheDocument();
  });

  it("displays validation errors when required fields are empty", async () => {
    render(<BookingForm />);

    const submitButton = screen.getByText(/book table/i);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/number of guests is required/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
      expect(screen.getByText(/your name is required/i)).toBeInTheDocument();
    });
  });

  it("shows validation errors for invalid input", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/guests/i), {
      target: { value: "-5" },
    });
    fireEvent.click(screen.getByText(/book table/i));

    await waitFor(() => {
      expect(
        screen.getByText(/must be a positive number/i)
      ).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    const mockSubmitAPI = vi.fn(() => true);

    render(
      <Router>
        <BookingForm submitAPI={mockSubmitAPI} />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-06-15" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "20:00" },
    });
    fireEvent.change(screen.getByLabelText(/guests/i), {
      target: { value: "7" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "birthday" },
    });
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.click(screen.getByText(/book table/i));

    await waitFor(() => {
      expect(mockSubmitAPI).toHaveBeenCalledTimes(1);
      expect(mockSubmitAPI).toHaveBeenCalledWith({
        date: "2025-06-15",
        time: "20:00",
        guests: 7,
        occasion: "birthday",
        name: "John Doe",
      });
    });
  });
});
