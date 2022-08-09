import { Component, Host, h, Prop } from '@stencil/core';
export class OecOverlayContent {
  constructor() {
    this.hide = async () => { };
  }
  render() {
    return (h(Host, null, typeof this.overlayConfig.template === 'function' ? this.overlayConfig.template({ hide: this.hide }) : this.overlayConfig.template || ''));
  }
  static get is() { return "oec-overlay-content"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-content.css"]
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
            "path": "../../../../Overlay.types"
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
    }
  }; }
}
