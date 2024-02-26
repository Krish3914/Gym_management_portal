import { Link } from "react-router-dom";
import { isLoggedIn } from "./utils/isLoggedIn";

const HomeHeader = ()=>{
    return(
        <header className="header-section">
        <div className="container">               
                    <Link to={"/"}><img src="img/logo.png" alt="" className="logo w-1/6"/></Link>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu text-white">
                    <ul>
                        <Link to={"/"}><li className="">Home</li></Link>
                        <Link to={"/aboutus"}><li className="">About</li></Link>
                        <Link to={"/classes"}><li className="">Classes</li></Link>
                        <Link to={"/blogs"}><li className="">Blog</li></Link>
                        <Link to={"/contact"}><li className="">Contacts</li></Link>
                    </ul>
                </nav>
                {
                    isLoggedIn()?<Link to={"/dashboard/navbar"} className="primary-btn signup-btn">Dashboard</Link>:<Link to={"/login"} className="primary-btn signup-btn">LogIn</Link>
                }
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    )
}

export {HomeHeader};