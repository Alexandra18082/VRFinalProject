import { useContext, useEffect, useState } from "react";
import styles from "./Vr-presentation.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { ProdList, CartContext } from "../App";

const VrPresentation = () => {
  const [productState, setProductState] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [notification, setNotification] = useState("");
  const listOfProd = useContext(ProdList);
  const { cart, handleAddToCart } = useContext(CartContext);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setProductState(() => listOfProd.find((p) => p.id === Number(param.id)));
  }, [listOfProd, param.id]);

  const handleAddToCartClick = () => {
    if (productState) {
      if (cart.includes(productState.id)) {
        setNotification("Item already added!");
      } else {
        handleAddToCart(productState.id);
        setAddedToCart(true);
        setNotification("");
        console.log(`Product ${productState.name} added to cart`);

        setTimeout(() => setAddedToCart(false), 2000);
      }
    }
  };

  const handleBuyNow = (productId) => {
    handleAddToCart(productId);
    navigate("/cart");
  };

  return (
    <>
      {productState ? (
        <div className={styles.container}>
          <div className={styles.productCard}>
            <img
              src={productState.picturePath}
              alt={productState.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h1 className={styles.productName}>{productState.name}</h1>
              <div className={styles.productPricing}>
                {productState.initialPrice && (
                  <span
                    className={`${styles.initialPrice} ${styles.lineThrough}`}
                  >
                    {productState.initialPrice} RON
                  </span>
                )}
                <span className={styles.price}>{productState.price} RON</span>
              </div>

              <div className={styles.actions}>
                <button
                  onClick={handleAddToCartClick}
                  className={styles.addToCart}
                >
                  {addedToCart ? "Added to Cart 📦" : "Add to Cart 🛒"}
                </button>
                {notification && (
                  <div className="text-red-500 mt-2">{notification}</div>
                )}
                <button
                  onClick={() => handleBuyNow(productState.id)}
                  className={styles.buyNow}
                >
                  Buy Now 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.loadingMessage}>Loading product details...</p>
      )}
    </>
  );
};

export default VrPresentation;
