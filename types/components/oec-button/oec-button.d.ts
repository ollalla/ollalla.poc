import { ComponentInterface } from "../../stencil-public-runtime";
export declare class OecButton implements ComponentInterface {
  /**
   * The type of button to display. Possible values are: primary, secondary, or tertiary
   */
  type: string;
  /**
   * This value sets whether the button should be disabled or not
   */
  disabled: boolean;
  render(): any;
}
