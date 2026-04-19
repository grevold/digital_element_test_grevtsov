import "./styles/global.css";
import { Capability } from "./components/capability/capability";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

document.addEventListener("DOMContentLoaded", () => {
  new Nav();
  const header = new Header();
  header.getElement();
  new Capability();
  const footer = new Footer();
  footer.getElement();
});
