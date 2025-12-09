import { render, screen } from "@testing-library/react";

import { Chip, ChipSize, ChipVariant } from "./Chip";

describe("Chip", () => {
  test("render with default props", () => {
    render(<Chip data-testid="chip">Default Chip</Chip>);

    const chipElement = screen.getByTestId("chip");

    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveClass("ui-kit-chip");
    expect(chipElement).toHaveClass("variant-navy");
    expect(chipElement).toHaveClass("size-md");
  });

  test("renders correctly for all variant options", () => {
    Object.values(ChipVariant).forEach((variant) => {
      render(
        <Chip
          variant={variant}
          data-testid={`chip ${variant}`}
        >{`Chip ${variant}`}</Chip>,
      );

      const chipElement = screen.getByTestId(`chip ${variant}`);

      expect(chipElement).toBeInTheDocument();
      expect(chipElement).toHaveClass(`variant-${variant}`);
    });
  });

  test("renders correctly for all size options", () => {
    Object.values(ChipSize).forEach((size) => {
      render(
        <Chip size={size} data-testid={`chip ${size}`}>{`Chip ${size}`}</Chip>,
      );

      const chipElement = screen.getByTestId(`chip ${size}`);

      expect(chipElement).toBeInTheDocument();
      expect(chipElement).toHaveClass(`size-${size}`);
    });
  });

  test("renders children correctly", () => {
    render(<Chip>Test Content</Chip>);

    const chipElement = screen.getByText("Test Content");

    expect(chipElement).toBeInTheDocument();
  });

  test("apply custom className", () => {
    render(
      <Chip className="custom-class" data-testid="chip">
        Custom Class Chip
      </Chip>,
    );

    const chipElement = screen.getByTestId("chip");

    expect(chipElement).toHaveClass("custom-class");
  });
});
