import Logo from "../logo/Logo"
import NavB from "../nav/NavB"
import SearchBar from "../searchBar/SearchBar"
import './hearder.css'
const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <Logo />
            <SearchBar />
            <NavB />
        </header>
    )
}

export default Header