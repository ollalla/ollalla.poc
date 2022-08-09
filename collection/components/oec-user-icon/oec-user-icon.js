import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { ReplaySubject, of as observableOf, from as observableFrom, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { UserProfileService } from '../services/UserProfileService';
export class OecUserIcon {
  constructor() {
    this.destroy$ = new ReplaySubject(1);
    this.userId$ = new Subject();
    this.userProfileService = new UserProfileService();
    this.userId = '';
  }
  watchPropertyUserId(newValue) {
    this.userId$.next(newValue);
  }
  componentWillLoad() {
    this.watchPropertyUserId(this.userId);
  }
  connectedCallback() {
    this.userId$.pipe(debounceTime(150), switchMap(userId => {
      if (!userId) {
        return observableOf(undefined);
      }
      else {
        return observableFrom(this.userProfileService.getInfo(userId));
      }
    }), takeUntil(this.destroy$)).subscribe(x => {
      this.userInfo = x ? x : undefined;
      this.initials = x ? x.displayName.split(/\s+/)
        .map(x => x.trim())
        .filter(x => x !== '').slice(0, 2)
        .reduce((accumulator, current) => {
        accumulator += current.slice(0, 1).toLocaleUpperCase();
        return accumulator;
      }, '') : '';
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    return (h(Host, null,
      h("span", null, this.initials ? this.initials : '')));
  }
  static get is() { return "oec-user-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["oec-user-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["oec-user-icon.css"]
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
    }
  }; }
  static get states() { return {
    "userInfo": {},
    "initials": {}
  }; }
  static get watchers() { return [{
      "propName": "userId",
      "methodName": "watchPropertyUserId"
    }]; }
}
