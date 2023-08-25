import React from "react";
import { createComponent } from "@lit-labs/react";
import {
  PrimitiveAccordionRoot,
  PrimitiveAccordionItem,
} from "web-primitives/accordion";

const Root = createComponent({
  tagName: "primitive-accordion",
  elementClass: PrimitiveAccordionRoot,
  react: React,
});

const Item = createComponent({
  tagName: "primitive-accordion-item",
  elementClass: PrimitiveAccordionItem,
  react: React,
});

export { Root, Item };
