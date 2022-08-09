import { Component, Host, Prop, h } from "@stencil/core";
export class OecAppCard {
  render() {
    return (h(Host, null,
      h("a", { href: this.appDefinition.landingUrl, class: "prod-card", title: this.appDefinition.name },
        h("div", { class: "prod-name" },
          h("div", null, this.appDefinition.name),
          h("div", { class: "prod-desc" }, this.appDefinition.description)))));
  }
  static get is() { return "oec-app-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-app-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-app-card.css"]
  }; }
  static get properties() { return {
    "appDefinition": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "AppDefinition",
        "resolved": "AppDefinition",
        "references": {
          "AppDefinition": {
            "location": "import",
            "path": "../../inversify.interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
