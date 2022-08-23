import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUser, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex item-center justify-center">
        <div className="flex items-center justify-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            More <span className="font-bold">Eats</span>
          </h1>
        </div>

        <div className="hidden sm:flex items-center bg-gray-200 p-1 text-[14px] rounded-lg">
          <p className="bg-black text-white p-2 rounded-lg">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}

      <div className="items-center bg-gray-200 rounded-lg px-2 hidden md:flex sm:w-[300px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <button className="bg-black text-white flex items-center py-2">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>

      {/* mobile menu */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed  top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500 transition-all ease-in-out"
            : "fixed  top-0 left-[100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          More <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex-col p-4">
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery size={30} className="mr-4" />
              <span>Order</span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdFavorite size={30} className="mr-4" />
              <span>Favorites</span>
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <FaWallet size={30} className="mr-4" />
              <span>Wallet</span>
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <MdHelp size={30} className="mr-4" />
              <span>Help</span>
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <AiFillTag size={30} className="mr-4" />
              <span>Promotion</span>
            </li>{" "}
            <li className="text-xl py-4 flex items-center">
              <BsFillSaveFill size={30} className="mr-4" />
              <span>Best One</span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUser size={30} className="mr-4" />
              <span>Invite Friends</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
