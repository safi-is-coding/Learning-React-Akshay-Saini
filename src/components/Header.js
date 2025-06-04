import {LOGO_URL} from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    // useEffect(()=> {
    //     console.log("useEffect called");
    // }, [])

    const onlineStatus = useOnlineStatus()


    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" ><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        {onlineStatus ? "Online : 🟢" : "Offline : 🔴" }
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li> 
                    <button 
                        className="login"
                        style={
                            {backgroundColor: btnName === "Login" ? "green" : "red"}
                        }
                        onClick={()=> {

                            btnName === "Login" ?
                            setBtnName("Logout") :
                            setBtnName("Login")
                            
                        }} 
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;