import { Component, Host, h, Prop } from '@stencil/core';
export class OecNavMenuAction {
  constructor() {
    this.isClickable = true;
    this.badgeTotal = 0;
  }
  render() {
    return (h(Host, { class: {
        'clickable': this.isClickable
      } },
      this.isClickable && h("span", { class: 'button-focus-overlay' }),
      h("div", { class: "button" },
        h("slot", { name: "icon" })),
      (this.badgeTotal > 0) && h("span", { "aria-hidden": "true", class: "badge-content badge-warn badge-above badge-after" }, Math.min(Math.max(this.badgeTotal, 0), 99))));
  }
  static get is() { return "oec-nav-menu-action"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-nav-menu-action.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-nav-menu-action.css"]
  }; }
  static get properties() { return {
    "isClickable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "is-clickable",
      "reflect": false,
      "defaultValue": "true"
    },
    "badgeTotal": {
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
        "text": ""
      },
      "attribute": "badge-total",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
}
