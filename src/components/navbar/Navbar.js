import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return(
        <div className="navbar">
            <div className="d-none d-md-flex flex-grow flex-grow-1">
                <Link to="/">
                    <div className="justify-content-start">
                        Logo
                    </div>
                </Link>
            </div>
            <div className="d-none d-md-flex flex-grow">
                <Link to="/education" className="link-style"><div className="p-2">Education</div></Link>
                <Link to="/skills" className="link-style"><div className="p-2">Skills</div></Link>
                <Link to="/experiences" className="link-style"><div className="p-2">Experience</div></Link>
                <Link to="/contact_me" className="link-style"><div className="p-2">Contact Me</div></Link>
            </div>
            <div className="d-flex d-md-none flex-grow-1 p-2">
                <h5 className="justify-content-start">Home</h5>
                <div className="d-flex flex-row-reverse flex-grow-1">
                    <i className="fas fa-edit"></i>
                </div> 
            </div>
        </div>

        // <nav class="navbar ">
        //     <a class="navbar-brand" href="#">Navbar</a>
        
        //     {/* <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button> */}

        //     <div className="d-none d-md-flex flex-grow">
        //         <Link to="/education" className="link-style"><div className="p-2">Education</div></Link>
        //         <Link to="/skills" className="link-style"><div className="p-2">Skills</div></Link>
        //         <Link to="/experiences" className="link-style"><div className="p-2">Experience</div></Link>
        //         <Link to="/contact_me" className="link-style"><div className="p-2">Contact Me</div></Link>
        //     </div>
        //     <div className="d-flex d-md-none flex-grow-1 p-2">
        //         <h5 className="justify-content-start">Home</h5>
        //         <div className="d-flex flex-row-reverse flex-grow-1">
        //             <i className="fas fa-edit"></i>
        //         </div> 
        //     </div>
        // </nav>
    );
}

export default Header;