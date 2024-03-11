import { Link } from "react-router-dom";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { FcProcess } from "react-icons/fc";

export const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const mobileNavContent = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl">
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/">Home</Link>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/product">Product</Link>
        </li>
        <li className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-slate-900 h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <Link to="/" className='flex items-center'>
              <FcProcess size={40} />
              <h1 className='ms-3 text-2xl text-white hover:text-fuchsia-700 cursor-pointer'>ReBuy</h1>
          </Link>
        <div className="md:flex flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="hover:text-fuchsia-700 transition border-b-2 border-slate-900 hover:border-fuchsia-700 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-fuchsia-700 transition border-b-2 border-slate-900 hover:border-fuchsia-700 cursor-pointer">
                <Link to="/product">Product</Link>
              </li>
              <li className="hover:text-fuchsia-700 transition border-b-2 border-slate-900 hover:border-fuchsia-700 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:block">
          {click && mobileNavContent}
        </div>
        <button className="block md:hidden transition" onClick={handleClick}>
          {click ? <IoCloseOutline size={36} /> : <LuMenu size={36} />}
        </button>
      </div>
    </nav>
  );
};