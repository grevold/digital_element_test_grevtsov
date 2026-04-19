import "./header.css";
import { GreetingIllustration } from "../../assets/illustrations/GreetingIllustration";
import { GreetingIllustrationWidthAndHeight } from "../../hooks/GreetingIllustrationWidthAndHeight";
import { Button } from "../buttons/button";

/**
 *
 */
export class Header {

  private header: HTMLElement;

  private ctaButton: Button;

  private header_container_greeting: HTMLElement;

  private header_container_greeting_image: HTMLElement;

  constructor() {
    this.header = document.querySelector(".header") as HTMLElement;
    this.header_container_greeting = document.querySelector(
      ".header__container__greeting"
    ) as HTMLElement;
    this.header_container_greeting_image = document.querySelector(
      ".header__container__greeting__image"
    ) as HTMLElement;

    this.header_container_greeting_image.innerHTML = GreetingIllustration(
      GreetingIllustrationWidthAndHeight()
    );

    this.ctaButton = new Button({
      text: "See Our Project",
      id: "open_modal_button_header",
      variant: "primary",
    });

    this.header_container_greeting.appendChild(this.ctaButton.getElement());
  }

  public getElement(): HTMLElement {
    return this.header;
  }

}
