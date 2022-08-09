import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { S as Subject, f as firstValueFrom } from './index2.js';
import { d as defineCustomElement$3 } from './oec-overlay-item2.js';
import { d as defineCustomElement$6 } from './oec-overlay-arrow2.js';
import { d as defineCustomElement$5 } from './oec-overlay-backdrop2.js';
import { d as defineCustomElement$4 } from './oec-overlay-content2.js';
import { d as defineCustomElement$2 } from './oec-overlay-pane2.js';

class OverlayRef {
  constructor(
  // eslint-disable-next-line no-undef
  _host, _overlayConfig) {
    this._host = _host;
    this._overlayConfig = _overlayConfig;
    this._destroyStarted = new Subject();
  }
  // eslint-disable-next-line no-undef
  async getItemElement() {
    return Array.from(this._host.querySelectorAll('oec-overlay-item')).filter(x => x.overlayConfig === this._overlayConfig)[0];
  }
  getConfig() {
    return this._overlayConfig;
  }
  destroyStarted() {
    return this._destroyStarted;
  }
  dispose() {
    this._destroyStarted.next();
    this._destroyStarted.complete();
    this._host.removeOverlay(this);
  }
}

const oecOverlayContainerCss = ".sc-oec-overlay-container-h{--oec-overlay-background:#222;--oec-overlay-color:#FFF;position:fixed;z-index:1000;pointer-events:none;top:0;left:0;height:100%;width:100%}.sc-oec-overlay-container-h:empty{display:none}";

const OecOverlayContainer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get host() { return this; }
  static get style() { return oecOverlayContainerCss; }
}, [2, "oec-overlay-container", {
    "overlayRefs": [32],
    "addOverlay": [64],
    "removeOverlay": [64]
  }, [[9, "keydown", "closeWithEscapeKey"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-container", "oec-overlay-arrow", "oec-overlay-backdrop", "oec-overlay-content", "oec-overlay-item", "oec-overlay-pane"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayContainer$1);
      }
      break;
    case "oec-overlay-arrow":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "oec-overlay-backdrop":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "oec-overlay-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "oec-overlay-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "oec-overlay-pane":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1(OecOverlayContainer$1);

const OecOverlayContainer = OecOverlayContainer$1;
const defineCustomElement = defineCustomElement$1;

export { OecOverlayContainer, defineCustomElement };
