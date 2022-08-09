import { merge, ReplaySubject, Subject, takeUntil, of as observableOf } from "rxjs";
import { delay, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
export function tooltip(configuration) {
  const defaultConfig = { showDelay: 1000, hideDelay: 0 };
  const config = Object.assign(Object.assign({}, defaultConfig), configuration);
  return {
    mergeOverlayConfig: { hasBackdrop: false },
    // eslint-disable-next-line no-undef
    register: (itemElement) => {
      const update$ = new Subject();
      const show$ = new Subject();
      const hide$ = new Subject();
      const destroy$ = new ReplaySubject(1);
      const showTooltip = async () => {
        show$.next();
      };
      const hideTooltip = async () => {
        hide$.next();
      };
      merge(show$.pipe(map(() => true)), hide$.pipe(map(() => false)))
        .pipe(switchMap(isExpectedToShow => observableOf(isExpectedToShow).pipe(delay(isExpectedToShow ? config.showDelay : config.hideDelay))), distinctUntilChanged(), takeUntil(destroy$)).subscribe(async (isExpectedToShow) => {
        if (isExpectedToShow) {
          await itemElement.show();
          update$.next();
        }
        else {
          await itemElement.hide();
        }
      });
      const events = [
        ['mouseenter', showTooltip],
        ['mouseleave', hideTooltip],
        ['focus', showTooltip],
        ['blur', hideTooltip]
      ];
      return {
        update$,
        events,
        unsubscribe: () => {
          update$.complete();
          show$.complete();
          hide$.complete();
          destroy$.next();
          destroy$.complete();
        }
      };
    }
  };
}
export function popover() {
  return {
    mergeOverlayConfig: { hasBackdrop: true },
    // eslint-disable-next-line no-undef
    register: (itemElement) => {
      const update$ = new Subject();
      const showPopover = async () => {
        await itemElement.show();
        update$.next();
      };
      const events = [
        ['click', showPopover]
      ];
      return {
        update$,
        events,
        unsubscribe: () => {
          update$.complete();
        }
      };
    }
  };
}
