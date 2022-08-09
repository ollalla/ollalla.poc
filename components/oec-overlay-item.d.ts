import type { Components, JSX } from "../types/components";

interface OecOverlayItem extends Components.OecOverlayItem, HTMLElement {}
export const OecOverlayItem: {
  prototype: OecOverlayItem;
  new (): OecOverlayItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
