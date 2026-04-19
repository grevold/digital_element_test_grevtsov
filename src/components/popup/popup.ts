import { Button } from "../buttons/button";
import "./popup.css";

interface IPopupOptions {
  isSuccess: boolean;
  text: string;
}

/**
 *
 */
export class Popup {

  private popup: HTMLElement;

  private popup_container: HTMLElement;

  private popup_bg: HTMLElement;

  private popup_text: HTMLSpanElement;

  private isSuccess: boolean;

  private closeButton: Button;

  constructor(options: IPopupOptions) {
    this.isSuccess = options.isSuccess;
    this.popup = document.querySelector(".popup") as HTMLElement;
    this.popup_container = document.querySelector(
      ".popup__container__content"
    ) as HTMLElement;
    this.popup_text = document.querySelector("#popup__text") as HTMLSpanElement;
    this.popup_bg = document.querySelector("#popup__bg") as HTMLElement;
    this.popup_bg.addEventListener("click", () => this.closePopup());

    this.closeButton = new Button({
      text: "ОК",
      id: "open_modal_button_footer",
      variant: "primary",
      onClick: () => this.closePopup(),
    });

    this.popup_container.appendChild(this.closeButton.getElement());

    if (this.popup_container) {
      this.init(options);
    }
  }

  private init(options: IPopupOptions): void {
    if (options.isSuccess) {
      this.popup_container.classList.add("success");
      this.popup_text.textContent = "";
      this.popup_text.classList.add("success_text");
      this.popup_text.textContent = options.text;
    } else {
      this.popup_container.classList.add("reject");
      this.popup_text.textContent = "";
      this.popup_text.classList.add("reject_text");
      this.popup_text.textContent = options.text;
    }
  }

  public openPopup(): void {
    const popup = document.querySelector(".popup") as HTMLElement;
    popup.classList.remove("hidden");
    popup.classList.add("visible");
    document.body.classList.add("no-scroll"); // Блокируем скролл
  }

  public closePopup(): void {
    this.popup_text.textContent = "";

    this.popup_container.classList.remove(
      this.isSuccess ? "success" : "reject"
    );
    this.popup_text.classList.remove(
      this.isSuccess ? "success_text" : "reject_text"
    );
    this.popup.classList.remove("visible");
    this.popup.classList.add("hidden");
    document.body.classList.remove("no-scroll"); // Разблокирование скролла
  }

  public getElement(): HTMLElement {
    return this.popup_container;
  }

}
