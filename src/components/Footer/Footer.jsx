import footerLogo from './../../assets/logo-footer.png'

const Footer = () => {
  return (
      <div className="bg-black text-white pt-10 xl:pt-40 xl:mt-48">
          <div className='justify-self-center'>
              <img src={footerLogo} alt="footerLogo" />
          </div>
      <footer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 container mx-auto px-3 xl:px-0 border-b border-gray-700">
        <nav>
          <h6 className="footer-title text-white text-xl">About Us</h6>
          <p className="text-gray-400 xl:w-2/3">We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>
        <nav>
          <h6 className="footer-title text-white text-xl">Quick Links</h6>
          <a className="link link-hover text-gray-400">Home</a><br />
          <a className="link link-hover text-gray-400">Services</a><br />
          <a className="link link-hover text-gray-400">About</a><br />
          <a className="link link-hover text-gray-400">Contact</a>
        </nav>
        <div>
          <h6 className="footer-title text-white text-xl">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-gray-400 xl:w-2/3">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-gray-500 border-none"
              />
              <button className="btn bg-gradient-to-r from-[#f9abbd] to-[#f9ce59] join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
          </footer>
          <p className='text-gray-400 py-5 text-sm justify-self-center'>@2024 Your Company All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
