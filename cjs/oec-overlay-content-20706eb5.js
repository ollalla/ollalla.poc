'use strict';

const index = require('./index-50559265.js');

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

exports.OecOverlayContent = OecOverlayContent;
