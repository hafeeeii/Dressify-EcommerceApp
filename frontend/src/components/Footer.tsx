import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content mt-14">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>

        <fieldset className="form-control w-80">
          <p>
            Enter your email address to get $10 off your first order and free
            shipping.Updates information on Sales and Offers.
          </p>
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter..."
              className="input input-bordered w-full pr-16"
            />
            <button className="px-6 bg-white text-black text-xs uppercase rounded-full hover:opacity-80">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
