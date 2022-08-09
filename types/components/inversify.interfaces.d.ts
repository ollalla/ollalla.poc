export interface AppDefinition {
  name: string;
  landingUrl: string;
  marketingUrl: string;
  description: string;
  isOpsProduct: boolean;
  order: number;
}
export interface IAppService {
  getAppListing(): Promise<AppDefinition[]>;
}
