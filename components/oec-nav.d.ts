import type { Components, JSX } from "../types/components";

interface OecNav extends Components.OecNav, HTMLElement {}
export const OecNav: {
  prototype: OecNav;
  new (): OecNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
