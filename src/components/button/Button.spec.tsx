import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies ui-kit-button class", () => {
    render(<Button label="Test" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("ui-kit-button");
  });
});