import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "./preview";
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";

setProjectAnnotations([previewAnnotations, a11yAddonAnnotations]);