import { useContext } from "react";
import { CartContext, ProdList } from "../App";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useContext(CartContext); // Access cart context
  const listOfProd = useContext(ProdList); // Access product list context

  // Get the details of products in the cart based on the cart IDs
  const cartItems = listOfProd.filter((prod) => cart.includes(prod.id));

  return (
    <div className="p-8 min-h-screen flex justify-center">
      <div className="flex w-full max-w-screen-xl">
        {/* Left side: Cart items */}
        <div className="flex-1 mr-8">
          <h2 className="text-2xl font-bold mb-6 text-sky-300">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-sky-300">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
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

                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side: Cart Summary */}
        {cartItems.length > 0 && (
          <div className="w-80 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-xl">
                  {cartItems.reduce((acc, item) => acc + item.price, 0)} RON
                </span>
              </div>
              <Link to="/checkout">
                <button className="w-full py-3 bg-pink-400 text-white rounded-md hover:bg-pink-700">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
