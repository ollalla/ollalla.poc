import type { Components, JSX } from "../types/components";

interface OecOverlayContainer extends Components.OecOverlayContainer, HTMLElement {}
export const OecOverlayContainer: {
  prototype: OecOverlayContainer;
  new (): OecOverlayContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
