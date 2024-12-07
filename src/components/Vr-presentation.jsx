import { useContext, useEffect, useState } from "react";
import styles from "./Vr-presentation.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { ProdList, CartContext } from "../App"; // Import CartContext

const VrPresentation = () => {
  const [productState, setProductState] = useState();
  const [addedToCart, setAddedToCart] = useState(false); // State to track if the product is added
  const [notification, setNotification] = useState(""); // Notification state
  const listOfProd = useContext(ProdList);
  const { cart, handleAddToCart } = useContext(CartContext); // Access cart context and add to cart function
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setProductState(() => listOfProd.find((p) => p.id === Number(param.id)));
  }, [listOfProd, param.id]);

  const handleAddToCartClick = () => {
    if (productState) {
      // Check if the item is already in the cart
      if (cart.includes(productState.id)) {
        setNotification("Item already added!"); // Show notification
      } else {
        handleAddToCart(productState.id); // Add the product to the cart
        setAddedToCart(true); // Change the button text
        setNotification(""); // Clear any previous notification
        console.log(`Product ${productState.name} added to cart`);

        // Reset the "Added to Cart" state after a few seconds
        setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
      }
    }
  };

  const handleBuyNow = (productId) => {
    handleAddToCart(productId); // Add the product to the cart
    navigate("/cart"); // Redirect to the cart page
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
                  <div className="text-red-500 mt-2">{notification}</div> // Notification for already added item
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
