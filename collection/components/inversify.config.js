import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./inversify.types";
import { AppService } from "./services/AppService";
const myContainer = new Container();
myContainer.bind(TYPES.IAppService).to(AppService);
export { myContainer, TYPES };
