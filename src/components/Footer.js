import UserContext from "../utils/userContext";
import { useContext } from "react";
const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <>
            <div>

                <h1>This is a Footer...made by {user.name}</h1>
            </div>
        </>
    );
};

export default Footer;