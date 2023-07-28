import "../Styles/Réservation.css";
import ReservationForm from "./ReservationForm";
import { useState } from "react";
function Réservation() {
  const [Reservation, setReservation] = useState(true);

  const changerDeModeTableVersReservation = () => {
    setReservation(!Reservation);
  };

  return (
    <>
      {Reservation ? (
        <div className="ContainerReservation">
          <div className="containerTable">
            <div className="lineTable1">
              <div
                className="table1"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table1-10-12Chaises">
                  <h1 className="tableNumber">1</h1>
                </div>
                <div className="table1-10-12chaise1"></div>
                <div className="table1-10-12chaise2"></div>
                <div className="table1-10-12chaise3"></div>
                <div className="table1-10-12chaise4"></div>
              </div>

              <div
                className="table2"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table2Chaises">
                  <h1 className="tableNumber">2</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>

              <div
                className="table3"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table3Chaises">
                  <h1 className="tableNumber">3</h1>
                </div>
                <div className="table3chaise1"></div>
                <div className="table3chaise2"></div>
                <div className="table3chaise3"></div>
                <div className="table3chaise4"></div>
              </div>

              <div
                className="table4"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table2Chaises">
                  <h1 className="tableNumber">4</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>

              <div
                className="table5"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table2Chaises">
                  <h1 className="tableNumber">5</h1>
                </div>
                <div className="table2chaise1"></div>
                <div className="table2chaise2"></div>
                <div className="table2chaise3"></div>
              </div>
            </div>

            <div className="lineTable2">
              <div
                className="table6"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">6</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>

              <div
                className="table7"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table7Chaises">
                  <h1 className="tableNumber">7</h1>
                </div>
                <div className="table7Chaise1"></div>
                <div className="table7Chaise2"></div>
                <div className="table7Chaise3"></div>
                <div className="table7Chaise4"></div>
              </div>

              <div
                className="table8"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">8</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>
              <div
                className="table9"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table6-8-9Chaises">
                  <h1 className="tableNumber">9</h1>
                </div>
                <div className="table6-8-9Chaise1"></div>
                <div className="table6-8-9Chaise2"></div>
                <div className="table6-8-9Chaise3"></div>
              </div>
              <div
                className="table10"
                onClick={changerDeModeTableVersReservation}
              >
                <div className="table1-10-12Chaises">
                  <h1 className="tableNumber">10</h1>
                </div>
                <div className="table1-10-12chaise1"></div>
                <div className="table1-10-12chaise2"></div>
                <div className="table1-10-12chaise3"></div>
                <div className="table1-10-12chaise4"></div>
              </div>
            </div>
            <div className="lineTable3">
              <div className="leftrange">
                <div
                  className="table11"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table7Chaises">
                    <h1 className="tableNumber">11</h1>
                  </div>
                  <div className="table7Chaise1"></div>
                  <div className="table7Chaise2"></div>
                  <div className="table7Chaise3"></div>
                  <div className="table7Chaise4"></div>
                </div>

                <div
                  className="table12"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table1-10-12Chaises">
                    <h1 className="tableNumber">12</h1>
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
                <div
                  className="table14"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">14</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div
                  className="table15"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">15</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div
                  className="table16"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">16</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
                <div
                  className="table17"
                  onClick={changerDeModeTableVersReservation}
                >
                  <div className="table14-15-16-17Chaises">
                    <h1 className="tableNumber">17</h1>
                  </div>
                  <div className="table14-15-16-17chaise1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ReservationForm toggleReservation={changerDeModeTableVersReservation} />
      )}
    </>
  );
}

export default Réservation;
