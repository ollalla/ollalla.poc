import { EventEmitter } from '../../../../stencil-public-runtime';
import { OverlayConfig } from '../../Overlay.types';
import './oec-overlay-backdrop/oec-overlay-backdrop';
import './oec-overlay-pane/oec-overlay-pane';
export declare class OecOverlayItem {
  private readonly id;
  private readonly render$;
  private backdropElement;
  private paneElement;
  overlayConfig: OverlayConfig;
  isVisible: boolean;
  closed: EventEmitter<void>;
  show(): Promise<void>;
  hide(): Promise<void>;
  isShowing(): Promise<boolean>;
  getBackdropElement(): Promise<HTMLOecOverlayBackdropElement>;
  getPaneElement(): Promise<HTMLOecOverlayPaneElement>;
  private waitForNextRenderAfter;
  componentDidRender(): void;
  render(): any;
}
