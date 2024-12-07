const About = () => {
  return (
    <div className="body min-h-[100vh] text-gray-50 px-4 py-8">
      <h1 className="text-4xl font-semibold mb-6">About Our VR Products</h1>
      <p className="mb-6">
        Welcome to the world of Virtual Reality! At VOIDSHIFT, we are committed
        to bringing you the most innovative and immersive experiences through
        our VR products. Whether you’re a tech enthusiast, an avid gamer, or a
        professional looking to explore new ways of learning and collaboration,
        we have the perfect solutions for you.
      </p>
      <p className="mb-6">
        Our carefully curated selection of VR headsets, accessories, and
        software is designed to offer cutting-edge technology and unparalleled
        performance. We believe in pushing the boundaries of what’s possible,
        providing you with tools that transport you to new worlds, enhance your
        creativity, and offer endless entertainment.
      </p>
      <p className="mb-6">
        With our VR products, you can dive into realistic simulations, enjoy
        interactive gaming experiences, or even engage in virtual meetings with
        colleagues around the globe. Our goal is to help you discover the full
        potential of Virtual Reality and bring your digital experiences to life.
      </p>
      <p>
        Explore our collection today and step into the future of technology!
      </p>

      {/* Image Section */}
      <div className="mt-8">
        <img
          src="/pictures/office_vr.avif"
          alt="VR Office Experience"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
