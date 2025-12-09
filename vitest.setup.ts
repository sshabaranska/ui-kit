/// <reference types="vitest/globals" />

import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Cleanup after each test to avoid test pollution
afterEach(() => {
  cleanup();
});