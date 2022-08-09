import { EventEmitter } from "../../stencil-public-runtime";
import { AppDefinition } from "../inversify.config";
export declare class OecAppLauncher {
  enabledApps: string[];
  private readonly destroy$;
  private readonly appService;
  appCardClicked: EventEmitter<string>;
  allowedApps$: AppDefinition[];
  private viewAllVisible;
  private hasOps;
  private hasOec;
  private oneColumn;
  private iconStyleOps;
  private iconStyleOec;
  private onAppCardClicked;
  private handleViewAll;
  constructor();
  connectedCallback(): void;
  private appTemplateRender;
  disconnectedCallback(): void;
  render(): any;
}
