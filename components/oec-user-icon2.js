import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { R as ReplaySubject, S as Subject, n as debounceTime, s as switchMap, o as of, h as from, t as takeUntil } from './index2.js';
import './index3.js';

class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "Leblanc Meneses"
    });
  }
}

const oecUserIconCss = ":host{--oec-user-icon-color:white;display:flex;border-radius:50%;background-color:currentColor;align-items:center;justify-content:center}:host span{font-weight:bolder;font-family:Arial, Helvetica, sans-serif;font-size:8px;color:var(--oec-user-icon-color)}";

const OecUserIcon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
        return of(undefined);
      }
      else {
        return from(this.userProfileService.getInfo(userId));
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
    return (h(Host, null, h("span", null, this.initials ? this.initials : '')));
  }
  static get watchers() { return {
    "userId": ["watchPropertyUserId"]
  }; }
  static get style() { return oecUserIconCss; }
}, [1, "oec-user-icon", {
    "userId": [1, "user-id"],
    "userInfo": [32],
    "initials": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oec-user-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "oec-user-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OecUserIcon);
      }
      break;
  } });
}
defineCustomElement(OecUserIcon);

export { OecUserIcon as O, defineCustomElement as d };
