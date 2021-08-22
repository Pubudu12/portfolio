import React from "react";
import { Route,Link } from "react-router-dom";

function Header() {
    return(
        <div className="d-flex p-3">
            <div className="d-none d-md-flex flex-grow flex-grow-1">
                <a href="">
                    <div className="justify-content-start">
                        Logo
                    </div>
                </a>
            </div>
            <div className="d-none d-md-flex flex-grow">
                <Link to="" className="link-style"><div className="p-2">Home</div></Link>
                <Link to="" className="link-style"><div className="p-2">Education</div></Link>
                <Link to="" className="link-style"><div className="p-2">Skills</div></Link>
                <Link to="" className="link-style"><div className="p-2">Experience</div></Link>
                <Link to="" className="link-style"><div className="p-2">Contact Me</div></Link>
            </div>
            <div className="d-flex d-md-none flex-grow-1 p-2">
                <h5 className="justify-content-start">Home</h5>
                <div className="d-flex flex-row-reverse flex-grow-1">
                    <i className="fas fa-edit"></i>
                </div> 
            </div>
        </div>
    );
}

export default Header;