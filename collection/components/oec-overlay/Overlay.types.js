import { Subject } from "rxjs";
export class OverlayRef {
  constructor(
  // eslint-disable-next-line no-undef
  _host, _overlayConfig) {
    this._host = _host;
    this._overlayConfig = _overlayConfig;
    this._destroyStarted = new Subject();
  }
  // eslint-disable-next-line no-undef
  async getItemElement() {
    return Array.from(this._host.querySelectorAll('oec-overlay-item')).filter(x => x.overlayConfig === this._overlayConfig)[0];
  }
  getConfig() {
    return this._overlayConfig;
  }
  destroyStarted() {
    return this._destroyStarted;
  }
  dispose() {
    this._destroyStarted.next();
    this._destroyStarted.complete();
    this._host.removeOverlay(this);
  }
}
