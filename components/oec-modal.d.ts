import type { Components, JSX } from "../types/components";

interface OecModal extends Components.OecModal, HTMLElement {}
export const OecModal: {
  prototype: OecModal;
  new (): OecModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
