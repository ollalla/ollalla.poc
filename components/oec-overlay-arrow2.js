import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const oecOverlayArrowCss = ".sc-oec-overlay-arrow-h{position:absolute;background:var(--oec-overlay-background);width:8px;height:8px;transform:rotate(45deg)}";

const OecOverlayArrow = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null));
  }
  static get style() { return oecOverlayArrowCss; }
}, [2, "oec-overlay-arrow", {
    "overlayConfig": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-arrow"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-arrow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayArrow);
      }
      break;
  } });
}
defineCustomElement(OecOverlayArrow);

export { OecOverlayArrow as O, defineCustomElement as d };
