import { UserInfo } from '../services/UserProfileService';
export declare class OecUserIcon {
  private readonly destroy$;
  private readonly userId$;
  private readonly userProfileService;
  userInfo?: UserInfo;
  initials?: string;
  userId: string;
  watchPropertyUserId(newValue: string): void;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): any;
}
