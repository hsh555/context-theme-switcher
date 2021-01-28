import { useContext } from "react";
import { themeContext } from "../../provider";

const NavBar = () => {
    const { activeTheme, setActiveTheme } = useContext(themeContext);

    const handleChangeTheme = () => {
        setActiveTheme(() => activeTheme === "LIGHT" ? "DARK" : "LIGHT");
    }

    return (
        <div className="navbar bg-color">
            <div className="nav-left">
                <span className="nav-item text-color">Home</span>
                <span className="nav-item text-color">Products</span>
                <span className="nav-item text-color">About US</span>
            </div>
            <div className="nav-right">
                <label className="theme-change-switcher">
                    <input type="checkbox" onClick={handleChangeTheme} checked={activeTheme === "DARK"} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default NavBar;