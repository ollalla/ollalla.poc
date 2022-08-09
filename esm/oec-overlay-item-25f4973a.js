import { r as registerInstance, c as createEvent, h, H as Host } from './index-a044ae0a.js';
import './oec-overlay-pane-e6739741.js';
import { f as createErrorClass, S as SafeSubscriber, b as Subject } from './Subject-70dc6183.js';

const EmptyError = createErrorClass((_super) => function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
});

function firstValueFrom(source, config) {
    const hasConfig = typeof config === 'object';
    return new Promise((resolve, reject) => {
        const subscriber = new SafeSubscriber({
            next: (value) => {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: () => {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}

const oecOverlayItemCss = ".sc-oec-overlay-item-h{position:absolute;top:0;left:0;right:0;bottom:0;justify-content:center;align-items:center;pointer-events:none}";

let nextUniqueId = 0;
const OecOverlayItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closed = createEvent(this, "closed", 7);
    this.id = nextUniqueId++;
    this.render$ = new Subject();
    this.isVisible = false;
  }
  async show() {
    await this.waitForNextRenderAfter(() => {
      this.isVisible = true;
    });
  }
  async hide() {
    await this.waitForNextRenderAfter(() => {
      this.isVisible = false;
    });
    this.closed.emit();
  }
  async isShowing() {
    return this.isVisible;
  }
  // eslint-disable-next-line no-undef
  async getBackdropElement() {
    return this.backdropElement;
  }
  // eslint-disable-next-line no-undef
  async getPaneElement() {
    return this.paneElement;
  }
  async waitForNextRenderAfter(causeARenderAction) {
    const p1 = firstValueFrom(this.render$);
    causeARenderAction();
    return p1;
  }
  componentDidRender() {
    this.render$.next();
  }
  // TODO(lmeneses): eslint .bind() because @Method() decorator does not allow arrow functions.
  render() {
    return (h(Host, { id: `oec-overlay-${this.id}`, style: { display: this.isVisible ? 'block' : 'none', zIndex: this.id.toString() } }, this.overlayConfig.hasBackdrop && h("oec-overlay-backdrop", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.backdropElement = el;
      }, overlayConfig: this.overlayConfig, hide: this.hide.bind(this), isShowing: this.isShowing.bind(this) }), h("oec-overlay-pane", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.paneElement = el;
      }, overlayConfig: this.overlayConfig, style: { display: this.isVisible ? 'block' : 'none' }, hide: this.hide.bind(this) })));
  }
};
OecOverlayItem.style = oecOverlayItemCss;

export { OecOverlayItem as O, firstValueFrom as f };
