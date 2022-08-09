import { Component, Event, Host, h, State, Prop } from '@stencil/core';
import { interval, ReplaySubject } from 'rxjs';
import { shareReplay, takeUntil, scan, distinctUntilChanged } from 'rxjs/operators';
import { MyIconBellSolid } from '../../svgs/bell-solid';
import { MyIconBento } from '../../svgs/bento';
import { MyIconCommentDotsSolid } from '../../svgs/comment-dots-solid';
import { MyIconOecLogo } from '../../svgs/oec-logo';
import { MyIconCircleQuestionRegular } from '../../svgs/circle-question-regular';
import './oec-nav-menu-action/oec-nav-menu-action';
import '../oec-user-icon/oec-user-icon';
import Overlay from '../oec-overlay/Overlay';
import { popover, tooltip } from '../oec-overlay/middleware';
export class OecNav {
  constructor() {
    this.overlayRefs = [];
    this.destroy$ = new ReplaySubject(1);
    this.missedNotifications = 0;
    this.missedMessages = 0;
    this.userId = '';
    this.enabledApps = []; // Doesn't support converters.
    this.onBentoClicked = async () => {
      this.bentoClicked.emit();
    };
    this.onHelpClick = () => {
      this.helpClicked.emit();
    };
    this.onNotificationsClicked = () => {
      this.notificationsClicked.emit();
    };
    this.onMessagesClicked = () => {
      this.messagesClicked.emit();
    };
    this.attachMenuItemBehaviors = async (el) => {
      this.overlayRefs.push(await Overlay.attach(el, {
        template: el.dataset.tooltip || '',
        panelClass: 'nav-tooltip-panel',
        hasArrow: true,
        middleware: [tooltip()]
      }));
      if (el.classList.contains('bento')) {
        this.overlayRefs.push(await Overlay.attach(el, {
          template: () => h("oec-app-launcher", { class: "bento-popover-content" }),
          panelClass: 'bento-popover-panel',
          hasBackdrop: true,
          hasArrow: true,
          middleware: [popover()]
        }));
      }
    };
  }
  // Do not bind this with html attributes. Set with code.
  connectedCallback() {
    const shared = interval(1000).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    shared.pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.missedNotifications = x;
    });
    shared.pipe(scan((acc, value) => (value % 3) === 0 && value !== 0 ? (acc + 1) : acc, 0), // every 3 seconds
    distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(x => {
      this.missedMessages = x;
    });
  }
  disconnectedCallback() {
    for (const overlay of this.overlayRefs) {
      overlay.dispose();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const styles = { width: "15px", height: "15px" };
    return (h(Host, null,
      h("div", { class: "left" },
        h("slot", { name: "brand" })),
      h("div", { class: "right" },
        h("oec-nav-menu-action", { class: "search", isClickable: false, "data-tooltip": "Search", ref: this.attachMenuItemBehaviors },
          h("oec-nav-search", { slot: "icon" })),
        h("oec-nav-menu-action", { class: "help", "data-tooltip": "Support", onClick: this.onHelpClick, ref: this.attachMenuItemBehaviors },
          h(MyIconCircleQuestionRegular, { slot: "icon", style: styles })),
        h("oec-nav-menu-action", { class: "notifications", "data-tooltip": "Notifications", badgeTotal: this.missedNotifications, onClick: this.onNotificationsClicked, ref: this.attachMenuItemBehaviors },
          h(MyIconBellSolid, { slot: "icon", style: styles })),
        h("oec-nav-menu-action", { class: "messages", "data-tooltip": "Alerts", badgeTotal: this.missedMessages, onClick: this.onMessagesClicked, ref: this.attachMenuItemBehaviors },
          h(MyIconCommentDotsSolid, { slot: "icon", style: styles })),
        h("oec-nav-menu-action", { class: "user-info", "data-tooltip": "User Info", isClickable: false, ref: this.attachMenuItemBehaviors },
          h("oec-user-icon", { slot: "icon", style: { width: "20px", height: "20px" }, userId: this.userId })),
        h("div", { class: "vertical-divider" }),
        h("oec-nav-menu-action", { class: "bento", onClick: this.onBentoClicked, "data-tooltip": "App Launcher", ref: this.attachMenuItemBehaviors },
          h("div", { slot: "icon", class: "bento-content" },
            h(MyIconOecLogo, { focusable: "false" }),
            h(MyIconBento, { focusable: "false" }))))));
  }
  static get is() { return "oec-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-nav.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-nav.css"]
  }; }
  static get properties() { return {
    "userId": {
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
        "text": ""
      },
      "attribute": "user-id",
      "reflect": false,
      "defaultValue": "''"
    },
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
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "missedNotifications": {},
    "missedMessages": {}
  }; }
  static get events() { return [{
      "method": "notificationsClicked",
      "name": "notificationsClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "messagesClicked",
      "name": "messagesClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "helpClicked",
      "name": "helpClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "bentoClicked",
      "name": "bentoClicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
