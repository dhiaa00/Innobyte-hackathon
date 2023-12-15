import { Link, NavLink } from "react-router-dom"

const Navbutton = ({ pageLink }) => {
    return (
        <>
            {
                (location.pathname == "/") ?
                    <li className="rounded-2xl my-4" >
                        <NavLink className={`w-full h-full nav-link py-3 rounded-2xl pl-3 inline-block active`} to={pageLink}>{pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}</NavLink>
                    </li> :
                    <li className="rounded-2xl my-4" >
                        <NavLink className={`w-full h-full nav-link py-3 rounded-2xl pl-3 inline-block`} to={pageLink}>{pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}</NavLink>
                    </li>
            }
        </>

    )
}

export default Navbutton

