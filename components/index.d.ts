/* OEC custom elements */
export { OecAppCard as OecAppCard } from '../types/components/oec-app-card/oec-app-card';
export { OecAppLauncher as OecAppLauncher } from '../types/components/oec-app-launcher/oec-app-launcher';
export { OecButton as OecButton } from '../types/components/oec-button/oec-button';
export { OecHeader as OecHeader } from '../types/components/oec-header/oec-header';
export { OecModal as OecModal } from '../types/components/oec-modal/oec-modal';
export { OecNav as OecNav } from '../types/components/oec-nav/oec-nav';
export { OecNavMenuAction as OecNavMenuAction } from '../types/components/oec-nav-menu-action/oec-nav-menu-action';
export { NavSearch as OecNavSearch } from '../types/components/oec-nav-search/oec-nav-search';
export { OecOverlayArrow as OecOverlayArrow } from '../types/components/oec-overlay-arrow/oec-overlay-arrow';
export { OecOverlayBackdrop as OecOverlayBackdrop } from '../types/components/oec-overlay-backdrop/oec-overlay-backdrop';
export { OecOverlayContainer as OecOverlayContainer } from '../types/components/oec-overlay-container/oec-overlay-container';
export { OecOverlayContent as OecOverlayContent } from '../types/components/oec-overlay-content/oec-overlay-content';
export { OecOverlayItem as OecOverlayItem } from '../types/components/oec-overlay-item/oec-overlay-item';
export { OecOverlayPane as OecOverlayPane } from '../types/components/oec-overlay-pane/oec-overlay-pane';
export { OecUserIcon as OecUserIcon } from '../types/components/oec-user-icon/oec-user-icon';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
