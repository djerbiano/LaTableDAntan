
import picture1 from "../Assets/restauraninfo1.jpg";
import picture2 from "../Assets/restauraninfo2.jpg";

import styled from "styled-components";


const ContainerQuisommesnous = styled.div`
  height: 80%;
  width: 99%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RestaurantInfo = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TextQuisommesnous = styled.div`
  width: 50%;
`;

const PictureQuisommesnous = styled.div`
  width: 20%;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

function Quisommesnous() {
  return (
    <ContainerQuisommesnous>
      <RestaurantInfo>
        <TextQuisommesnous>
          <p>
            Bienvenue dans notre restaurant familial, où le plaisir de bien
            manger est notre passion ! Chez nous, la cuisine est une véritable
            histoire d amour, transmise de génération en génération. Chaque plat
            est préparé avec soin et dévouement, mettant en valeur les saveurs
            authentiques qui feront voyager vos papilles.
          </p>
        </TextQuisommesnous>
        <PictureQuisommesnous>
          <img src={picture2} alt="p" />
        </PictureQuisommesnous>
      </RestaurantInfo>

      <RestaurantInfo>
        <PictureQuisommesnous>
          <img src={picture1} alt="p" />
        </PictureQuisommesnous>
        <TextQuisommesnous>
          <p>
            Installez-vous confortablement et laissez-vous séduire par notre
            cuisine gourmande, concoctée avec amour et attention. Nous sommes
            ravis de vous accueillir dans notre oasis culinaire, où chaque repas
            est une expérience chaleureuse et mémorable. <br /> <br />
            Bon appétit !
          </p>
        </TextQuisommesnous>
      </RestaurantInfo>
    </ContainerQuisommesnous>
  );
}
export default Quisommesnous;
