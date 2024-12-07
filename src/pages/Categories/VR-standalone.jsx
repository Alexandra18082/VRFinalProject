import { ProdList } from "../../App";
import { useContext } from "react";
import CardsVR from "../../components/VR-cards";

const VrStandalone = () => {
  const products = useContext(ProdList);

  const standaloneProducts = products.filter(
    (product) => product.standalone === true
  );

  console.log("Filtered standalone products:", standaloneProducts);

  return (
    <div>
      <CardsVR products={standaloneProducts} />
    </div>
  );
};

export default VrStandalone;
