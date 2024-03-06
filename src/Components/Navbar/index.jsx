import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";


const NavLinks = () => {
    return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>
    )
}


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    
    }

  return (
    <>
    <nav className="flex w-1/3 justify-end uppercase">
        <div className="hidden w-full justify-between md:flex">
            <NavLinks />
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavbar}>
                {isOpen ? <IoClose size={30}/> : <IoIosMenu size={30}/> }
            </button>
        </div>
    </nav>
    {isOpen && (
        <div className="flex basis-full flex-col items-center mt-3 space-y-3 p-2">
            <NavLinks />
        </div>
    )}
    </>
 
  )
}


