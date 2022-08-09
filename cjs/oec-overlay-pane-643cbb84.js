'use strict';

const index = require('./index-50559265.js');
require('./oec-overlay-arrow-a6252cb3.js');
require('./oec-overlay-content-20706eb5.js');

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

exports.OecOverlayPane = OecOverlayPane;
