import { OverlayConfig } from '../../../Overlay.types';
export declare class OecOverlayBackdrop {
  host: HTMLOecOverlayBackdropElement;
  overlayConfig: OverlayConfig;
  hide: () => Promise<void>;
  isShowing: () => Promise<boolean>;
  close(): Promise<void>;
  render(): any;
}
