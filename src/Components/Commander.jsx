import "../Styles/Commander.css";
import { useState } from "react";
import products from "../Products.js";
import { AiOutlineClose } from "react-icons/ai";

function Commander() {
  const [Product, setProduct] = useState(0);
  const [ModalActive, setModalActive] = useState(false);

  return (
    <div className="ContainerCommander">
      <div className="CommanderCotainerProduct">
        {products.map((product, index) => (
          <div
            key={index}
            className="firstProduct"
            onClick={() => {
              setProduct(index);
              setModalActive(true);
            }}
          >
            <div className="photoCommander">
              <img src={product.photo} alt={product.title} />
            </div>

            <div className="textCommander">
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>

              <div className="prix">
                <h3>{product.prix} $</h3>
                <button>Ajouter</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={ModalActive ? "modalActive" : "modal"}>
        <div className="closeModal" onClick={() => setModalActive(false)}>
          <AiOutlineClose />
        </div>
        <div className="ContainerProductByy">
          <div className="photobyy">
            <img src={products[Product].photo} alt={products[Product].title} />
          </div>

          <div className="textbyy">
            <h1>{products[Product].title}</h1>
            <h3>{products[Product].description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commander;
