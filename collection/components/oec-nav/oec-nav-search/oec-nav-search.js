import { Component, Host, h, Listen, State, Event } from '@stencil/core';
import { ReplaySubject, Subject, timer, of as observableOf } from 'rxjs';
import { MyIconMagnifyingGlassSolid } from '../../../svgs/magnifying-glass-solid';
import { MyIconXmarkSolid } from '../../../svgs/xmark-solid';
import { debounce, takeUntil, switchMap, filter, distinctUntilChanged } from 'rxjs/operators';
export class NavSearch {
  constructor() {
    this.isMouseOver = false;
    this.isForcedOpen = false; // Mobile devices where hover/mouse over events do not apply.
    this.isFocused = false;
    this.destroy$ = new ReplaySubject(1);
    this.key$ = new Subject();
    this.handleExitSearch = () => {
      this.searchInput.value = '';
      this.isForcedOpen = false;
      this.searchInput.blur();
    };
    this.onMagnifyingGlassSolidClicked = () => {
      this.isForcedOpen = true;
    };
    this.onSearchInputFocused = () => {
      this.isFocused = true;
    };
    this.onSearchInputBlurred = () => {
      this.isFocused = false;
    };
  }
  get isExpanded() {
    var _a;
    return !!((_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.value) || this.isFocused || this.isMouseOver || this.isForcedOpen;
  }
  connectedCallback() {
    this.key$.pipe(debounce((key) => key === 'Enter' ? timer(0) : timer(3000)), switchMap(() => observableOf((this.searchInput.value || '').trim())), filter(x => !!x && x.length > 3), // greater than 3 characters
    distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.search.emit(this.searchInput.value);
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  handleMouseOver() {
    this.isMouseOver = true;
  }
  handleMouseOut() {
    this.isMouseOver = false;
  }
  handleKeyDown(ev) {
    this.key$.next(ev.key);
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          'search-box': true,
          'expanded': this.isExpanded
        } },
        h("input", { type: "text", placeholder: "search...", ref: (el) => this.searchInput = el, onFocus: this.onSearchInputFocused, onBlur: this.onSearchInputBlurred }),
        h("button", null, (this.isExpanded || this.isFocused) ? h(MyIconXmarkSolid, { onClick: this.handleExitSearch }) : h(MyIconMagnifyingGlassSolid, { onClick: this.onMagnifyingGlassSolidClicked })))));
  }
  static get is() { return "oec-nav-search"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-nav-search.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-nav-search.css"]
  }; }
  static get states() { return {
    "isMouseOver": {},
    "isForcedOpen": {},
    "isFocused": {}
  }; }
  static get events() { return [{
      "method": "search",
      "name": "search",
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
  static get listeners() { return [{
      "name": "mouseover",
      "method": "handleMouseOver",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseout",
      "method": "handleMouseOut",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
