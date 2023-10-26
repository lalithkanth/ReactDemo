import './Header.css';
import { FaUser} from "react-icons/fa";
import DropDown from '../Dropdown/Dropdown';

export default function Header() {
    return(
      <div className="navbar">
        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <DropDown/>
          <FaUser className='icon'/>
        </div>
    </div>
    )
}

