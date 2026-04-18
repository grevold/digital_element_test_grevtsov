import "./styles/global.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Nav } from "./components/nav/nav";

document.addEventListener("DOMContentLoaded", () => {
  Header();
  Nav();
  Footer();
});
