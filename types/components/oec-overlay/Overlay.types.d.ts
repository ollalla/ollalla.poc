import { Observable, Subject } from "rxjs";
export declare type OverlayMiddleWareEvents = Array<[string, (_event?: unknown) => void, (Element | Window)?, AddEventListenerOptions?]>;
export declare type OverlayMiddleWare = {
  mergeOverlayConfig: Exclude<Partial<OverlayConfig>, 'middleware'>;
  register: (_item: HTMLOecOverlayItemElement) => ({
    update$: Subject<void>;
    events: OverlayMiddleWareEvents;
    unsubscribe: () => void;
  });
};
export interface OverlayConfig {
  template: string | ((_actions: {
    hide: () => Promise<void>;
  }) => any);
  closeOnNavigation?: boolean;
  hasArrow?: boolean;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  middleware?: OverlayMiddleWare[];
}
export declare class OverlayRef {
  private readonly _host;
  private readonly _overlayConfig;
  private readonly _destroyStarted;
  constructor(_host: HTMLOecOverlayContainerElement, _overlayConfig: OverlayConfig);
  getItemElement(): Promise<HTMLOecOverlayItemElement>;
  getConfig(): OverlayConfig;
  destroyStarted(): Observable<void>;
  dispose(): void;
}
