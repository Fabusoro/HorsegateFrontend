import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import horsegatelogo from './images/horsegatelogo.png';

const Appheader = () =>
{

    const location = useLocation();
    const [showmenu, showmenuupdate] = useState(false);
    useEffect(() =>
    {
        if (location.pathname === '/' || location.pathname === '/about-us' || location.pathname === '/contactus')
        {
            showmenuupdate(true);
        } else
        {
            showmenuupdate(false);
        }
    }, [])

    return (
        <div>
            {showmenu &&
                <div className="header-container">
                    <img src={horsegatelogo} className="site-logo" />
                    <div className="menu">
                        <Link to={'/'} className="menu-link">Home</Link>
                        <Link to={'/about-us'} className="menu-link">About Us</Link>
                        <Link to={'/contactus'} className="menu-link"> Contact Us</Link>
                    </div>
                    <button className="menu-login-button"><Link to={'/login'} style={{ textDecoration: 'none' }}><h4 className="menu-login-text">Login</h4></Link></button>
                    <button className="menu-register-button"><Link to={'/admission'} style={{ textDecoration: 'none' }}><h4 className="menu-register-text">Join Us</h4></Link></button>
                </div>
            }
        </div>
    )
}

export default Appheader;