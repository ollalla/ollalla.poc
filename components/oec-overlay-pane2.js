import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './oec-overlay-arrow2.js';
import { d as defineCustomElement$1 } from './oec-overlay-content2.js';

const oecOverlayPaneCss = ".sc-oec-overlay-pane-h{display:none;position:absolute;top:0;left:0;background:var(--oec-overlay-background);color:var(--oec-overlay-color);padding:5px;border-radius:4px;pointer-events:all;z-index:2}";

const OecOverlayPane = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.hide = async () => { };
  }
  handleClick(ev) {
    // prevents this getting to oec-overlay-backdrop.
    ev === null || ev === void 0 ? void 0 : ev.stopImmediatePropagation();
  }
  // eslint-disable-next-line no-undef
  async getArrowElement() {
    return this.arrowElement;
  }
  render() {
    return (h(Host, { class: this.overlayConfig.panelClass }, this.overlayConfig.hasArrow && h("oec-overlay-arrow", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.arrowElement = el;
      }, overlayConfig: this.overlayConfig }), h("oec-overlay-content", { overlayConfig: this.overlayConfig, hide: this.hide })));
  }
  static get style() { return oecOverlayPaneCss; }
}, [2, "oec-overlay-pane", {
    "overlayConfig": [16],
    "hide": [16],
    "getArrowElement": [64]
  }, [[1, "click", "handleClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-pane", "oec-overlay-arrow", "oec-overlay-content"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-pane":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayPane);
      }
      break;
    case "oec-overlay-arrow":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "oec-overlay-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement(OecOverlayPane);

export { OecOverlayPane as O, defineCustomElement as d };
