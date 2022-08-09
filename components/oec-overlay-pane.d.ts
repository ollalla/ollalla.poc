import type { Components, JSX } from "../types/components";

interface OecOverlayPane extends Components.OecOverlayPane, HTMLElement {}
export const OecOverlayPane: {
  prototype: OecOverlayPane;
  new (): OecOverlayPane;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
