import { Component, Host, h, State, Method, Element, Listen } from '@stencil/core';
import { Subject, firstValueFrom } from 'rxjs';
import { OverlayRef } from '../Overlay.types';
import './oec-overlay-item/oec-overlay-item';
export class OecOverlayContainer {
  constructor() {
    this.render$ = new Subject();
    this.overlayRefs = [];
    this.hasModifierKey = (event) => {
      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    };
  }
  async addOverlay(overlayConfig) {
    const ref = new OverlayRef(this.host, overlayConfig);
    // Ensure all child dom elements have been generated before returning from addOverlay.
    await this.waitForNextRenderAfter(() => {
      this.overlayRefs = [...this.overlayRefs, ref];
    });
    return ref;
  }
  async removeOverlay(ref) {
    await this.waitForNextRenderAfter(() => {
      this.overlayRefs = [...this.overlayRefs.filter(x => x !== ref)];
    });
  }
  async waitForNextRenderAfter(causeARenderAction) {
    const p1 = firstValueFrom(this.render$);
    causeARenderAction();
    return p1;
  }
  componentDidRender() {
    this.render$.next();
  }
  async closeWithEscapeKey(event) {
    const items = Array.from(this.host.querySelectorAll('oec-overlay-item')).reverse();
    for (const item of items) {
      if ((await item.isShowing()) && event.key === 'Escape' && !item.overlayConfig.disableClose && !this.hasModifierKey(event)) {
        event.stopImmediatePropagation();
        await item.hide();
        break;
      }
    }
  }
  ;
  render() {
    return (h(Host, null, this.overlayRefs.map((x) => h("oec-overlay-item", { overlayConfig: x.getConfig() }))));
  }
  static get is() { return "oec-overlay-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-container.css"]
  }; }
  static get states() { return {
    "overlayRefs": {}
  }; }
  static get methods() { return {
    "addOverlay": {
      "complexType": {
        "signature": "(overlayConfig: OverlayConfig) => Promise<OverlayRef>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "OverlayRef": {
            "location": "import",
            "path": "../Overlay.types"
          },
          "OverlayConfig": {
            "location": "import",
            "path": "../Overlay.types"
          }
        },
        "return": "Promise<OverlayRef>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "removeOverlay": {
      "complexType": {
        "signature": "(ref: OverlayRef) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "OverlayRef": {
            "location": "import",
            "path": "../Overlay.types"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "closeWithEscapeKey",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
