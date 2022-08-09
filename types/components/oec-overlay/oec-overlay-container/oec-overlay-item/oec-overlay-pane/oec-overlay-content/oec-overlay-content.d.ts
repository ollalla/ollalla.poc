import { OverlayConfig } from '../../../../Overlay.types';
export declare class OecOverlayContent {
  overlayConfig: OverlayConfig;
  hide: () => Promise<void>;
  render(): any;
}
