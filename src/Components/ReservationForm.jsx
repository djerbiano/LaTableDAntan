import { useState } from "react";
import "../Styles/ReservationForm.css";
import tables from "../table";
import { AiOutlineClose } from "react-icons/ai";
import ReservationValidee from "./ReservationValidee";

function ReservationForm({ toggleReservation, tableId }) {
  const [reservationValidee, setReservationValidee] = useState(true);
  const allCréneaux = [
    ...new Set(tables.flatMap((table) => table.créneauxDisponible)),
  ];

  let table = tables.find((table) => table.id === tableId);
  let numberOfSeats = table.nombrePersonnes;

  let generateInputForNumberOfSeats = (numberOfSeats) => {
    const inputs = [];
    for (let i = 0; i < numberOfSeats; i++) {
      inputs.push(
        <input key={i} type="text" placeholder="Entrez votre prénom" />
      );
    }
    return inputs;
  };

  let getDataReservation = (e) => {
    e.preventDefault();
    let allInput = document.querySelectorAll("input");
    let allInputValues = [];
    let hasEmptyField = false;

    allInput.forEach((inputElement) => {
      if (inputElement.value.trim() !== "") {
        allInputValues.push(inputElement.value);
      } else {
        hasEmptyField = true;
      }
    });

    if (hasEmptyField) {
      alert("Vous devez remplir tous les champs.");
    } else {
      console.log(allInputValues);
      setReservationValidee(false);
    }
  };

  return reservationValidee ? (
    <div className="ContainerComponentForm">
      <div className="closeReservation" onClick={toggleReservation}>
        <AiOutlineClose />
      </div>

      <div className="ContainerForm">
        <h5>Veuillez saisir vos coordonnées:</h5>
        <br />
        <div className="ContainerInput">
          {generateInputForNumberOfSeats(numberOfSeats)}
        </div>
        <br />
        <h5>Choisir un crénau</h5>
        <br />
        <div className="ContainerCréneaux">
          <form>
            <select>
              {allCréneaux.map((créneau) => (
                <option key={créneau} value={`${créneau}H`}>
                  {`${créneau}H`}
                </option>
              ))}
            </select>
            <button type="submit" onClick={getDataReservation}>
              Réserver
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <ReservationValidee />
  );
}

export default ReservationForm;
