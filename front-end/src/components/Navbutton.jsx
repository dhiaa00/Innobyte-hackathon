import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbutton = ({ pageLink, imgName }) => {
    pageLink.replace(" ","")
    const [pageLinkTMP,setpageLinkTMP] = useState(pageLink)
    useEffect(() => {
        setpageLinkTMP(pageLink.replace(" ",""))
    },[pageLink])
    return (
        <>
            <li className="rounded-2xl my-4 flex items-center" >

                <NavLink className={`w-full h-full flex gap-3 nav-link py-3 rounded-2xl pl-3`} to={pageLinkTMP == "dashboard" ? "/" : pageLinkTMP}>
                    <div>
                        <div className="img">
                            <img src={imgName} alt="" />
                        </div>
                    </div>
                    {pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}
                </NavLink>

            </li>
        </>

    )
}

export default Navbutton

