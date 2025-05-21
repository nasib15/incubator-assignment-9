const Banner = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-6xl font-bold tracking-tight animate-fade-in">
            Welcome to Our Platform
          </h1>
          <p className="text-lg leading-relaxed">
            Discover a world of possibilities with our innovative solutions.
            We're here to help you achieve your goals and transform your ideas
            into reality.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
