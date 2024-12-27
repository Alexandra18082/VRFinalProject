import React, { useContext } from "react";
import { CartContext, SearchContext, WishlistContext } from "../App";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { filteredItems, searchQuery } = useContext(SearchContext);
  const { cart, handleAddToCart } = useContext(CartContext);
  const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext);

  const isNoResults = filteredItems.length === 0;

  return (
    <div className="body min-h-screen flex items-center justify-center">
      {isNoResults ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-50">
            No product matches your input
          </h1>
          <p className="text-lg mb-4 text-gray-50">
            Try searching for something else, or go back to the home page.
          </p>
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            Go to Home Page
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
          {filteredItems.map((prod) => (
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
                        handleRemoveFromWishlist(prod.id);
                      } else {
                        handleAddToWishlist(prod.id);
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
      )}
    </div>
  );
};

export default SearchResults;
