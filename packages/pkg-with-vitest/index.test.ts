import { expect, it } from "vitest";
import { add } from "./index";

it("can add", () => {
  expect(add(1, 1)).toEqual(2);
});
