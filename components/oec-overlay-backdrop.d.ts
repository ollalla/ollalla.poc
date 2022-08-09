import type { Components, JSX } from "../types/components";

interface OecOverlayBackdrop extends Components.OecOverlayBackdrop, HTMLElement {}
export const OecOverlayBackdrop: {
  prototype: OecOverlayBackdrop;
  new (): OecOverlayBackdrop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
