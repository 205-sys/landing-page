import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders the landing page", () => {
    render(<App />);

    expect(document.body).toBeTruthy();
  });
});
