import { AppDefinition, IAppService } from "../inversify.interfaces";
export declare class AppService implements IAppService {
  getAppListing(): Promise<AppDefinition[]>;
}
