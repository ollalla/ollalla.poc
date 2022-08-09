'use strict';

const index = require('./index-2135f1ed.js');

const oecOverlayBackdropCss = ".sc-oec-overlay-backdrop-h{display:block;position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);z-index:1}";

const OecOverlayBackdrop = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hide = async () => { };
    this.isShowing = async () => false;
  }
  async close() {
    await this.hide();
  }
  render() {
    return (index.h(index.Host, { class: this.overlayConfig.backdropClass }));
  }
  get host() { return index.getElement(this); }
};
OecOverlayBackdrop.style = oecOverlayBackdropCss;

const oecOverlayArrowCss = ".sc-oec-overlay-arrow-h{position:absolute;background:var(--oec-overlay-background);width:8px;height:8px;transform:rotate(45deg)}";

const OecOverlayArrow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null));
  }
};
OecOverlayArrow.style = oecOverlayArrowCss;

const oecOverlayContentCss = ".sc-oec-overlay-content-h{display:flex;flex:1;min-height:0;z-index:2}";

const OecOverlayContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hide = async () => { };
  }
  render() {
    return (index.h(index.Host, null, typeof this.overlayConfig.template === 'function' ? this.overlayConfig.template({ hide: this.hide }) : this.overlayConfig.template || ''));
  }
};
OecOverlayContent.style = oecOverlayContentCss;

const oecOverlayPaneCss = ".sc-oec-overlay-pane-h{display:none;position:absolute;top:0;left:0;background:var(--oec-overlay-background);color:var(--oec-overlay-color);padding:5px;border-radius:4px;pointer-events:all;z-index:2}";

const OecOverlayPane = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: this.overlayConfig.panelClass }, this.overlayConfig.hasArrow && index.h("oec-overlay-arrow", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.arrowElement = el;
      }, overlayConfig: this.overlayConfig }), index.h("oec-overlay-content", { overlayConfig: this.overlayConfig, hide: this.hide })));
  }
};
OecOverlayPane.style = oecOverlayPaneCss;

exports.OecOverlayArrow = OecOverlayArrow;
exports.OecOverlayBackdrop = OecOverlayBackdrop;
exports.OecOverlayContent = OecOverlayContent;
exports.OecOverlayPane = OecOverlayPane;
