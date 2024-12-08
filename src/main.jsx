import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import WishList from "./pages/Wish List.jsx";
import Error from "./pages/Error.jsx";
import VrForPhone from "./pages/Categories/VR-for-phone.jsx";
import Contact from "./pages/CustomerService/Contact.jsx";
import Faq from "./pages/CustomerService/Faq.jsx";
import Returns from "./pages/CustomerService/Returns.jsx";
import Privacy from "./pages/Info/Privacy.jsx";
import SocialMedia from "./pages/Info/Social-media.jsx";
import TermsOfUse from "./pages/Info/Terms-of-use.jsx";
import Producers from "./pages/Additional/Producers.jsx";
import GiftVoucher from "./pages/Additional/Gift-voucher.jsx";
import SpecialOffers from "./pages/Additional/Special-offers.jsx";
import About from "./pages/About.jsx";
import VrForPC from "./pages/Categories/VR-for-pc.jsx";
import VrForBusiness from "./pages/Categories/VR-for-business.jsx";
import VrStandalone from "./pages/Categories/VR-Standalone.JSX";
import VrAccessories from "./pages/Categories/VR-accessories.jsx";

import HapticsAndMocap from "./pages/Categories/Haptics-and-mocap.jsx";
import CartPage from "./pages/Cart.jsx";
import VrPresentation from "./components/Vr-presentation.jsx";
import Checkout from "./pages/Checkout.jsx";
import SearchResults from "./pages/Search-result.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/wish-list" element={<WishList />}></Route>
      <Route path="/vr-for-phone" element={<VrForPhone />}></Route>
      <Route path="/vr-for-phone/:id" element={<VrPresentation />}></Route>

      <Route path="/vr-standalone" element={<VrStandalone />}></Route>
      <Route path="/vr-standalone/:id" element={<VrPresentation />}></Route>
      <Route path="/vr-for-pc" element={<VrForPC />}></Route>
      <Route path="/vr-for-pc/:id" element={<VrPresentation />}></Route>
      <Route path="/vr-for-business" element={<VrForBusiness />}></Route>
      <Route path="/vr-for-business/:id" element={<VrPresentation />}></Route>
      <Route path="/vr-accessories" element={<VrAccessories />}></Route>
      <Route path="/vr-accessories/:id" element={<VrPresentation />}></Route>
      <Route path="/haptics-and-mocap" element={<HapticsAndMocap />}></Route>
      <Route path="/haptics-and-mocap/:id" element={<VrPresentation />}></Route>

      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/returns" element={<Returns />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/social-media" element={<SocialMedia />}></Route>
      <Route path="/terms-of-use" element={<TermsOfUse />}></Route>
      <Route path="/producers" element={<Producers />}></Route>
      <Route path="/gift-voucher" element={<GiftVoucher />}></Route>
      <Route path="/special-offers" element={<SpecialOffers />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/search-result" element={<SearchResults />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);
// am creat o suita de rute pe care eu sa le folosesc
// createBrowserRouter = comanda prin care cream rutele
// createRoutesFromElements = comanda care ne ajuta ca ele sa arate ca tag-uri nu ca obiecte, arata diferit asa.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    {/* Acum nu mai este <App/> parintele, acum avem ca main RouterProvider, apoi app apoi home, about, error - app e pus acum sus in const routes */}
  </StrictMode>
);
