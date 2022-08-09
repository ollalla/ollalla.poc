import type { Components, JSX } from "../types/components";

interface OecButton extends Components.OecButton, HTMLElement {}
export const OecButton: {
  prototype: OecButton;
  new (): OecButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
