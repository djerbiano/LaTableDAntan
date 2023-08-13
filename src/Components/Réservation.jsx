import "../Styles/Réservation.css";
import ReservationForm from "./ReservationForm";
import { useState } from "react";
import tables from "../table";

function Réservation() {
  const [Reservation, setReservation] = useState(true);
  const [tableId, setTableId] = useState(null);

  const toggleReservationMode = (event) => {
    setReservation(!Reservation);
    const getTableId = event.currentTarget.querySelector("h1");
    if (getTableId) {
      let tableId = getTableId.textContent;
      setTableId(parseInt(tableId));
    }
  };

  return (
    <>
      {Reservation ? (
        <div className="ContainerReservation">
          <div className="containerTable">
            <div className="lineTable1">
              <div
                className="table1"
                onClick={(event) => toggleReservationMode(event)}
              >
                <div className="table1-10-12Chaises">
                  <h1 className="tableNumber">{tables[0].id}</h1>
                </div>
                <div className="table1-10-12chaise1"></div>
                <div className="table1-10-12chaise2"></div>
                <div className="table1-10-12chaise3"></div>
                <div className="table1-10-12chaise4"></div>
              </div>

              <div className="table2" onClick={toggleReservationMode}>
                <div className="table2Chaises">
                  <h1 className="tableNumber">{tables[1].id}</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>

              <div className="table3" onClick={toggleReservationMode}>
                <div className="table3Chaises">
                  <h1 className="tableNumber">{tables[2].id}</h1>
                </div>
                <div className="table3chaise1"></div>
                <div className="table3chaise2"></div>
                <div className="table3chaise3"></div>
                <div className="table3chaise4"></div>
              </div>

              <div className="table4" onClick={toggleReservationMode}>
                <div className="table2Chaises">
                  <h1 className="tableNumber">{tables[3].id}</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>

              <div className="table5" onClick={toggleReservationMode}>
                <div className="table2Chaises">
                  <h1 className="tableNumber">{tables[4].id}</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>
            </div>

            <div className="lineTable2">
              <div className="table6" onClick={toggleReservationMode}>
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">{tables[5].id}</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>

              <div className="table7" onClick={toggleReservationMode}>
                <div className="table7Chaises">
                  <h1 className="tableNumber">{tables[6].id}</h1>
                </div>
                <div className="table7Chaise1"></div>
                <div className="table7Chaise2"></div>
                <div className="table7Chaise3"></div>
                <div className="table7Chaise4"></div>
              </div>

              <div className="table8" onClick={toggleReservationMode}>
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">{tables[7].id}</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>
              <div className="table9" onClick={toggleReservationMode}>
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">{tables[8].id}</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>
              <div className="table10" onClick={toggleReservationMode}>
                <div className="table1-10-12Chaises">
                  <h1 className="tableNumber">{tables[9].id}</h1>
                </div>
                <div className="table1-10-12chaise1"></div>
                <div className="table1-10-12chaise2"></div>
                <div className="table1-10-12chaise3"></div>
                <div className="table1-10-12chaise4"></div>
              </div>
            </div>
            <div className="lineTable3">
              <div className="leftrange">
                <div className="table11" onClick={toggleReservationMode}>
                  <div className="table7Chaises">
                    <h1 className="tableNumber">{tables[10].id}</h1>
                  </div>
                  <div className="table7Chaise1"></div>
                  <div className="table7Chaise2"></div>
                  <div className="table7Chaise3"></div>
                  <div className="table7Chaise4"></div>
                </div>

                <div className="table12" onClick={toggleReservationMode}>
                  <div className="table1-10-12Chaises">
                    <h1 className="tableNumber">{tables[11].id}</h1>
                  </div>
                  <div className="table1-10-12chaise1"></div>
                  <div className="table1-10-12chaise2"></div>
                  <div className="table1-10-12chaise3"></div>
                  <div className="table1-10-12chaise4"></div>
                </div>
                <div className="table13">
                  <h5>ENTREE</h5>

                  <div className="containerEntree">
                    <div className="entree"></div>
                  </div>

                  <div className="tapisdentree"></div>
                </div>
              </div>
              <div className="rightrange">
                <div className="table14" onClick={toggleReservationMode}>
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">{tables[12].id}</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div className="table15" onClick={toggleReservationMode}>
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">{tables[13].id}</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div className="table16" onClick={toggleReservationMode}>
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">{tables[14].id}</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div className="table17" onClick={toggleReservationMode}>
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">{tables[15].id}</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ReservationForm
          toggleReservation={toggleReservationMode}
          tableId={tableId}
        />
      )}
    </>
  );
}

export default Réservation;
