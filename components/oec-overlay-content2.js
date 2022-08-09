import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const oecOverlayContentCss = ".sc-oec-overlay-content-h{display:flex;flex:1;min-height:0;z-index:2}";

const OecOverlayContent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.hide = async () => { };
  }
  render() {
    return (h(Host, null, typeof this.overlayConfig.template === 'function' ? this.overlayConfig.template({ hide: this.hide }) : this.overlayConfig.template || ''));
  }
  static get style() { return oecOverlayContentCss; }
}, [2, "oec-overlay-content", {
    "overlayConfig": [16],
    "hide": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-content"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayContent);
      }
      break;
  } });
}
defineCustomElement(OecOverlayContent);

export { OecOverlayContent as O, defineCustomElement as d };
