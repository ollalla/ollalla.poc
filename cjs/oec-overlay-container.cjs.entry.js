'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-50559265.js');
const index = require('./index-316b21a0.js');
require('./oec-overlay-item-02531aa2.js');
require('./oec-overlay-backdrop-3010ffcc.js');
require('./oec-overlay-pane-643cbb84.js');
require('./oec-overlay-arrow-a6252cb3.js');
require('./oec-overlay-content-20706eb5.js');

class OverlayRef {
  constructor(
  // eslint-disable-next-line no-undef
  _host, _overlayConfig) {
    this._host = _host;
    this._overlayConfig = _overlayConfig;
    this._destroyStarted = new index.Subject();
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

const OecOverlayContainer = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.render$ = new index.Subject();
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
    const p1 = index.firstValueFrom(this.render$);
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
    return (index$1.h(index$1.Host, null, this.overlayRefs.map((x) => index$1.h("oec-overlay-item", { overlayConfig: x.getConfig() }))));
  }
  get host() { return index$1.getElement(this); }
};
OecOverlayContainer.style = oecOverlayContainerCss;

exports.oec_overlay_container = OecOverlayContainer;
