import { LogoReverse } from "../../assets/logo/LogoReverse";
import { Button } from "../buttons/button";
import { Modal } from "../modal/modal";
import "./footer.css";

/**
 *
 */
export class Footer {

  private footer: HTMLElement;

  private footer_content_container: HTMLElement;

  private footer_content_container_cta_block: HTMLElement;

  private ctaButton: Button;

  private modal: Modal;

  private logo_reverse: HTMLElement;

  constructor() {
    this.footer = document.querySelector(".footer") as HTMLElement;
    
    this.footer_content_container = document.querySelector(
      ".footer__content__container"
    ) as HTMLElement;
    this.footer_content_container_cta_block = document.querySelector(
      ".footer__content__container__cta__block"
    ) as HTMLElement;


    this.modal = new Modal();

    this.ctaButton = new Button({
      text: "Let`s Talk",
      id: "open_modal_button_footer",
      variant: "primary",
      onClick: () => this.modal.openModal(),
    });

    this.footer_content_container_cta_block.appendChild(this.ctaButton.getElement());

    this.logo_reverse = document.querySelector(".logo__reverse") as HTMLElement;
    this.logo_reverse.innerHTML = LogoReverse;
  }

  public getElement(): HTMLElement {
    return this.footer;
  }

}
