'use strict';

const index = require('./index-50559265.js');
const index$1 = require('./index-316b21a0.js');
require('./index-2398a3bf.js');

class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "Leblanc Meneses"
    });
  }
}

const oecUserIconCss = ":host{--oec-user-icon-color:white;display:flex;border-radius:50%;background-color:currentColor;align-items:center;justify-content:center}:host span{font-weight:bolder;font-family:Arial, Helvetica, sans-serif;font-size:8px;color:var(--oec-user-icon-color)}";

const OecUserIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.destroy$ = new index$1.ReplaySubject(1);
    this.userId$ = new index$1.Subject();
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
    this.userId$.pipe(index$1.debounceTime(150), index$1.switchMap(userId => {
      if (!userId) {
        return index$1.of(undefined);
      }
      else {
        return index$1.from(this.userProfileService.getInfo(userId));
      }
    }), index$1.takeUntil(this.destroy$)).subscribe(x => {
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
    return (index.h(index.Host, null, index.h("span", null, this.initials ? this.initials : '')));
  }
  static get watchers() { return {
    "userId": ["watchPropertyUserId"]
  }; }
};
OecUserIcon.style = oecUserIconCss;

exports.OecUserIcon = OecUserIcon;
