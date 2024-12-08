import { useContext } from "react";
import { CartContext, ProdList } from "../App";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // When the user presses the submit button, handleSubmit is called.
    // The page will not refresh due to e.preventDefault().
    // The message "Form submitted!" will be logged to the console
  };

  const { cart, handleRemoveFromCart } = useContext(CartContext); // Access cart context
  const listOfProd = useContext(ProdList); // Access product list context

  // Get the details of products in the cart based on the cart IDs
  const cartItems = listOfProd.filter((prod) => cart.includes(prod.id));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl text-sky-200 font-semibold mb-6 text-center">
        Checkout
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Delivery Details Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium mb-4">Delivery Details</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-semibold">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-semibold">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-semibold"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your postal code"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-medium mb-4">Payment Details</h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-semibold"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter your card number"
              />
            </div>
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-semibold"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-semibold">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                placeholder="Enter CVV"
              />
            </div>
            <div className="text-lg font-semibold text-blue-950 flex justify-between items-center bg-gray-200 p-4 rounded-md">
              <span>Amount to be paid:</span>
              <span>
                {cartItems.reduce((acc, item) => acc + item.price, 0)} RON
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
