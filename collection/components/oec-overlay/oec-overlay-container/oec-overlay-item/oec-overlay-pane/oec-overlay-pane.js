import { Component, Host, h, Prop, Listen, Method } from '@stencil/core';
import './oec-overlay-arrow/oec-overlay-arrow';
import './oec-overlay-content/oec-overlay-content';
export class OecOverlayPane {
  constructor() {
    this.hide = async () => { };
  }
  handleClick(ev) {
    // prevents this getting to oec-overlay-backdrop.
    ev === null || ev === void 0 ? void 0 : ev.stopImmediatePropagation();
  }
  // eslint-disable-next-line no-undef
  async getArrowElement() {
    return this.arrowElement;
  }
  render() {
    return (h(Host, { class: this.overlayConfig.panelClass },
      this.overlayConfig.hasArrow && h("oec-overlay-arrow", { ref: (el) => {
          // eslint-disable-next-line no-undef
          this.arrowElement = el;
        }, overlayConfig: this.overlayConfig }),
      h("oec-overlay-content", { overlayConfig: this.overlayConfig, hide: this.hide })));
  }
  static get is() { return "oec-overlay-pane"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-pane.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-pane.css"]
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
    }
  }; }
  static get methods() { return {
    "getArrowElement": {
      "complexType": {
        "signature": "() => Promise<HTMLOecOverlayArrowElement>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLOecOverlayArrowElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLOecOverlayArrowElement>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
