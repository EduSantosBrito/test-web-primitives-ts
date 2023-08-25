import React from "react";
import { createComponent } from "@lit-labs/react";
import { PrimitiveCheckbox as PrimitiveCheckboxType } from "web-primitives/checkbox";

export const PrimitiveCheckbox = createComponent({
  tagName: "primitive-checkbox",
  elementClass: PrimitiveCheckboxType,
  react: React,
});
