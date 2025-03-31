import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { convertTo12HourFormat } from "../../utils";
import BookingConfirmation from "./index";
import { BrowserRouter as Router } from "react-router";

vi.mock("../../utils", () => ({
  convertTo12HourFormat: vi.fn((time) => (time ? `${time} PM` : time)),
}));

describe("BookingConfirmation", () => {
  beforeEach(() => {
    Storage.prototype.getItem = vi.fn(() =>
      JSON.stringify({
        date: "2025-06-15",
        time: "20:00",
        guests: 4,
        occasion: "Birthday",
      })
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders booking details from localStorage", async () => {
    render(
      <Router>
        <BookingConfirmation />
      </Router>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Your reservation is confirmed!/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/We look forward to seeing you at Little Lemon/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Date/i)).toBeInTheDocument();
      expect(screen.getByText(/Time/i)).toBeInTheDocument();
      expect(screen.getByText(/No of Guests/i)).toBeInTheDocument();
      expect(screen.getByText(/Occasion/i)).toBeInTheDocument();

      expect(screen.getByText("2025-06-15")).toBeInTheDocument();
      expect(screen.getByText("20:00 PM")).toBeInTheDocument();
      expect(screen.getByText("4")).toBeInTheDocument();
      expect(screen.getByText("Birthday")).toBeInTheDocument();
    });
  });

  it("calls convertTo12HourFormat with correct time", async () => {
    render(
      <Router>
        <BookingConfirmation />
      </Router>
    );

    await waitFor(() => {
      expect(convertTo12HourFormat).toHaveBeenCalledWith("20:00");
    });
  });

  it("handles the case when localStorage is empty", () => {
    Storage.prototype.getItem = vi.fn(() => null);

    render(
      <Router>
        <BookingConfirmation />
      </Router>
    );

    expect(screen.getByTestId("date")).toBeEmptyDOMElement();
    expect(screen.getByTestId("time")).toBeEmptyDOMElement();
    expect(screen.getByTestId("guests")).toBeEmptyDOMElement();
    expect(screen.getByTestId("occasion")).toBeEmptyDOMElement();
  });
});
