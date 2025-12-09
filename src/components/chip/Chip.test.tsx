import { test, expect } from "@playwright/experimental-ct-react";

import {
  testMouseEvent,
  testNameFromProps,
  type TestOptions,
  type TestProps,
} from "../../../playwright/helpers";

import { Chip, type ChipProps } from "./Chip";

// eslint-disable-next-line @typescript-eslint/no-empty-function
function nope() {}

function execute(props: TestProps<ChipProps>, options?: TestOptions) {
  const name = testNameFromProps("Chip", props, options);
  test(name, async ({ mount }) => {
    const component = await mount(
      <div className="inline-block p-5">
        <Chip data-testid="target" {...props}>
          test text
        </Chip>
      </div>,
    );

    if (options?.event) {
      const target = component.getByTestId("target");
      await testMouseEvent(target, options.event);
    }

    await expect(component).toHaveScreenshot(`${name}.png`);
  });
}

execute({});

execute({ variant: "amber" });
execute({ variant: "gray" });
execute({ variant: "green" });
execute({ variant: "navy" });
execute({ variant: "red" });

execute({ variant: "amber", onClick: nope });
execute({ variant: "gray", onClick: nope });
execute({ variant: "green", onClick: nope });
execute({ variant: "navy", onClick: nope });
execute({ variant: "red", onClick: nope });

execute({ variant: "amber", onClick: nope }, { event: "hover" });
execute({ variant: "gray", onClick: nope }, { event: "hover" });
execute({ variant: "green", onClick: nope }, { event: "hover" });
execute({ variant: "navy", onClick: nope }, { event: "hover" });
execute({ variant: "red", onClick: nope }, { event: "hover" });

execute({ size: "sm", variant: "amber" });
execute({ size: "sm", variant: "gray" });
execute({ size: "sm", variant: "green" });
execute({ size: "sm", variant: "navy" });
execute({ size: "sm", variant: "red" });

execute({ size: "md", variant: "amber" });
execute({ size: "md", variant: "gray" });
execute({ size: "md", variant: "green" });
execute({ size: "md", variant: "navy" });
execute({ size: "md", variant: "red" });

execute({ size: "lg", variant: "amber" });
execute({ size: "lg", variant: "gray" });
execute({ size: "lg", variant: "green" });
execute({ size: "lg", variant: "navy" });
execute({ size: "lg", variant: "red" });
