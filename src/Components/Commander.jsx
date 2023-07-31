import { useState } from "react";
import products from "../Products.js";
import { AiOutlineClose } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContainerCommander = styled.div`
  height: 70%;
  width: 100%;
`;

const CommanderProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const ProductItems = styled.div`
  width: 33%;
  height: 33%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
`;

const PhotoContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ProductTitle = styled.h3`
  /* Add your title styles here */
`;

const ProductDescription = styled.p`
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ce750f;
  border: none;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  animation: ${fadeIn} 0.5s ease-out;

  &.modalActive {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const CloseModal = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 2em;
  cursor: pointer;

  svg:hover {
    fill: red;
    scale: 1.4;
    transition: 0.3s;
  }
`;

const ProductContainerInModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const PictureContainerInModal = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    height: 60%;
  }
`;

const TextContainerInModal = styled.div`
  width: 30%;
  height: 70%;
  background: linear-gradient(180deg, #ce750f 0%, rgba(0, 0, 0, 0.67) 100%);
  border-radius: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;

  * {
    color: rgb(0, 0, 0);
    margin-top: 10%;
  }
`;

function Commander() {
  const [Product, setProduct] = useState(0);
  const [ModalActive, setModalActive] = useState(false);

  return (
    <ContainerCommander>
      <CommanderProductContainer>
        {products.map((product, index) => (
          <ProductItems
            key={index}
            onClick={() => {
              setProduct(index);
              setModalActive(true);
            }}
          >
            <PhotoContainer>
              <ProductImage src={product.photo} alt={product.title} />
            </PhotoContainer>

            <TextContainer>
              <div>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </div>

              <Price>
                <h3>{product.prix} $</h3>
                <AddButton>Ajouter</AddButton>
              </Price>
            </TextContainer>
          </ProductItems>
        ))}
      </CommanderProductContainer>

      {ModalActive && (
        <ModalContainer className={ModalActive ? "modalActive" : "modal"}>
          <CloseModal onClick={() => setModalActive(false)}>
            <AiOutlineClose />
          </CloseModal>
          <ProductContainerInModal>
            <PictureContainerInModal>
              <img
                src={products[Product].photo}
                alt={products[Product].title}
              />
            </PictureContainerInModal>

            <TextContainerInModal>
              <h1>{products[Product].title}</h1>
              <h3>{products[Product].description}</h3>
            </TextContainerInModal>
          </ProductContainerInModal>
        </ModalContainer>
      )}
    </ContainerCommander>
  );
}

export default Commander;
