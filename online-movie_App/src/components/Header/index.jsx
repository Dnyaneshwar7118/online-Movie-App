import { useEffect, useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {

    const [spinner, setSpinner] = useState(false);

    const handleRemoveButton = () => {
        document.getElementById("btn123").style.display = "none";
        document.getElementById("btn1234").style.display = "none";
        document.getElementById("image-Wrapper").style.display = "none";
        document.getElementById("link-Wrapper").style.padding = "0px";
    }


    return (
        <>
            <div className="container">
                <div className="image-Wrapper" id="image-Wrapper">
                    <img src="logo.png" alt="" />
                </div>
                <div className="link-Wrapper" id="link-Wrapper">
                    <Link to="/Home"></Link>
                    <button id="btn123" onClick={handleRemoveButton}>
                        <Link to="/Login">Login</Link>
                    </button>
                    <button id="btn1234" onClick={handleRemoveButton}>
                        <Link to="/Register">Register</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;