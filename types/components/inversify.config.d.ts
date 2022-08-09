import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./inversify.types";
import { IAppService, AppDefinition } from "./inversify.interfaces";
declare const myContainer: Container;
export { myContainer, TYPES, IAppService, AppDefinition };
