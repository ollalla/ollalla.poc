import type { Components, JSX } from "../types/components";

interface OecNavMenuAction extends Components.OecNavMenuAction, HTMLElement {}
export const OecNavMenuAction: {
  prototype: OecNavMenuAction;
  new (): OecNavMenuAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
