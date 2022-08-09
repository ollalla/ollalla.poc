import { Component, h, Prop } from "@stencil/core";
export class OecHeader {
  constructor() {
    /**
     * The type of header to display. Possible values are 1-6
     */
    this.level = 1;
  }
  render() {
    switch (this.level) {
      default:
      case 1:
        return (h("h1", { class: "oec-hd-1" },
          h("slot", null)));
      case 2:
        return (h("h2", { class: "oec-hd-2" },
          h("slot", null)));
      case 3:
        return (h("h3", { class: "oec-hd-3" },
          h("slot", null)));
      case 4:
        return (h("h4", { class: "oec-hd-4" },
          h("slot", null)));
      case 5:
        return (h("h5", { class: "oec-hd-5" },
          h("slot", null)));
      case 6:
        return (h("h6", { class: "oec-hd-6" },
          h("slot", null)));
    }
  }
  static get is() { return "oec-header"; }
  static get originalStyleUrls() { return {
    "$": ["oec-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-header.css"]
  }; }
  static get properties() { return {
    "level": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of header to display. Possible values are 1-6"
      },
      "attribute": "level",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
}
