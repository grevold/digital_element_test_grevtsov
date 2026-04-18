import "./header.css";
import { GreetingIllustration } from "../../assets/illustrations/GreetingIllustration";

/**
 *
 */
export const Header = () => {
  const button = document.querySelector("#CTA_button");
  if (button) {
    button.addEventListener("click", () => {
      alert("Нажали на кнопку ");
    });
  }
  const illustration = document.querySelector(
    ".header__container__greeting__image"
  );
  if (illustration) {
    illustration.innerHTML = GreetingIllustration;
  }
};
