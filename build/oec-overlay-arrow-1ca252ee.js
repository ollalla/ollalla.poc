import { r as registerInstance, h, e as Host } from './index-5e7aa73a.js';

const oecOverlayArrowCss = ".sc-oec-overlay-arrow-h{position:absolute;background:var(--oec-overlay-background);width:8px;height:8px;transform:rotate(45deg)}";

const OecOverlayArrow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null));
  }
};
OecOverlayArrow.style = oecOverlayArrowCss;

export { OecOverlayArrow as O };
