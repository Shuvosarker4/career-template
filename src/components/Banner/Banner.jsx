const Banner = () => {
  return (
    <div className="hero max-h-96 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/src/assets/user.png" className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold py-6">
            One Step <br /> Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <button className="btn bg-[#7E90FE] text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
