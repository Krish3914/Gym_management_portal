import { Link } from "react-router-dom";

const HomeHeader = ()=>{
    return(
        <header className="header-section">
        <div className="container">
            <div className="logo">
               
                    <Link to={"/"}><img src="img/logo.png" alt=""/></Link>
            </div>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu text-white">
                    <ul>
                        <Link to={"/"}><li className="">Home</li></Link>
                        <li className="">About</li>
                        <li className="">Classes</li>
                        <li className="">Blog</li>
                        <Link to={"/contact"}><li className="">Contacts</li></Link>
                    </ul>
                </nav>
                <Link to={"/login"} className="primary-btn signup-btn">LogIn</Link>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    )
}

export {HomeHeader};