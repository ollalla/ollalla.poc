import type { Components, JSX } from "../types/components";

interface OecOverlayArrow extends Components.OecOverlayArrow, HTMLElement {}
export const OecOverlayArrow: {
  prototype: OecOverlayArrow;
  new (): OecOverlayArrow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
