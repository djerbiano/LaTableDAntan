import "../Styles/ReservationForm.css";
import tables from "../table";
import { AiOutlineClose } from "react-icons/ai";

function ReservationForm({ toggleReservation, tableId }) {
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

  return (
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
            <button type="submit">Réserver</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
