import type { Components, JSX } from "../types/components";

interface OecAppLauncher extends Components.OecAppLauncher, HTMLElement {}
export const OecAppLauncher: {
  prototype: OecAppLauncher;
  new (): OecAppLauncher;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
