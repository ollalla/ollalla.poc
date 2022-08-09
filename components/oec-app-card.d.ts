import type { Components, JSX } from "../types/components";

interface OecAppCard extends Components.OecAppCard, HTMLElement {}
export const OecAppCard: {
  prototype: OecAppCard;
  new (): OecAppCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
