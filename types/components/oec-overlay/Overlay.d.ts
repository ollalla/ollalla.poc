import { OverlayConfig, OverlayRef } from "./Overlay.types";
export declare class Overlay {
  attach(to: HTMLElement, config: OverlayConfig): Promise<OverlayRef>;
  private _createHostElement;
}
declare const _default: Overlay;
export default _default;
