import { useState, useContext } from "react";
import { imgLogo } from "../constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Title = () => {
    return (
        <Link to="/">
        <img src= {imgLogo} className=" h-14 p-2"   />
        </Link>
    );
};

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);

    return(
        <div className="flex justify-between bg-orange-50 shadow-lg">
            <Title />
                <ul className="flex pl-60 py-5">
                    <li className=" px-3"><Link to="/">Home</Link></li>
                    <li className=" px-3"><Link to="/instamart">Instamart</Link></li>
                    <li className=" px-3"><Link to="/cart">Cart - {cartItem.length} </Link></li>
                </ul>
                <h4 className="px-3 py-5 flex font-bold">{user.name}</h4>
                <ul className="flex py-5 pr-2">
                    <li className="px-1.5"><Link to="/signup">SignUp</Link></li>
                    <li className="px-1.5"><Link to="/login">LogIn</Link></li>
                </ul>
        </div>
    );
};

export default Header;