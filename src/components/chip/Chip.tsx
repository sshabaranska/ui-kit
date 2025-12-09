import { clsx } from "clsx";
import {
  forwardRef,
  type ComponentPropsWithRef,
  type ReactEventHandler,
  type ReactNode,
} from "react";

import type { PropsWithClassName } from "../../common";

export const ChipSize = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type ChipSize = keyof typeof ChipSize;

export const ChipVariant = {
  navy: "navy",
  green: "green",
  red: "red",
  amber: "amber",
  gray: "gray",
} as const;
export type ChipVariant = keyof typeof ChipVariant;

export type ChipClickHandler = ReactEventHandler<HTMLSpanElement>;

export interface ChipProps
  extends PropsWithClassName<ComponentPropsWithRef<"div">> {
  children?: ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
}

export type ChipRef = HTMLDivElement;

export const Chip = forwardRef<ChipRef, ChipProps>(
  (
    {
      children,
      variant = "navy",
      size = "md",
      tabIndex,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        tabIndex={tabIndex ?? 0}
        {...props}
        className={clsx(
          "ui-kit-chip",
          `variant-${variant}`,
          `size-${size}`,
          className,
        )}
        ref={ref}
      >
        <span className="ui-kit-chip-text">{children}</span>
      </div>
    );
  },
);

Chip.displayName = "Chip";
