import "./modal.css";

import { FetchDataUser } from "../../api/FetchDataUser";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { isValidFormDataUser } from "../../hooks/isValidFormDataUser";
import { Button } from "../buttons/button";
import { Popup } from "../popup/popup";

/**
 *
 */
/**
 *
 */
export class Modal {

  private modal: HTMLFormElement;

  private modal_form: HTMLFormElement;

  private close_container: HTMLElement;

  private close_button: HTMLElement;

  private modal_bg: HTMLElement;

  private submitButton: Button;

  constructor() {
    this.modal = document.querySelector(".modal") as HTMLFormElement;
    this.modal_form = document.querySelector(".form") as HTMLFormElement;
    this.close_container = document.querySelector(
      ".close_container"
    ) as HTMLElement;
    this.close_button = document.createElement("div") as HTMLElement;
    this.close_button.classList.add("close_button");
    this.close_button.innerHTML = CloseIcon;
    this.close_button.addEventListener("click", () => this.closeModal());
    this.close_container.appendChild(this.close_button);
    this.modal_bg = document.querySelector("#modal__bg") as HTMLElement;
    this.submitButton = new Button({
      text: "Submit",
      id: "submit_button",
      variant: "primary",
      isFullWidth: true,
    });
    this.modal_form.appendChild(this.submitButton.getElement());
    this.modal_form.addEventListener("submit", async (event) => {
      const validDataUser = isValidFormDataUser(event);
      if (validDataUser) {
        const result = await FetchDataUser(validDataUser);
        if (result) {
          this.closeModal();
          const popup = new Popup({
            isSuccess: true,
            text: "Ваши данные успешно отправлены",
          });
          popup.openPopup();
        } else {
          this.closeModal();
          const popup = new Popup({
            isSuccess: false,
            text: "Ваши данные не удалось отправить",
          });
          popup.openPopup();
        }
      }
    });
    this.modal_bg.addEventListener("click", () => this.closeModal());
  }

  public openModal(): void {
    this.modal.classList.remove("hidden");
    this.modal.classList.add("visible");
    document.body.classList.add("no-scroll"); // Блокируем скролл
  }

  // закрыть модальное окно
  public closeModal(): void {
    this.modal.classList.remove("visible");
    this.modal.classList.add("hidden");
    document.body.classList.remove("no-scroll"); // Разблокирование скролла
  }

  //размонтировать модальное окно
  public removeModal(): void {
    this.close_button.remove();
    this.submitButton.removeElement();
    this.modal.classList.remove("visible");
    this.modal.classList.add("hidden");
    document.body.classList.remove("no-scroll"); // Разблокирование скролла
  }

}
