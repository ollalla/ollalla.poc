import { EventEmitter } from '../../stencil-public-runtime';
import './oec-nav-menu-action/oec-nav-menu-action';
import '../oec-user-icon/oec-user-icon';
export declare class OecNav {
  private readonly overlayRefs;
  private readonly destroy$;
  notificationsClicked: EventEmitter<void>;
  messagesClicked: EventEmitter<void>;
  helpClicked: EventEmitter<void>;
  bentoClicked: EventEmitter<void>;
  missedNotifications: number;
  missedMessages: number;
  userId: string;
  enabledApps: string[];
  connectedCallback(): void;
  disconnectedCallback(): void;
  private onBentoClicked;
  private onHelpClick;
  private onNotificationsClicked;
  private onMessagesClicked;
  private attachMenuItemBehaviors;
  render(): any;
}
