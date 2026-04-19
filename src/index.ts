import "./styles/global.css";
import { Capability } from "./components/capability/capability";
import { Clients } from "./components/clients/clients";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Nav } from "./components/nav/nav";

document.addEventListener("DOMContentLoaded", () => {
  new Nav();
  const header = new Header();
  header.getElement();
  new Capability();
  new Clients();
  const footer = new Footer();
  footer.getElement();
});
