import Image from "next/image";
import Logo from "../public/assets/k.png";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#1C252A] text-white py-3 md:py-5 px-5 md:px-10 lg:px-20 font-semibold text-[12px] md:text-[14px] lg:text-[16px] items-center">
      <Link href="/" className="flex space-x-3 items-center">
        <span>
          <Image src={Logo} alt="logo" className="w-8 h-8" />
        </span>
        <span className="font-bold hidden md:inline-block">KTravel</span>
      </Link>
      <div>
        <ul className="flex flex-row gap-3">
          <li>TRAVEL BLOG</li>
          <li>TRAVEL REVIEW</li>
          <li>ABOUT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
