import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="my-10 px-3 xl:px-0 w-full xl:absolute xl:bottom-[400px]">
      <div className="hero p-10 bg-image bg-white container mx-auto border rounded-lg m-5">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-4xl font-bold ">Subscribe to our Newsletter</h1>
            <p className="py-3 text-gray-500 text-lg">
              Get the latest updates and news right in your inbox!
            </p>
            <di className="w-full flex items-center justify-center">
              <input
                type="text"
                className="p-3 mr-3 rounded-lg border"
                placeholder="Enter your email"
              />
              <button className="btn bg-gradient-to-r from-[#f9abbd] to-[#f9ce59]">
                Get Started
              </button>
            </di>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
