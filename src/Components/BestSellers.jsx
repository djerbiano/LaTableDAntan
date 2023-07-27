import "../Styles/BestSellers.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import products from "../Products.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BestSellers() {
  const [idProduct, setIdProduct] = useState(0);
  const navigate = useNavigate();

  const prevProduct = () => {
    setIdProduct((prevId) => (prevId === 0 ? 0 : prevId - 1));
  };

  const nextProduct = () => {
    setIdProduct((prevId) => (prevId === 4 ? 4 : prevId + 1));
  };

  const redirectToOtherPath = () => {
    const newPath = '/Commander';
    navigate(newPath);
  };

  return (
    <div className="ContainerBestSellers">
      <div className="left">
        <FaAngleLeft onClick={prevProduct} />
      </div>

      <div className="product" onClick={redirectToOtherPath}>
        <h1>{products[idProduct].title}</h1>
        <img src={products[idProduct].photo} alt={products[idProduct].title} />
      </div>

      <div className="right">
        <FaAngleRight onClick={nextProduct} />
      </div>
    </div>
  );
}

export default BestSellers;
