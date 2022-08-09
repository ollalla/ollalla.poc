import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const oecHeaderCss = "h1,h2,h3,h4,h5,h6{font-family:arial;font-weight:bold;margin:0;color:#1d3a66}h1.oec-hd-1{font-size:2.75rem}h2.oec-hd-2{font-size:2.25rem}h3.oec-hd-3{font-size:1.9rem}h4.oec-hd-4{font-size:1.5rem}h5.oec-hd-5{font-size:1.12rem}h6.oec-hd-6{font-size:1rem}";

const OecHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The type of header to display. Possible values are 1-6
     */
    this.level = 1;
  }
  render() {
    switch (this.level) {
      default:
      case 1:
        return (h("h1", { class: "oec-hd-1" }, h("slot", null)));
      case 2:
        return (h("h2", { class: "oec-hd-2" }, h("slot", null)));
      case 3:
        return (h("h3", { class: "oec-hd-3" }, h("slot", null)));
      case 4:
        return (h("h4", { class: "oec-hd-4" }, h("slot", null)));
      case 5:
        return (h("h5", { class: "oec-hd-5" }, h("slot", null)));
      case 6:
        return (h("h6", { class: "oec-hd-6" }, h("slot", null)));
    }
  }
  static get style() { return oecHeaderCss; }
}, [4, "oec-header", {
    "level": [2]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-header"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecHeader);
      }
      break;
  } });
}
defineCustomElement(OecHeader);

export { OecHeader as O, defineCustomElement as d };
