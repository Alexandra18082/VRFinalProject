import { useContext } from "react";
import { ProdList, CartContext, WishlistContext } from "../App";
import { Link } from "react-router-dom";

const CardsVR = (prop) => {
  const listOfProd = useContext(ProdList);
  const { cart, handleAddToCart } = useContext(CartContext); // Access cart context
  const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext); // Access wishlist context

  // Use the products prop if provided, otherwise filter from context
  const productsToDisplay =
    prop.products ||
    listOfProd.filter((prod) => prod.category === prop.category);

  return (
    <div className="body min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
        {productsToDisplay.map((prod) => (
          <Link
            to={"/vr-accessories/" + prod.id}
            key={prod.id}
            className="w-80 h-auto bg-sky-100 rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:-translate-y-2 flex flex-col"
          >
            <div className="flex flex-col h-full">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={prod.picturePath}
                  alt={prod.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 flex flex-col items-center flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {prod.name}
                </h2>
                <div className="flex items-center space-x-2 mt-2">
                  {prod.initialPrice && (
                    <span className="text-gray-500 line-through">
                      {prod.initialPrice} RON
                    </span>
                  )}
                  <span className="text-blue-950 font-bold">
                    {prod.price} RON
                  </span>
                </div>
              </div>
              <div className="mt-auto flex justify-center space-x-4 mb-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (wishlist.includes(prod.id)) {
                      handleRemoveFromWishlist(prod.id); // Remove from wishlist
                    } else {
                      handleAddToWishlist(prod.id); // Add to wishlist
                    }
                  }}
                  className="bg-gray-100 text-orange-900 px-4 py-2 rounded-full hover:bg-red-100 shadow-md"
                >
                  {wishlist.includes(prod.id)
                    ? "❤️ Added"
                    : "❤️ Add to Wishlist"}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(prod.id);
                  }}
                  className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-950 shadow-md"
                >
                  {cart.includes(prod.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsVR;
