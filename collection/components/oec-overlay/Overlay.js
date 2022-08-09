import { take } from 'rxjs/operators';
import { computePosition, offset, flip, shift, arrow } from '@floating-ui/dom';
const defaultOverlayConfig = {
  disableClose: false,
  hasBackdrop: false,
  hasArrow: false
};
function positionBehavior(events, button, tooltip, arrowElement) {
  const update = async () => {
    const { x, y, placement, middlewareData } = await computePosition(button, tooltip, {
      placement: 'bottom-end',
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        ...(arrowElement ? [arrow({ element: arrowElement })] : [])
      ]
    });
    Object.assign(tooltip.style, {
      left: `${x}px`,
      top: `${y}px`
    });
    if (arrowElement) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      Object.assign(arrowElement.style, {
        left: arrowX !== null ? `${arrowX}px` : '',
        top: arrowY !== null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px'
      });
    }
  };
  // eslint-disable-next-line no-undef
  events.forEach(([event, listener, el, options]) => {
    (el || button).addEventListener(event, listener, options || { passive: true });
  });
  return {
    update,
    unsubscribe: () => {
      events.forEach(([event, listener, el]) => {
        (el || button).removeEventListener(event, listener);
      });
    }
  };
}
export class Overlay {
  async attach(to, config) {
    let overlayConfig = Object.assign(Object.assign({}, defaultOverlayConfig), config);
    const middleware = config.middleware || [];
    for (const ware of middleware) {
      overlayConfig = Object.assign(Object.assign({}, overlayConfig), ware.mergeOverlayConfig);
    }
    const host = this._createHostElement();
    const ref = await host.addOverlay(overlayConfig);
    const item = await ref.getItemElement();
    const pane = await item.getPaneElement();
    const arrow = await pane.getArrowElement();
    const unsubs = middleware.map(ware => {
      const def = ware.register(item);
      const behavior = positionBehavior(def.events, to, pane, arrow);
      const sub = def.update$.subscribe(() => {
        behavior.update();
      });
      return () => {
        def.unsubscribe();
        sub.unsubscribe();
        behavior.unsubscribe();
      };
    });
    ref.destroyStarted().pipe(take(1)).subscribe(() => {
      for (const unsub of unsubs) {
        unsub();
      }
    });
    return ref;
  }
  // eslint-disable-next-line no-undef
  _createHostElement() {
    const containerClass = 'oec-overlay-container';
    // eslint-disable-next-line no-undef
    const found = Array.from(document.querySelectorAll(containerClass));
    if (found.length === 0) {
      const container = document.createElement(containerClass);
      document.body.appendChild(container);
      return container;
    }
    return found[0];
  }
}
export default new Overlay();
