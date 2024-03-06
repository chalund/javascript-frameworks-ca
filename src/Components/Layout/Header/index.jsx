import { Navbar } from "../../Navbar"
import { Logo } from "../Logo"


export const Header = () => {
  return (
   <div className="bg-orange-300 sticky top-0 flex-wr z-[1] mx-auto flex w-full flex-wrap items-center justify-between  p-[2em] uppercase backdrop-blur-[100px]">
        <Logo />
        <Navbar />
   </div>
       
   
  )
}
