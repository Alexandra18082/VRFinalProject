import { useContext } from "react";
import { WishlistContext, CartContext, ProdList } from "../App";

const WishlistPage = () => {
  const { wishlist, handleRemoveFromWishlist } = useContext(WishlistContext); // Access wishlist context
  const { cart, handleAddToCart } = useContext(CartContext); // Access cart context
  const listOfProd = useContext(ProdList); // Access product list context

  // Get the details of products in the wishlist based on the wishlist IDs
  const wishlistItems = listOfProd.filter((prod) => wishlist.includes(prod.id));

  return (
    <div className="p-8 min-h-screen flex justify-center">
      <div className="flex w-full max-w-screen-xl">
        {/* Left side: Wishlist items */}
        <div className="flex-1 mr-8">
          <h2 className="text-2xl font-bold mb-6 text-sky-300">
            Your Wishlist ❤️
          </h2>
          {wishlistItems.length === 0 ? (
            <p className="text-sky-300">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-6">
              {wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Product details section */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.picturePath}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-gray-600">{product.price} RON</p>
                    </div>
                  </div>

                  {/* Buttons container (Add to Cart and Remove) */}
                  <div className="flex items-center space-x-4">
                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product.id);
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                    >
                      {cart.includes(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side: Empty, as no checkout is needed */}
        <div className="w-80"></div>
      </div>
    </div>
  );
};

export default WishlistPage;
