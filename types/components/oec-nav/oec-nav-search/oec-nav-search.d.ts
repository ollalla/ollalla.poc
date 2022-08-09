import { EventEmitter } from '../../../stencil-public-runtime';
export declare class NavSearch {
  private searchInput;
  isMouseOver: boolean;
  isForcedOpen: boolean;
  isFocused: boolean;
  search: EventEmitter<string>;
  private readonly destroy$;
  private readonly key$;
  get isExpanded(): boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleMouseOver(): void;
  handleMouseOut(): void;
  handleKeyDown(ev: KeyboardEvent): void;
  private handleExitSearch;
  private onMagnifyingGlassSolidClicked;
  private onSearchInputFocused;
  private onSearchInputBlurred;
  render(): any;
}
