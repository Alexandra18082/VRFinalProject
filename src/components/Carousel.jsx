import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";

const items = [
  {
    position: 1,
    imgSrc: "pictures/topimage-remove-background.com.png",
    link: "/vr-for-pc",
    text: "VR FOR YOUR PC",
  },
  {
    position: 2,
    imgSrc: "pictures/bobovrz4-remove-background.com.png",
    link: "/vr-for-phone",
    text: "VR FOR YOUR PHONE",
  },
  {
    position: 3,
    imgSrc: "pictures/oculus_quest2_256-remove-background.com.png",
    link: "/vr-for-business",
    text: "VR FOR YOUR BUSINESS",
  },
  {
    position: 4,
    imgSrc: "pictures/sony_playstation_vr2-remove-background.com.png",
    link: "/vr-standalone",
    text: "VR STANDALONE",
  },
  {
    position: 5,
    imgSrc: "pictures/kiwi_knuckle-remove-background.com.png",
    link: "/vr-accessories",
    text: "VR ACCESSORIES",
  },
  {
    position: 6,
    imgSrc: "pictures/bhaptics_tacsuit16-remove-background.com.png",
    link: "/haptics-and-mocap",
    text: "HAPTICS AND MOCAP",
  },
];

const Carousel = () => {
  return (
    <div className={styles.body}>
      <div className={styles.banner} style={{ "--quantity": items.length }}>
        <div className={styles.slider}>
          {items.map((item) => (
            <div
              key={item.position}
              className={styles.item}
              style={{ "--position": item.position }}
            >
              <Link to={item.link} className="relative block w-full h-full">
                <img
                  src={item.imgSrc}
                  alt={item.text}
                  className="w-full h-auto object-cover border-4 border-transparent hover:border-white transition-all duration-300 shadow-lg hover:shadow-2xl glow-effect"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold glow-text transition-all duration-300 whitespace-nowrap max-w-full overflow-hidden">
                  {item.text}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <h1 data-content="VOIDSHIFT">VOIDSHIFT</h1>

          <div className={styles.author}>
            <h2 className="font-bold">
              The most innovative and futuristic VR experience!
            </h2>
            <p>
              <h3 className="font-bold">
                Click on each banner to bring the VR experience in your own
                home.
              </h3>
            </p>
            <p className="font-semibold text-pink-400">
              Project signed by Alexandra Șerbulea
            </p>
          </div>
          <div className={styles.model}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
