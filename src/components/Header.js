import { useState } from "react";
import { imgLogo } from "../constants";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <Link to="/">
        <img src= {imgLogo} className=" h-14 p-2"   />
        </Link>
    );
};

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div className="flex justify-between">
            <Title />
            {/* <div className=""> */}
                <ul className="flex pl-60 py-5">
                    <li className=" px-3"><Link to="/about">AboutUs</Link></li>
                    <li className=" px-3"><Link to="/instamart">Instamart</Link></li>
                    <li className=" px-3"><Link to="/cart">Cart</Link></li>
                </ul>
                <ul className="flex py-5 pr-2">
                    <li className="px-1.5"><Link to="/signup">SignUp</Link></li>
                    <li className="px-1.5"><Link to="/login">LogIn</Link></li>
                </ul>
            {/* </div> */}
            {/* {loggedIn ? (<button onClick={()=>{setLoggedIn(false)}}>LogOut</button>) 
            : (<button className="px-2" onClick={()=>{setLoggedIn(true)}}>LogIn</button>)} */}
        </div>
    );
};

export default Header;