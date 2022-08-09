import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { S as Subject, f as firstValueFrom } from './index2.js';
import { d as defineCustomElement$3 } from './oec-overlay-backdrop2.js';
import { d as defineCustomElement$1 } from './oec-overlay-pane2.js';
import { d as defineCustomElement$4 } from './oec-overlay-arrow2.js';
import { d as defineCustomElement$2 } from './oec-overlay-content2.js';

const oecOverlayItemCss = ".sc-oec-overlay-item-h{position:absolute;top:0;left:0;right:0;bottom:0;justify-content:center;align-items:center;pointer-events:none}";

let nextUniqueId = 0;
const OecOverlayItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.closed = createEvent(this, "closed", 7);
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
    return (h(Host, { id: `oec-overlay-${this.id}`, style: { display: this.isVisible ? 'block' : 'none', zIndex: this.id.toString() } }, this.overlayConfig.hasBackdrop && h("oec-overlay-backdrop", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.backdropElement = el;
      }, overlayConfig: this.overlayConfig, hide: this.hide.bind(this), isShowing: this.isShowing.bind(this) }), h("oec-overlay-pane", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.paneElement = el;
      }, overlayConfig: this.overlayConfig, style: { display: this.isVisible ? 'block' : 'none' }, hide: this.hide.bind(this) })));
  }
  static get style() { return oecOverlayItemCss; }
}, [2, "oec-overlay-item", {
    "overlayConfig": [16],
    "isVisible": [32],
    "show": [64],
    "hide": [64],
    "isShowing": [64],
    "getBackdropElement": [64],
    "getPaneElement": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-overlay-item", "oec-overlay-arrow", "oec-overlay-backdrop", "oec-overlay-content", "oec-overlay-pane"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-overlay-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecOverlayItem);
      }
      break;
    case "oec-overlay-arrow":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "oec-overlay-backdrop":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "oec-overlay-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "oec-overlay-pane":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}
defineCustomElement(OecOverlayItem);

export { OecOverlayItem as O, defineCustomElement as d };
