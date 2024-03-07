import { Navbar } from "../../Navbar"
import { Logo } from "../Logo"


export const Header = () => {
  return (
   <div className="bg-orange-300 sticky top-0 z-[20] flex-wrap  mx-auto flex w-full items-center justify-between  border-b border-gray-500 p-2">
        <Logo />
        <Navbar />
   </div>
       
   
  )
}
