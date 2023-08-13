import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ValidationReservationContainer = styled.div`
  width: 100wv;
  height: 100vh;
  background-color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ValidationReservationContent = styled.div`
  width: 50%;
  min-height: 50%;
  background-color: #bf6702;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const CloseModal = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2em;
  cursor: pointer;

  svg:hover {
    fill: red;
    scale: 1.4;
    transition: 0.3s;
  }
`;

function ReservationValidee() {
  const navigate = useNavigate();
  return (
    <ValidationReservationContainer>
      <ValidationReservationContent>
        <CloseModal onClick={() => navigate("/")}>
          <AiOutlineClose />
        </CloseModal>

        <h1>Votre réservation est validée !</h1>
        <h1>Merci de votre visite </h1>
      </ValidationReservationContent>
    </ValidationReservationContainer>
  );
}

export default ReservationValidee;
