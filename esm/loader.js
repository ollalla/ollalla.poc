import { B as BUILD, C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-35f2b048.js';
import { g as globalScripts } from './app-globals-9393530e.js';

/*
 Stencil Client Patch Esm v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-5fa6665a.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["oec-nav",[[1,"oec-nav",{"userId":[1,"user-id"],"enabledApps":[16],"missedNotifications":[32],"missedMessages":[32]}]]],["oec-overlay-container",[[2,"oec-overlay-container",{"overlayRefs":[32],"addOverlay":[64],"removeOverlay":[64]},[[9,"keydown","closeWithEscapeKey"]]]]],["oec-header",[[4,"oec-header",{"level":[2]}]]],["oec-modal",[[4,"oec-modal",{"type":[1],"size":[1],"visible":[1028]}]]],["oec-button",[[1,"oec-button",{"type":[1],"disabled":[4]}]]],["oec-overlay-content",[[2,"oec-overlay-content",{"overlayConfig":[16],"hide":[16]}]]],["oec-overlay-pane",[[2,"oec-overlay-pane",{"overlayConfig":[16],"hide":[16],"getArrowElement":[64]},[[1,"click","handleClick"]]]]],["oec-overlay-backdrop",[[2,"oec-overlay-backdrop",{"overlayConfig":[16],"hide":[16],"isShowing":[16]},[[1,"click","close"]]]]],["oec-overlay-item",[[2,"oec-overlay-item",{"overlayConfig":[16],"isVisible":[32],"show":[64],"hide":[64],"isShowing":[64],"getBackdropElement":[64],"getPaneElement":[64]}]]],["oec-app-launcher",[[1,"oec-app-launcher",{"enabledApps":[16],"allowedApps$":[32]}]]],["oec-nav-menu-action",[[1,"oec-nav-menu-action",{"isClickable":[4,"is-clickable"],"badgeTotal":[2,"badge-total"]}]]],["oec-nav-search",[[1,"oec-nav-search",{"isMouseOver":[32],"isForcedOpen":[32],"isFocused":[32]},[[1,"mouseover","handleMouseOver"],[1,"mouseout","handleMouseOut"],[1,"keydown","handleKeyDown"]]]]],["oec-user-icon",[[1,"oec-user-icon",{"userId":[1,"user-id"],"userInfo":[32],"initials":[32]}]]],["oec-app-card",[[1,"oec-app-card",{"appDefinition":[16]}]]],["oec-overlay-arrow",[[2,"oec-overlay-arrow",{"overlayConfig":[16]}]]]], options);
  });
};

export { defineCustomElements };
