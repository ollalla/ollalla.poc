import type { Components, JSX } from "../types/components";

interface OecHeader extends Components.OecHeader, HTMLElement {}
export const OecHeader: {
  prototype: OecHeader;
  new (): OecHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
