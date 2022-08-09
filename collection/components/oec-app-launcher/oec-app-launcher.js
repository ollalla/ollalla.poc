import { Component, Host, h, Prop, Event, State } from "@stencil/core";
import { ReplaySubject, from as observableFrom } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { OecOecIcon } from "../../svgs/oec-logo-icon";
import { OecOpsIcon } from "../../svgs/ops-logo-icon";
import { myContainer, TYPES } from "../inversify.config";
import Overlay from "../oec-overlay/Overlay";
function sortOrder(a, b) {
  if (a.order > b.order) {
    return 1;
  }
  if (a.order < b.order) {
    return -1;
  }
  return 0;
}
// </order></order>
export class OecAppLauncher {
  constructor() {
    // keep there for story
    this.enabledApps = [
      "OPSTrax",
      "DeliveryTrax",
      "ValuTrax",
      "BackTrax",
      "CollisionLink",
      "RepairLink",
      "D2DLink",
      "D2DExpress",
      "MyPriceLink",
      "LinkIQ",
      "EPCLink",
      "ConsumerLink"
    ];
    this.destroy$ = new ReplaySubject();
    this.viewAllVisible = false;
    this.hasOps = false;
    this.hasOec = false;
    this.oneColumn = false;
    this.iconStyleOps = { width: "35px", height: "35px" };
    this.iconStyleOec = { width: "33px", height: "33px" };
    this.onAppCardClicked = (url) => () => {
      this.appCardClicked.emit(url);
    };
    this.handleViewAll = async (ev) => {
      const ref = await Overlay.attach(ev.target, {
        template: ({ hide }) => (h("div", null,
          h("button", { onClick: hide }, "close"))),
        panelClass: "bento-viewall-dialog-panel",
        backdropClass: "dark-backdrop",
        hasBackdrop: true,
        hasArrow: false
      });
      const item = await ref.getItemElement();
      const onclose = () => {
        item.removeEventListener("closed", onclose);
        ref.dispose();
      };
      item.addEventListener("closed", onclose);
      item.show();
    };
    this.appService = myContainer.get(TYPES.IAppService);
  }
  connectedCallback() {
    observableFrom(this.appService.getAppListing())
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
      this.allowedApps$ = data;
      //
      this.hasOps =
        this.allowedApps$.filter(p => p.isOpsProduct && this.enabledApps.includes(p.name)).length > 0;
      this.hasOec =
        this.allowedApps$.filter(p => !p.isOpsProduct && this.enabledApps.includes(p.name)).length > 0;
      this.oneColumn = !(this.hasOps && this.hasOec);
      this.viewAllVisible =
        this.enabledApps.length !== this.allowedApps$.length;
    });
  }
  appTemplateRender(app) {
    return this.enabledApps.includes(app.name) ? (h("oec-app-card", { onClick: this.onAppCardClicked(app.landingUrl), appDefinition: app })) : ("");
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const getSortedItems = (columnFilter) => [
      ...this.allowedApps$
        .filter(columnFilter)
        .filter(x => this.enabledApps.includes(x.name))
        .sort(sortOrder),
      ...this.allowedApps$
        .filter(columnFilter)
        .filter(x => !this.enabledApps.includes(x.name))
        .sort(sortOrder)
    ];
    return (h(Host, null,
      h("div", { class: this.oneColumn
          ? "launcher-component one-column"
          : "launcher-component" },
        h("div", { class: "headWrapper" },
          this.hasOps ? (h("header", { class: this.oneColumn ? "one-column" : "" },
            h(OecOpsIcon, { style: this.iconStyleOps }))) : (""),
          this.hasOec ? (h("header", { class: this.oneColumn ? "one-column" : "" },
            h(OecOecIcon, { style: this.iconStyleOec }))) : ("")),
        h("div", { class: "appsWrapper" },
          h("div", { class: this.hasOps ? "products-column" : "hidden" }, getSortedItems(x => x.isOpsProduct).map(this.appTemplateRender.bind(this))),
          h("div", { class: this.hasOec ? "products-column" : "hidden" }, getSortedItems(x => !x.isOpsProduct).map(this.appTemplateRender.bind(this)))),
        this.viewAllVisible ? (h("div", { class: "view-all", onClick: this.handleViewAll }, "View All")) : (""))));
  }
  static get is() { return "oec-app-launcher"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-app-launcher.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-app-launcher.css"]
  }; }
  static get properties() { return {
    "enabledApps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[\r\n    \"OPSTrax\",\r\n    \"DeliveryTrax\",\r\n    \"ValuTrax\",\r\n    \"BackTrax\",\r\n    \"CollisionLink\",\r\n    \"RepairLink\",\r\n    \"D2DLink\",\r\n    \"D2DExpress\",\r\n    \"MyPriceLink\",\r\n    \"LinkIQ\",\r\n    \"EPCLink\",\r\n    \"ConsumerLink\"\r\n  ]"
    }
  }; }
  static get states() { return {
    "allowedApps$": {}
  }; }
  static get events() { return [{
      "method": "appCardClicked",
      "name": "appCardClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
