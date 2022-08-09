import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const oecOverlayBackdropCss = ".sc-oec-overlay-backdrop-h{display:block;position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);z-index:1}";

const OecOverlayBackdrop = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.hide = async () => { };
    this.isShowing = async () => false;
  }
  async close() {
    await this.hide();
  }
  render() {
    return (h(Host, { class: this.overlayConfig.backdropClass }));
  }
  get host() { return this; }
  static get style() { return oecOverlayBackdropCss; }
}, [2, "oec-overlay-backdrop", {
    "overlayConfig": [16],
    "hide": [16],
    "isShowing": [16]
  }, [[1, "click", "close"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-backdrop"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-backdrop":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayBackdrop);
      }
      break;
  } });
}
defineCustomElement(OecOverlayBackdrop);

export { OecOverlayBackdrop as O, defineCustomElement as d };
