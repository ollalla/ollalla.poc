import { OverlayConfig, OverlayRef } from '../Overlay.types';
import './oec-overlay-item/oec-overlay-item';
export declare class OecOverlayContainer {
  private readonly render$;
  overlayRefs: OverlayRef[];
  host: HTMLOecOverlayContainerElement;
  addOverlay(overlayConfig: OverlayConfig): Promise<OverlayRef>;
  removeOverlay(ref: OverlayRef): Promise<void>;
  private waitForNextRenderAfter;
  componentDidRender(): void;
  private hasModifierKey;
  closeWithEscapeKey(event: KeyboardEvent): Promise<void>;
  render(): any;
}
