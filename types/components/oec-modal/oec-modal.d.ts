import { ComponentInterface, EventEmitter } from "../../stencil-public-runtime";
export declare class OecModal implements ComponentInterface {
  private modal;
  element: HTMLOecModalElement;
  /**
   * The type of header to display. Possible values are modal or dialog
   */
  type: string;
  /**
   * The size of modal to display. Possible values are small, medium, or large
   */
  size: string;
  /**
   * Toggle the visibility of the modal
   */
  visible: boolean;
  /**
   * Communicate to parent component that the modal has been closed
   */
  close: EventEmitter<boolean>;
  visibleChange(newValue: boolean): void;
  componentDidLoad(): void;
  private onClickClose;
  render(): any;
}
