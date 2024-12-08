import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import BackToTopButton from "./components/Back-to-top";
import SearchBar from "./components/Search-bar";

export const ProdList = createContext();
//asa il putem exporta in alte pagini si componente - useContext = facem spread la info in aplicatie fara sa facem prop drill
export const CartContext = createContext(); // Cart context
export const WishlistContext = createContext(); // Wishlist context
export const SearchContext = createContext();

function App() {
  const [db, setDb] = useState([
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 1,
      picturePath: "pictures/meta_quest_3s_128gb.jpg",
      name: "Meta Quest 3S 128GB",
      price: 1899.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 3,
      picturePath: "/pictures/meta_quest_3s256.jpg",
      name: "Meta Quest 3S 256GB",
      price: 2439.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 2,
      picturePath: "/pictures/meta_quest3_128.jpg",
      name: "Meta Quest 3 128GB",
      price: 2799.0,
      initialPrice: 3189.0,
      standalone: true,
    },

    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 4,
      picturePath: "/pictures/meta_quest3_512.jpg",
      name: "Meta Quest 3 512GB",
      price: 2950.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 5,
      picturePath: "/pictures/meta_quest_pro_256.jpg",
      name: "Meta Quest Pro 256GB",
      price: 5345.0,
      initialPrice: 9299.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 6,
      picturePath: "/pictures/oculus_quest2_256.webp",
      name: "Oculus Quest 2 256GB",
      price: 2299.0,
      initialPrice: 3049.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Meta/Oculus",
      id: 7,
      picturePath: "/pictures/oculus_quest2_128 (2).jpg",
      name: "Oculus Quest 2 128GB",
      price: 1639.0,
      initialPrice: 2649.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Windows",
      id: 8,
      picturePath: "/pictures/acer_windows_mixed.jpg",
      name: "Acer Windows Mixed Reality",
      price: 3689.0,
      initialPrice: 3939.0,
    },
    {
      category: "for-pc",
      brand: "HP",
      id: 9,
      picturePath: "/pictures/hp_reverb.jpg",
      name: "HP Reverb G2 V2 with controllers",
      price: 1769.0,
      initialPrice: 2099.0,
    },
    {
      category: "for-pc",
      brand: "Pico",
      id: 10,
      picturePath: "/pictures/pico_4_ultra_256gb.jpg",
      name: "Pico 4 Ultra 256GB",
      price: 3049.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "Sony",
      id: 11,
      picturePath: "/pictures/sony_playstation_vr.jpg",
      name: "Sony PlayStation VR",
      price: 1179.99,
      initialPrice: 1799.0,
    },
    {
      category: "for-pc",
      brand: "Sony",
      id: 12,
      picturePath: "/pictures/sony_playstation_vr2.jpg",
      name: "Sony PlayStation VR2",
      price: 2999.0,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 13,
      picturePath: "/pictures/htc_vive_xr_elite.jpg",
      name: "HTC Vive XR Elite + DELUXE Pack",
      price: 4699.0,
      initialPrice: 7249.0,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 14,
      picturePath: "/pictures/htc_vive_pro2_set.jpg",
      name: "HTC Vive Pro 2 Complete Pack",
      price: 4699.0,
      initialPrice: 7599.0,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 15,
      picturePath: "/pictures/htc_vive_cosmos.jpg",
      name: "HTC Vive Cosmos",
      price: 3059.0,
      initialPrice: 4154.0,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 16,
      picturePath: "/pictures/htc_vive_cosmos_elite.jpg",
      name: "HTC Vive Cosmos Elite",
      price: 4815.0,
      standalone: true,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 17,
      picturePath: "/pictures/vive-pro.jpg",
      name: "HTC Vive Pro",
      price: 4669.0,
      initialPrice: 4799.0,
    },
    {
      category: "for-pc",
      brand: "HTC",
      id: 18,
      picturePath: "/pictures/vive_pro_full_set.jpg",
      name: "HTC Vive Pro Complete Pack",
      price: 4699.0,
      initialPrice: 7750.0,
    },
    {
      category: "for-phone",
      brand: "Samsung",
      id: 19,
      picturePath: "/pictures/samsung_gear_vrsm_r322.jpg",
      name: "Samsung Gear VR SM-R322",
      price: 299.0,
    },
    {
      category: "for-phone",
      brand: "Samsung",
      id: 20,
      picturePath: "/pictures/samsung-gear-vr-r325.jpg",
      name: "Samsung Gear VR SM-R325",
      price: 488.99,
      initialPrice: 549.99,
    },
    {
      category: "for-phone",
      brand: "Google",
      id: 21,
      picturePath: "/pictures/google_daydream.jpg",
      name: "Google Daydream View 2 (2017)",
      price: 569.0,
    },
    {
      category: "for-phone",
      brand: "NoonVR",
      id: 22,
      picturePath: "/pictures/noon_vr.jpg",
      name: "NoonVR",
      price: 399.0,
    },
    {
      category: "for-phone",
      brand: "Homido",
      id: 23,
      picturePath: "/pictures/homido.jpg",
      name: "Homido",
      price: 242.0,
      initialPrice: 375.0,
    },
    {
      category: "for-phone",
      brand: "Homido",
      id: 24,
      picturePath: "/pictures/homido_prime.jpg",
      name: "Homido Prime",
      price: 242.0,
      initialPrice: 375.0,
    },
    {
      category: "for-phone",
      brand: "Fibrum",
      id: 25,
      picturePath: "/pictures/fibrum.jpg",
      name: "Fibrum",
      price: 349.0,
    },
    {
      category: "for-phone",
      brand: "Zeiss",
      id: 26,
      picturePath: "/pictures/zeiss.jpg",
      name: "Zeiss VR ONE",
      price: 560.0,
    },
    {
      category: "for-phone",
      brand: "ShineconVR",
      id: 27,
      picturePath: "/pictures/shineconvr2.jpg",
      name: "ShineconVR 2.0",
      price: 120.0,
      initialPrice: 145.0,
    },
    {
      category: "for-phone",
      brand: "ShineconVR",
      id: 28,
      picturePath: "/pictures/shineconvr4.jpg",
      name: "ShineconVR 4.0",
      price: 179.0,
      initialPrice: 210.0,
    },
    {
      category: "for-phone",
      brand: "BOBOVR",
      id: 29,
      picturePath: "/pictures/bobovrz4.jpg",
      name: "BOBOVR Z4",
      price: 155.0,
      initialPrice: 175.0,
      standalone: true,
    },
    {
      category: "for-phone",
      brand: "BOBOVR",
      id: 30,
      picturePath: "/pictures/bobovrz5.jpg",
      name: "BOBOVR Z5",
      price: 189.0,
      initialPrice: 210.0,
    },
    {
      category: "for-business",
      brand: "Hololens",
      id: 31,
      picturePath: "/pictures/hololens2.jpg",
      name: "Hololens 2",
      price: 18999.0,
      standalone: true,
    },
    {
      category: "for-business",
      brand: "Pico",
      id: 32,
      picturePath: "/pictures/pico_neo_pro.jpg",
      name: "Pico Neo 3 Pro",
      price: 3499.0,
      standalone: true,
    },
    {
      category: "for-business",
      brand: "Pico",
      id: 33,
      picturePath: "/pictures/pico4.jpg",
      name: "Pico 4 Enterprise 256GB",
      price: 5299.0,
      standalone: true,
    },
    {
      category: "for-business",
      brand: "Pico",
      id: 34,
      picturePath: "/pictures/pico_neo3_pro_eye.jpg",
      name: "Pico Neo 3 Pro Eye",
      price: 4399.0,
      standalone: true,
    },
    {
      category: "for-business",
      brand: "HTC",
      id: 35,
      picturePath: "/pictures/htc_vive_pro_full.jpg",
      name: "HTC Vive Pro 2 Set Complet (Business Edition)",
      price: 7375.0,
    },

    {
      category: "for-business",
      brand: "HTC",
      id: 36,
      picturePath: "/pictures/htc_vive_focus3.jpg",
      name: "HTC Vive Focus 3 (Business Edition)",
      price: 3499.0,
    },
    {
      category: "for-business",
      brand: "Owatch",
      id: 37,
      picturePath: "/pictures/chairvr.jpg",
      name: "Owatch VR Chair",
      price: 22500.0,
    },
    {
      category: "for-business",
      brand: "Owatch",
      id: 38,
      picturePath: "/pictures/owatchspace.webp",
      name: "Owatch VR Space",
      price: 26100.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 39,
      picturePath: "/pictures/htc_tracker.jpg",
      name: "HTC Vive Ultimate Tracker",
      price: 1189.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 40,
      picturePath: "/pictures/htc_tracker_3_1.jpg",
      name: "HTC Vive Ultimate Tracker 3+1 Kit",
      price: 2919.0,
      initialPrice: 3439.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 41,
      picturePath: "/pictures/htc_tracker_dongle.jpg",
      name: "HTC Vive Ultimate Tracker Wireless Dongle",
      price: 249,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 42,
      picturePath: "/pictures/htc_tracker_3.jpg",
      name: "HTC Vive Tracker 3.0",
      price: 639.0,
      initialPrice: 755.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 43,
      picturePath: "/pictures/htc_wireless_adapter.jpg",
      name: "HTC Vive/Vive Pro/Cosmos/Cosmos Elite Adaptor wireless",
      price: 1959.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 44,
      picturePath: "/pictures/battery.jpg",
      name: "HTC Vive Baterie suplimentara adaptor wireless",
      price: 329.0,
      initialPrice: 359.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 45,
      picturePath: "/pictures/htc_audio_strap.jpg",
      name: "HTC Vive Deluxe Audio Strap",
      price: 729.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 46,
      picturePath: "/pictures/htc_face_tracker.jpg",
      name: "HTC Vive Focus 3 Face Tracker",
      price: 659.99,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 47,
      picturePath: "/pictures/htc_ping_pong.jpg",
      name: "HTC Vive Ping Pong Setul",
      price: 209.99,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 48,
      picturePath: "/pictures/htc_wrist-tracker.jpg",
      name: "HTC Vive Wrist Tracker",
      price: 659.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 49,
      picturePath: "/pictures/htc_tripod.jpg",
      name: "Kiwi Design Tripod Mount for HTC Vive Base Station",
      price: 199.99,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 50,
      picturePath: "/pictures/htc_waterproof_cover.jpg",
      name: "Husa impermeabila HTC Vive VR Cover",
      price: 82.0,
    },
    {
      category: "accessories",
      brand: "HTC",
      id: 51,
      picturePath: "/pictures/clamp.jpg",
      name: "Clamp Mount HTC/Oculus Hyperkin",
      price: 69.0,
    },
    {
      category: "accessories",
      brand: "Meta/Oculus",
      id: 52,
      picturePath: "/pictures/meta_headphones.jpg",
      name: "Meta Quest Pro Headphones",
      price: 409.0,
    },
    {
      category: "accessories",
      brand: "Meta/Oculus",
      id: 53,
      picturePath: "/pictures/meta_dock_charger.jpg",
      name: "Meta Quest Pro Charging Dock",
      price: 709.0,
    },
    {
      category: "accessories",
      brand: "Meta/Oculus",
      id: 54,
      picturePath: "/pictures/meta_face_interface_light_blocker.jpg",
      name: "Meta Quest Pro Face Interface Light Blocker",
      price: 409.0,
    },
    {
      category: "accessories",
      brand: "Meta/Oculus",
      id: 55,
      picturePath: "/pictures/oculus_cable.jpg",
      name: "Original Oculus Link Cable for Oculus Quest",
      price: 595.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 56,
      picturePath: "/pictures/kiwi_charging_station.jpg",
      name: "Kiwi Design RGB Charging Station for Meta Quest 3 / 3S / 2 / Pro",
      price: 249.0,
      initialPrice: 319.0,
    },
    {
      category: "accessories",
      brand: "Meta/Oculus",
      id: 57,
      picturePath: "/pictures/meta_q3_charging_dock.jpg",
      name: "Meta Quest 3 Charging Dock",
      price: 809.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 58,
      picturePath: "/pictures/kiwi_charging_dock_oculusq2.jpg",
      name: "Kiwi Design Charging Dock for Oculus Quest 2",
      price: 279.0,
      initialPrice: 499.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 59,
      picturePath: "/pictures/kiwi_oculusq2_strap_headphones.jpg",
      name: "Kiwi Design Elite Strap with Headphones for Oculus Quest 2",
      price: 249.0,
      initialPrice: 319.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 60,
      picturePath: "/pictures/kiwi_knuckle.jpg",
      name: "Kiwi Design Knuckle Grips for Meta Quest 3 / 3S",
      price: 125.0,
      initialPrice: 169.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 61,
      picturePath: "/pictures/kiwi_facial_interface_oculus.jpg",
      name: "Kiwi Design Masca Faciala pentru Oculus Quest 2",
      price: 139.0,
      initialPrice: 169.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 62,
      picturePath: "/pictures/kiwi_case.jpg",
      name: "Kiwi Design Carrying Case for Quest 3 / 3S / 2",
      price: 139.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 63,
      picturePath: "/pictures/kiwi_headphones_metaq.jpg",
      name: "Kiwi Design Headphones for Meta Quest 3 / 3S / 2",
      price: 149.0,
    },
    {
      category: "accessories",
      brand: "Kiwi Design",
      id: 64,
      picturePath: "/pictures/kiwi_silicone_protector.jpg",
      name: "Kiwi Design Halo Controller Silicone Protector",
      price: 49.0,
    },
    {
      category: "haptics/mocap",
      brand: "bHaptics",
      id: 65,
      picturePath: "/pictures/bhaptics_tacsuit.jpg",
      name: "bHaptics TactSuit X40",
      price: 2929.0,
    },
    {
      category: "haptics/mocap",
      brand: "bHaptics",
      id: 66,
      picturePath: "/pictures/bhaptics_tacsuit16.jpg",
      name: "bHaptics TactSuit X16",
      price: 2069.0,
    },
    {
      category: "haptics/mocap",
      brand: "bHaptics",
      id: 67,
      picturePath: "/pictures/bhaptics_tactosy_arms.jpg",
      name: "bHaptics Tactosy for Arms - Sleeves",
      price: 1319.0,
    },
    {
      category: "haptics/mocap",
      brand: "bHaptics",
      id: 68,
      picturePath: "/pictures/bhaptics_tactosy_hands.jpg",
      name: "bHaptics Tactosy for Hands",
      price: 1399.0,
    },
    {
      category: "haptics/mocap",
      brand: "bHaptics",
      id: 69,
      picturePath: "/pictures/bhaptics_tactosy_feet.jpg",
      name: "bHaptics Tactosy for Feet",
      price: 1399.0,
    },
  ]);

  // Cart and Wishlist State
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Add to cart function
  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
      console.log(`Product ${id} added to cart`);
      console.log(cart);
    } else {
      console.log(`Product ${id} is already in the cart`);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id)); // Removes product by ID
  };

  // Add to wishlist function
  const handleAddToWishlist = (id) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
      console.log(`Product ${id} added to wishlist`);
    } else {
      console.log(`Product ${id} is already in the wishlist`);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter((itemId) => itemId !== id)); // Removes product by ID
  };

  const handleSearch = (searchTerm) => {
    const filtered = db.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setSearchQuery(searchTerm);
  };

  return (
    <ProdList.Provider value={db}>
      <CartContext.Provider
        value={{ cart, setCart, handleRemoveFromCart, handleAddToCart }}
      >
        <SearchContext.Provider
          value={{
            filteredItems,
            searchQuery,
            setFilteredItems,
            setSearchQuery,
          }}
        >
          <WishlistContext.Provider
            value={{
              wishlist,
              setWishlist,
              handleRemoveFromWishlist,
              handleAddToWishlist,
            }}
          >
            <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />
            <SearchBar onSearch={handleSearch} />
            <Outlet />
            <Footer />
            <BackToTopButton />
          </WishlistContext.Provider>
        </SearchContext.Provider>
      </CartContext.Provider>
    </ProdList.Provider>
  );
}

export default App;
