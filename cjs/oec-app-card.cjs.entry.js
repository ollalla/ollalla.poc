'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-50559265.js');

const oecAppCardCss = ":host{display:block;font-family:var(--app-font-family);color:#000}:host a:any-link.prod-card{display:flex;flex-direction:row;align-items:center;padding:3px 3px 3px 10px;border-radius:3px;text-decoration:none}:host a:any-link.prod-card:hover{background-color:#e1e1e1;cursor:pointer}:host a:any-link.prod-card .prod-name{display:flex;flex-direction:column;color:#00507d;font-size:14px;line-height:17px;font-weight:600}:host a:any-link.prod-card .prod-name .prod-desc{color:initial;font-size:12px;line-height:17px;font-weight:400;white-space:nowrap}";

const OecAppCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("a", { href: this.appDefinition.landingUrl, class: "prod-card", title: this.appDefinition.name }, index.h("div", { class: "prod-name" }, index.h("div", null, this.appDefinition.name), index.h("div", { class: "prod-desc" }, this.appDefinition.description)))));
  }
};
OecAppCard.style = oecAppCardCss;

exports.oec_app_card = OecAppCard;
