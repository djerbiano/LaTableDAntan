import "../Styles/ReservationForm.css";
import tables from "../table";
import { AiOutlineClose } from "react-icons/ai";
function ReservationForm({ toggleReservation }) {
  const allCréneaux = [
    ...new Set(tables.flatMap((table) => table.créneauxDisponible)),
  ];
  return (
    <div className="ContainerComponentForm">
      <div className="closeReservation" onClick={toggleReservation}>
        <AiOutlineClose />
      </div>

      <div className="ContainerForm">
        <h5>Veuillez saisir vos coordonnées :</h5>
        <br />
        <div className="ContainerInput">
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
          <input type="text" placeholder="Entrez votre prénom" />
        </div>
        <br />
        <h5>Choisir un crénaux</h5>
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
