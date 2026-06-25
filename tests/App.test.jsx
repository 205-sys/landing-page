import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "../src/App.jsx";

describe("App", () => {
  it("renders landing page title", () => {
    render(<App />);

    expect(screen.getByText(/Landing Page/i)).toBeInTheDocument();
  });
});
