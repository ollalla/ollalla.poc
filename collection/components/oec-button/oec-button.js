import { Component, h, Prop } from "@stencil/core";
export class OecButton {
  constructor() {
    /**
     * The type of button to display. Possible values are: primary, secondary, or tertiary
     */
    this.type = "primary";
    /**
     * This value sets whether the button should be disabled or not
     */
    this.disabled = false;
  }
  render() {
    // Wanted to use an enum here but Stencil doesn't support it yet: https://github.com/ionic-team/stencil/issues/1096
    let buttonSubClass = "primary";
    if (this.type === "secondary" || this.type === "tertiary") {
      buttonSubClass = this.type;
    }
    const className = "oec-btn oec-btn-" + buttonSubClass;
    return (h("button", { type: "button", class: className, disabled: this.disabled },
      h("slot", null)));
  }
  static get is() { return "oec-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-button.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of button to display. Possible values are: primary, secondary, or tertiary"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"primary\""
    },
    "disabled": {
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
        "text": "This value sets whether the button should be disabled or not"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
