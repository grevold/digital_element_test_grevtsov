import "./styles/global.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

document.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  header.getElement();
  const footer = new Footer();
  footer.getElement();
});
