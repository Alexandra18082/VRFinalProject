import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Producers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body min-h-[100vh] text-gray-50 px-6 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
        Producers
      </h1>
      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">Acer</h2>
          <p className="text-gray-300 text-lg">
            Known for their versatile hardware solutions, Acer combines
            affordability and performance. Their Windows Mixed Reality headsets
            offer an accessible entry point to immersive experiences.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">BOBOVR</h2>
          <p className="text-gray-300 text-lg">
            Specializing in lightweight and budget-friendly VR headsets, BOBOVR
            focuses on portable solutions perfect for casual VR enthusiasts.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">Fibrum</h2>
          <p className="text-gray-300 text-lg">
            A pioneer in VR, Fibrum creates compact headsets designed for mobile
            devices, delivering immersive experiences on the go.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">Google</h2>
          <p className="text-gray-300 text-lg">
            With a focus on innovation, Google’s Daydream headsets integrate
            seamlessly with Android devices to provide intuitive VR experiences.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">HP</h2>
          <p className="text-gray-300 text-lg">
            HP is a leader in high-performance VR headsets like the Reverb
            series, perfect for professionals and gamers seeking exceptional
            clarity and comfort.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">
            Hololens
          </h2>
          <p className="text-gray-300 text-lg">
            Microsoft's Hololens is at the cutting edge of mixed reality,
            designed for enterprise solutions and professional use cases.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">Homido</h2>
          <p className="text-gray-300 text-lg">
            A well-established brand for mobile VR, Homido produces sleek,
            easy-to-use headsets for smartphone users.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-300 mb-2">HTC</h2>
          <p className="text-gray-300 text-lg">
            A trailblazer in the VR industry, HTC offers a wide range of premium
            VR devices, including the Vive series, known for high-quality
            visuals and precise tracking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Producers;
