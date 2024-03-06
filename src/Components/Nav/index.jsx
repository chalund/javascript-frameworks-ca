import { Link } from "react-router-dom"
import { useState } from "react"
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

export const Nav = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
   

    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-orange-300 transition">
      <ul className="text-center text-xl p-20 ">
            <li className="my-4 -y-4 border-b border border-orange-500 hover:bg-orange-300 hover:rounded">
                <Link to="/">Home</Link>
            </li>
            <li className="my-4 -y-4 border-b border border-orange-500 hover:bg-orange-300 hover:rounded">
                <Link to="/product">Product</Link>
            </li>
            <li className="my-4 -y-4 border-b border border-orange-500 hover:bg-orange-300 hover:rounded">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
    </>


  return (
    <nav>
        <div className="bg-orange-300 h-10vh flex justify-between z-50 lg:py-5 px-20 py-4">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold"> LOGO</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <li className="hover:text-fuchsia-700 transition border-b-2 border-orange-300 hover:border-fuchsia-700 cursor-pointer"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li  className="hover:text-fuchsia-700 transition border-b-2 border-orange-300 hover:border-fuchsia-700 cursor-pointer">
                        <Link to="/product">Product</Link>
                    </li>
                    <li  className="hover:text-fuchsia-700 transition border-b-2 border-orange-300 hover:border-fuchsia-700 cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
                <div>
                    {click && content}
                </div>
                    <button className="block sm:hidden transtion" onClick={handleClick}>
                        {click ? <IoCloseOutline/> : <LuMenu/> }
                    </button>
                
            </div>
        </div>
      
    </nav>
  )
}
