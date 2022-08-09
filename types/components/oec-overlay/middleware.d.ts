import { OverlayMiddleWare } from "./Overlay.types";
export interface TooltipConfiguration {
  showDelay: number;
  hideDelay: number;
}
export declare function tooltip(configuration?: Partial<TooltipConfiguration>): OverlayMiddleWare;
export declare function popover(): OverlayMiddleWare;
