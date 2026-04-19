import "./button.css";

type TButtonVariant = "primary" | "secondary";

interface IButtonOptions {
  text: string;
  id: string;
  variant?: TButtonVariant;
  disabled?: boolean;
  isFullWidth?: boolean;
  onClick?: (e: MouseEvent) => void;
}

/**
 *
 */
export class Button {

  private element: HTMLButtonElement;

  constructor(options: IButtonOptions) {
    this.element = document.createElement("button");
    this.init(options);
  }

  private init(options: IButtonOptions): void {
    const {
      text,
      id,
      variant = "primary",
      disabled = false,
      onClick,
      isFullWidth,
    } = options;

    this.element.textContent = text;
    this.element.classList.add("button", `button--${variant}`);

    this.element.setAttribute("id", id);

    if (isFullWidth) {
      this.element.classList.add("button--full-width");
    }

    if (disabled) {
      this.setDisabled(true);
    }

    if (onClick) {
      this.element.addEventListener("click", onClick);
    }
  }

  public setDisabled(disabled: boolean): void {
    if (disabled) {
      this.element.classList.add("button--disabled");
      this.element.setAttribute("disabled", "true");
    } else {
      this.element.classList.remove("button--disabled");
      this.element.removeAttribute("disabled");
    }
  }

  public setText(text: string): void {
    this.element.textContent = text;
  }

  public setPreloader(preloader: string): void {
    const preloader_container = document.createElement("div");
    preloader_container.classList.add("preloader");
    this.element.textContent = "";
    preloader_container.innerHTML = preloader;
    this.element.appendChild(preloader_container);
  }

  public getElement(): HTMLButtonElement {
    return this.element;
  }

  public removeElement(): void {
    this.element.remove();
  }

}
