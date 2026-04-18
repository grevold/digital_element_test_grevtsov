import "./nav.css";
import { MenuBurger } from "../../assets/icons/MenuBurger";
import { Logo } from "../../assets/logo/Logo";

/**
 *
 */
export const Nav = () => {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.innerHTML = Logo;
  }
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.innerHTML = MenuBurger;
  }
};
