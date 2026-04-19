import "./nav.css";
import { MenuBurger } from "../../assets/icons/MenuBurger";
import { Logo } from "../../assets/logo/Logo";

/**
 *
 */
export class Nav {

  private logo: HTMLElement;

  private menu: HTMLElement;

  constructor() {
    this.logo = document.querySelector(".logo") as HTMLElement;
    this.menu = document.querySelector(".menu") as HTMLElement;

    this.logo.innerHTML = Logo;
    this.menu.innerHTML = MenuBurger;
  }

  
}
