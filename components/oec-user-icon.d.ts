import type { Components, JSX } from "../types/components";

interface OecUserIcon extends Components.OecUserIcon, HTMLElement {}
export const OecUserIcon: {
  prototype: OecUserIcon;
  new (): OecUserIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
