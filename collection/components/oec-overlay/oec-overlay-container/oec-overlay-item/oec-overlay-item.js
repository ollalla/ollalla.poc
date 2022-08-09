import { Component, Event, Host, h, Prop, State, Method } from '@stencil/core';
import { firstValueFrom, Subject } from 'rxjs';
import './oec-overlay-backdrop/oec-overlay-backdrop';
import './oec-overlay-pane/oec-overlay-pane';
let nextUniqueId = 0;
export class OecOverlayItem {
  constructor() {
    this.id = nextUniqueId++;
    this.render$ = new Subject();
    this.isVisible = false;
  }
  async show() {
    await this.waitForNextRenderAfter(() => {
      this.isVisible = true;
    });
  }
  async hide() {
    await this.waitForNextRenderAfter(() => {
      this.isVisible = false;
    });
    this.closed.emit();
  }
  async isShowing() {
    return this.isVisible;
  }
  // eslint-disable-next-line no-undef
  async getBackdropElement() {
    return this.backdropElement;
  }
  // eslint-disable-next-line no-undef
  async getPaneElement() {
    return this.paneElement;
  }
  async waitForNextRenderAfter(causeARenderAction) {
    const p1 = firstValueFrom(this.render$);
    causeARenderAction();
    return p1;
  }
  componentDidRender() {
    this.render$.next();
  }
  // TODO(lmeneses): eslint .bind() because @Method() decorator does not allow arrow functions.
  render() {
    return (h(Host, { id: `oec-overlay-${this.id}`, style: { display: this.isVisible ? 'block' : 'none', zIndex: this.id.toString() } },
      this.overlayConfig.hasBackdrop && h("oec-overlay-backdrop", { ref: (el) => {
          // eslint-disable-next-line no-undef
          this.backdropElement = el;
        }, overlayConfig: this.overlayConfig, hide: this.hide.bind(this), isShowing: this.isShowing.bind(this) }),
      h("oec-overlay-pane", { ref: (el) => {
          // eslint-disable-next-line no-undef
          this.paneElement = el;
        }, overlayConfig: this.overlayConfig, style: { display: this.isVisible ? 'block' : 'none' }, hide: this.hide.bind(this) })));
  }
  static get is() { return "oec-overlay-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["oec-overlay-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-overlay-item.css"]
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
            "path": "../../Overlay.types"
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
  static get states() { return {
    "isVisible": {}
  }; }
  static get events() { return [{
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "isShowing": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getBackdropElement": {
      "complexType": {
        "signature": "() => Promise<HTMLOecOverlayBackdropElement>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLOecOverlayBackdropElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLOecOverlayBackdropElement>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getPaneElement": {
      "complexType": {
        "signature": "() => Promise<HTMLOecOverlayPaneElement>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLOecOverlayPaneElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLOecOverlayPaneElement>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
