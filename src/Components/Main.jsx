import { styled } from "styled-components";
import logo from "../Assets/home.jpg";
import BestSellers from "./BestSellers";

const ContainerMain = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;

const LogoImage = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 5px;
`;

const AsideContainer = styled.aside`
  width: 40%;
  height: 100%;
  padding: 20px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Main() {
  return (
    <ContainerMain>
      <LogoImage src={logo} alt="HomeLogo" />
      <AsideContainer>
        <p>
          Bienvenue dans notre restaurant familial, où le plaisir de bien manger
          est notre passion. Bon appétit !
        </p>
        <BestSellers />
      </AsideContainer>
    </ContainerMain>
  );
}

export default Main;
