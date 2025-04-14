import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto p-6 flex flex-col justify-between gap-10 min-[950px]:flex-row">
        <div className="flex-[1_1_40%] py-2">
          <Link to="/">
            <img src={Logo} alt="B2B LeadBazz" width={200} />
          </Link>
          <p className="text-white text-sm sm:text-base font-light mt-3">
            We help businesses to build high quality hand curated contact lists
            on their target criteria & outreach on them to generate qualified
            leads.
          </p>
          {/* Social links */}
          <ul className="flex items-center gap-3 mt-4 text-2xl">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.facebook.com/zahidkdbb/"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaFacebookF size={20} />
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.LinkedIn.com/in/leadzahid"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaLinkedinIn size={20} />
            </a>
            <Link
              to="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white p-1.5 rounded-full transition-all"
            >
              <FaInstagram size={20} />
            </Link>
          </ul>
        </div>

        <div className="min-[950px]:flex-[1_1_60%] grid md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h2 className="sm:text-lg mb-5 text-white">Company</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <Link
                to="/about-us"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                About Us
              </Link>
              <Link
                to="/#contact"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Contact Us
              </Link>
              <Link
                to="/why-hire-us"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Why Hire Us
              </Link>
              <Link
                to="/portfolio"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Portfolio
              </Link>
            </ul>
          </div>

          <div>
            <h2 className="sm:text-lg mb-5 text-white">Explore</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <Link
                to="/"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Home
              </Link>
              <Link
                to="/#services"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Our Services
              </Link>
              <Link
                to="/pricing"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Pricing
              </Link>
              <Link
                to="/order"
                className="flex items-center cursor-pointer duration-200 ease-linear transition-all hover:translate-x-2"
              >
                Order Now
              </Link>
            </ul>
          </div>

          <div>
            <h2 className="sm:text-lg mb-5 text-white">Contact Us</h2>
            <ul className="text-white sm:text-base text-sm font-light flex flex-col gap-1">
              <li>+880 1732852745</li>
              <li>info@b2bleadbazz.com</li>
              <li>Dhunat, Bogra, Zip 5841, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer section */}
      <div className="border-t">
        <div className="py-2 text-center flex items-center justify-between px-5 sm:flex-row flex-col max-w-7xl mx-auto">
          <div className="flex text-white gap-1 text-sm">
            <p>Developed by</p>
            <a
              href="https://www.facebook.com/MdShobujDev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sky-400 transition-all"
            >
              Md Shobuj
            </a>
          </div>
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <Link to="/" className="underline">
              B2B LeadBazz
            </Link>
          </p>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
