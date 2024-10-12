import { Link } from "react-router-dom"
import "./DropdownAcount.css"
import { staticImages } from "../../utils/images"
const DropdownAcount = () => {
    return (
        <div className="languages">
            <div className="language">
                
                <select name="lang">
                    <option id="item-lang" value="fr">Français</option>
                    <option id="item-lang" value="en">English</option>
                    <option id="item-lang" value="es">Espagnole</option>
                    
                </select>


            </div>
            <div className="loginBtn">

                
            <Link
              to="/account"
              className={`icon-link ${
                location.pathname === "/account" ||
                location.pathname === "/account/add"
                  ? "active"
                  : ""
              } inline-flex items-center justify-center`}
            >
              <img src={staticImages.user} alt="" />
            </Link>


                       </div>
        </div>
    )
}

export default DropdownAcount
