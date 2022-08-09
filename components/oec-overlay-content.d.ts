import type { Components, JSX } from "../types/components";

interface OecOverlayContent extends Components.OecOverlayContent, HTMLElement {}
export const OecOverlayContent: {
  prototype: OecOverlayContent;
  new (): OecOverlayContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
