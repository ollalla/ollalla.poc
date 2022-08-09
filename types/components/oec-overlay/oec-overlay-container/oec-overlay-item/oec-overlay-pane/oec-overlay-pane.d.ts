import { OverlayConfig } from '../../../Overlay.types';
import './oec-overlay-arrow/oec-overlay-arrow';
import './oec-overlay-content/oec-overlay-content';
export declare class OecOverlayPane {
  private arrowElement;
  overlayConfig: OverlayConfig;
  hide: () => Promise<void>;
  handleClick(ev: MouseEvent): void;
  getArrowElement(): Promise<HTMLOecOverlayArrowElement>;
  render(): any;
}
