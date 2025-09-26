import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter,FaInstagram  } from "react-icons/fa";

import './index.css'

const Header = () => 
    <nav className="navbarMob">
            <h3 className="navheading">Foodland</h3>
             <ul className="navItemsdesk">
                <li className="navItem">Home</li>
                <li className="navItem">Recipes</li>
                <li className="navItem">Blog</li>
                <li className="navItem">Conatact</li>
                <li className="navItem">About us</li>
            </ul>
           
           <div className="iconCon">
                <TiSocialFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaInstagram  className="icon"/>
            </div>
    </nav>

export default Header;
