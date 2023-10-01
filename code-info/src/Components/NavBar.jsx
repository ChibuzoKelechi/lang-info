import { FaSearch, FaLaptopCode } from "react-icons/fa";

const NavBar = () => {
    return ( 
        <nav className="nav flex justify-between p-2 w-full mt-0">
            <FaSearch style={{color: 'white', fontSize: '25px'}}/>
            <FaLaptopCode style={{color: 'white', fontSize: '25px'}}/>
        </nav>
     );
}
 
export default NavBar;