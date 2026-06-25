import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
describe("App", () => {
  it("renders the landing page", () => {
    render(<App />);

    expect(document.body).toBeTruthy();
  });
});
