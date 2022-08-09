import { Component, h, Host, Watch, Prop, Element, Event } from "@stencil/core";
///js/dist/modal
import { Modal } from "bootstrap";
export class OecModal {
  constructor() {
    this.modal = null;
    /**
     * The type of header to display. Possible values are modal or dialog
     */
    this.type = "modal";
    /**
     * The size of modal to display. Possible values are small, medium, or large
     */
    this.size = "medium";
    /**
     * Toggle the visibility of the modal
     */
    this.visible = false;
    this.onClickClose = () => {
      this.visible = false;
      this.close.emit(false);
    };
  }
  visibleChange(newValue) {
    if (newValue) {
      this.modal.show();
    }
    else {
      this.modal.hide();
    }
  }
  componentDidLoad() {
    this.modal = new Modal(document.getElementById(`${this.element.id}`), {
      backdrop: "static",
      keyboard: false
    });
    if (this.visible) {
      this.visibleChange(this.visible);
    }
  }
  render() {
    let cssClass = "modal-";
    if (this.size === "large") {
      cssClass += "lg";
    }
    else if (this.size === "medium") {
      cssClass += "md";
    }
    else if (this.size === "small") {
      cssClass += "sm";
    }
    return (h(Host, { visible: this.visible, class: "modal fade", tabindex: "-1", "aria-hidden": "true" },
      h("div", { class: `modal-dialog modal-dialog-centered ${cssClass}` },
        h("div", { class: "modal-content" },
          h("div", { class: "modal-header" },
            h("span", { class: "oec-dialog-cap" }),
            h("oec-header", { class: "heading-font", level: 4 },
              h("slot", { name: "header" })),
            h("button", { type: "button", class: "btn-close", onClick: this.onClickClose, "aria-label": "Close" },
              h("span", { "aria-hidden": "true" }, "\u00D7"))),
          h("div", { class: "modal-body" },
            h("slot", { name: "body" }, "...")),
          h("div", { class: "modal-footer" },
            h("slot", { name: "footer" }))))));
  }
  static get is() { return "oec-modal"; }
  static get originalStyleUrls() { return {
    "$": ["oec-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-modal.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of header to display. Possible values are modal or dialog"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"modal\""
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The size of modal to display. Possible values are small, medium, or large"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "\"medium\""
    },
    "visible": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Toggle the visibility of the modal"
      },
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "close",
      "name": "close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Communicate to parent component that the modal has been closed"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "visible",
      "methodName": "visibleChange"
    }]; }
}
