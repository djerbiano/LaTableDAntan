import "../Styles/Main.css";
import logo from "../Assets/home.jpg";
import BestSellers from "./BestSellers";

function Main() {
  return (
    <div className="ContainerMain">
      <img src={logo} alt="HomeLogo" />
      <aside>
        <p>
          Bienvenue dans notre restaurant familial, où le plaisir de bien manger
          est notre passion. Bon appétit !
        </p>
        <BestSellers />
      </aside>
    </div>
  );
}

export default Main;
