import "./nav.css";
import { MenuBurger } from "../../assets/icons/MenuBurger";
import { Logo } from "../../assets/logo/Logo";

/**
 *
 */
export class Nav {

  private nav: HTMLElement;

  private logo: HTMLElement;

  private menu: HTMLElement;

  constructor() {
    this.nav = document.querySelector(".nav") as HTMLElement;
    this.logo = document.querySelector(".logo") as HTMLElement;
    this.menu = document.querySelector(".menu") as HTMLElement;

    this.logo.innerHTML = Logo;
    this.menu.innerHTML = MenuBurger;

    let lastScrollTop = 0;

    document.body.addEventListener(
      "scroll", () => {
        const currentScroll = window.pageYOffset || document.body.scrollTop;

        if (currentScroll > lastScrollTop) {
          // Скроллим вниз
          this.nav.classList.add("hidden");
        } else {
          // Скроллим вверх
          this.nav.classList.remove("hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств
      }, false
    );
  }

}
