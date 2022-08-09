import { Component, Host, h, Prop } from '@stencil/core';
export class OecOverlayArrow {
  render() {
    return (h(Host, null));
  }
  static get is() { return "oec-overlay-arrow"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-arrow.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-arrow.css"]
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
    }
  }; }
}
