import { Link } from "react-router-dom"



export const Navbar = () => {

    
    const Navlinks  =
    <>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>

    
    </>




  return (
    <nav>

      
    </nav>
  )
}
