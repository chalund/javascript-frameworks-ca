import { Link } from 'react-router-dom';
import { FcProcess } from "react-icons/fc";

export const Logo = () => {
  return (
    <div className='flex items-center'>
        <Link to="/" className='flex items-center'>
            <FcProcess size={40} />
            <h1 className='ms-2 text-2xl text-white'>ReBuy</h1>
        </Link>
    </div>
  )
}
