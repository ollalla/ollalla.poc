'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-50559265.js');
const appGlobals = require('./app-globals-69735395.js');

/*
 Stencil Client Patch Esm v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (index.BUILD.cssVarShim && !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-0add97ce.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["oec-nav.cjs",[[1,"oec-nav",{"userId":[1,"user-id"],"enabledApps":[16],"missedNotifications":[32],"missedMessages":[32]}]]],["oec-overlay-container.cjs",[[2,"oec-overlay-container",{"overlayRefs":[32],"addOverlay":[64],"removeOverlay":[64]},[[9,"keydown","closeWithEscapeKey"]]]]],["oec-header.cjs",[[4,"oec-header",{"level":[2]}]]],["oec-modal.cjs",[[4,"oec-modal",{"type":[1],"size":[1],"visible":[1028]}]]],["oec-button.cjs",[[1,"oec-button",{"type":[1],"disabled":[4]}]]],["oec-overlay-content.cjs",[[2,"oec-overlay-content",{"overlayConfig":[16],"hide":[16]}]]],["oec-overlay-pane.cjs",[[2,"oec-overlay-pane",{"overlayConfig":[16],"hide":[16],"getArrowElement":[64]},[[1,"click","handleClick"]]]]],["oec-overlay-backdrop.cjs",[[2,"oec-overlay-backdrop",{"overlayConfig":[16],"hide":[16],"isShowing":[16]},[[1,"click","close"]]]]],["oec-overlay-item.cjs",[[2,"oec-overlay-item",{"overlayConfig":[16],"isVisible":[32],"show":[64],"hide":[64],"isShowing":[64],"getBackdropElement":[64],"getPaneElement":[64]}]]],["oec-app-launcher.cjs",[[1,"oec-app-launcher",{"enabledApps":[16],"allowedApps$":[32]}]]],["oec-nav-menu-action.cjs",[[1,"oec-nav-menu-action",{"isClickable":[4,"is-clickable"],"badgeTotal":[2,"badge-total"]}]]],["oec-nav-search.cjs",[[1,"oec-nav-search",{"isMouseOver":[32],"isForcedOpen":[32],"isFocused":[32]},[[1,"mouseover","handleMouseOver"],[1,"mouseout","handleMouseOut"],[1,"keydown","handleKeyDown"]]]]],["oec-user-icon.cjs",[[1,"oec-user-icon",{"userId":[1,"user-id"],"userInfo":[32],"initials":[32]}]]],["oec-app-card.cjs",[[1,"oec-app-card",{"appDefinition":[16]}]]],["oec-overlay-arrow.cjs",[[2,"oec-overlay-arrow",{"overlayConfig":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
