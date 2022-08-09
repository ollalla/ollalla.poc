export interface UserInfo {
  id: string;
  displayName: string;
}
export declare class UserProfileService {
  getInfo(uid: string): Promise<UserInfo>;
}
