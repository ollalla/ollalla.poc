'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-50559265.js');

const oecHeaderCss = "h1,h2,h3,h4,h5,h6{font-family:arial;font-weight:bold;margin:0;color:#1d3a66}h1.oec-hd-1{font-size:2.75rem}h2.oec-hd-2{font-size:2.25rem}h3.oec-hd-3{font-size:1.9rem}h4.oec-hd-4{font-size:1.5rem}h5.oec-hd-5{font-size:1.12rem}h6.oec-hd-6{font-size:1rem}";

const OecHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The type of header to display. Possible values are 1-6
     */
    this.level = 1;
  }
  render() {
    switch (this.level) {
      default:
      case 1:
        return (index.h("h1", { class: "oec-hd-1" }, index.h("slot", null)));
      case 2:
        return (index.h("h2", { class: "oec-hd-2" }, index.h("slot", null)));
      case 3:
        return (index.h("h3", { class: "oec-hd-3" }, index.h("slot", null)));
      case 4:
        return (index.h("h4", { class: "oec-hd-4" }, index.h("slot", null)));
      case 5:
        return (index.h("h5", { class: "oec-hd-5" }, index.h("slot", null)));
      case 6:
        return (index.h("h6", { class: "oec-hd-6" }, index.h("slot", null)));
    }
  }
};
OecHeader.style = oecHeaderCss;

exports.oec_header = OecHeader;
