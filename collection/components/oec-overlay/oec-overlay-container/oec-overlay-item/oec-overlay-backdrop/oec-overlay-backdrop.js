import { Component, Host, h, Prop, Listen, Element } from '@stencil/core';
export class OecOverlayBackdrop {
  constructor() {
    this.hide = async () => { };
    this.isShowing = async () => false;
  }
  async close() {
    await this.hide();
  }
  render() {
    return (h(Host, { class: this.overlayConfig.backdropClass }));
  }
  static get is() { return "oec-overlay-backdrop"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-backdrop.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-backdrop.css"]
  }; }
  static get properties() { return {
    "overlayConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "OverlayConfig",
        "resolved": "OverlayConfig",
        "references": {
          "OverlayConfig": {
            "location": "import",
            "path": "../../../Overlay.types"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "hide": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => Promise<void>",
        "resolved": "() => Promise<void>",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "async () => {}"
    },
    "isShowing": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => Promise<boolean>",
        "resolved": "() => Promise<boolean>",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "async () => false"
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "click",
      "method": "close",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
