'use strict';

const index = require('./index-50559265.js');

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

exports.OecOverlayArrow = OecOverlayArrow;
