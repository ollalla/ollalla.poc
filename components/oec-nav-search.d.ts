import type { Components, JSX } from "../types/components";

interface OecNavSearch extends Components.OecNavSearch, HTMLElement {}
export const OecNavSearch: {
  prototype: OecNavSearch;
  new (): OecNavSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
