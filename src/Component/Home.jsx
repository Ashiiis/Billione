const HeroSection = () => {
  return (
    <section className="relative h-[80vh] w-[90%] flex flex-col md:flex-row overflow-hidden mx-auto">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1974&auto=format&fit=crop"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-transparent bg-opacity-30"></div>

      {/* Left text content */}
      <div className="relative z-10 flex-1 flex items-center px-8 md:px-16">
        <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight max-w-lg">
          Shaping the Future <br /> of Sustainable <br /> Energy and Mobility.
        </h1>
      </div>

      {/* Right side "N" Shape */}
      <div className="relative z-10 flex-1 hidden md:flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-[60%] h-auto"
        >
          <defs>
            <clipPath id="letterN">
              <path d="M20,180 V20 H60 L140,140 V20 H180 V180 H140 L60,60 V180 Z" />
            </clipPath>
          </defs>
          {/* Background image clipped in "N" shape */}
          <image
            href="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="200"
            height="200"
            color="white"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#letterN)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
