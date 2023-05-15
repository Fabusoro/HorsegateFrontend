import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";

const Appfooter = () => {

    const location = useLocation();
    const [showmenu, showmenuupdate] = useState(false);

    useEffect(() =>
    {
        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/about-us' || location.pathname === '/contactus')
        {
            showmenuupdate(true);
        } else
        {
            showmenuupdate(false);
        }
    }, [])
    return(
        <div>
            {showmenu &&
            <footer>
            <p className="footer">Copyright &copy; 2023 Horsegate Academy</p>
            </footer>
            }
        </div>
    )
}

export default  Appfooter;