import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}
const Hero = ({ title, description }: HeroProps) => {
  return (
    <section
      className="sm:h-[80vh] h-[65vh]  relative "
      style={{
        background:
          "linear-gradient(90deg, hsla(252, 40%, 29%, 1) 0%, hsla(270, 77%, 71%, 1) 100%)",
      }}
    >
      <svg
        data-v-922fb0dd=""
        className="wave-dark"
        width="100%"
        height="400"
        viewBox="0 0 1920 300"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          data-v-922fb0dd=""
          className="wave-path wave-path-2"
          d="M1920 195V300H0V99C102 84 221 72 354 67C584 57 776 86 993 119C1225 154 1373 193 1859 195C1879 196 1900 196 1920 195Z"
          fill="white"
        ></path>
        <path
          data-v-922fb0dd=""
          className="wave-path wave-path-3"
          d="M1920 36V300H0V131C15 131 31 131 46 130C418 128 680 89 912 54C1129 21 1321 -7 1551 2C1690 7 1814 20 1920 36Z"
          fill="white"
        ></path>
        <path
          data-v-922fb0dd=""
          className="wave-path wave-path-1"
          d="M1920 195V300H0V174C0 174 0 174 0 174C60 197 271 241 637 239C873 238 1040 213 1189 191C1327 170 1449 151 1595 157C1727 162 1838 178 1920 195Z"
          fill="white"
        ></path>
      </svg>
      <div className="  max-w-7xl mx-auto px-5 flex flex-col text-white items-center justify-center text-center h-full ">
        <h1 className="sm:text-5xl text-3xl font-bold">{title}</h1>
        <p className=" sm:text-sm text-xs mt-2 text-gray-100">{description}</p>
        <div className=" mt-8 flex gap-3 items-center justify-center ">
          <Link
            href="/#contact"
            className="z-40 bg-[#B17AEA] text-white px-4 py-2 rounded-md font-medium cursor-pointer  transition-all sm:text-base text-xs"
          >
            CONTACT US
          </Link>
          <a
            target="_blank"
            href="https://www.fiverr.com/leadzahid"
            className="z-40 bg-[#392d69] text-white px-4 py-2 rounded-md font-medium cursor-pointer  transition-all sm:text-base text-xs"
          >
            HIRE US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
