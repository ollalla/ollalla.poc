import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const oecAppCardCss = ":host{display:block;font-family:var(--app-font-family);color:#000}:host a:any-link.prod-card{display:flex;flex-direction:row;align-items:center;padding:3px 3px 3px 10px;border-radius:3px;text-decoration:none}:host a:any-link.prod-card:hover{background-color:#e1e1e1;cursor:pointer}:host a:any-link.prod-card .prod-name{display:flex;flex-direction:column;color:#00507d;font-size:14px;line-height:17px;font-weight:600}:host a:any-link.prod-card .prod-name .prod-desc{color:initial;font-size:12px;line-height:17px;font-weight:400;white-space:nowrap}";

const OecAppCard = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("a", { href: this.appDefinition.landingUrl, class: "prod-card", title: this.appDefinition.name }, h("div", { class: "prod-name" }, h("div", null, this.appDefinition.name), h("div", { class: "prod-desc" }, this.appDefinition.description)))));
  }
  static get style() { return oecAppCardCss; }
}, [1, "oec-app-card", {
    "appDefinition": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-app-card"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-app-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecAppCard);
      }
      break;
  } });
}
defineCustomElement(OecAppCard);

export { OecAppCard as O, defineCustomElement as d };
