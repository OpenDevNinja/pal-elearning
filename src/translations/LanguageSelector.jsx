import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './LanguageSelector.css';
import { staticImages } from "../utils/images";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "Français" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="languages">
      <div className="language">
        <select 
          name="lang" 
          value={i18n.language} 
          onChange={changeLanguage}
        >
          {languages.map((lng) => (
            <option key={lng.code} value={lng.code}>
              {lng.lang}
            </option>
          ))}
        </select>
      </div>
      <div className="loginBtn">
       {/*  <Link to="/account">{i18n.t('header.login')}
        Mon compte
        </Link> */}
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
              
             <span> Mon compte</span>
            </Link>
      </div>
    </div>
  );
};

export default LanguageSelector;
