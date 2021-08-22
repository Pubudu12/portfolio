import React from 'react';
import Header from '../../components/navbar/Navbar';
import './style.css';
import educationBanner from '../../images/education/edu.jpg'

export default function Education() {
    return (
        <>  
            <div className="education">
                <Header />
                <div className="banner-img-outer">
                    <div className="banner-img">
                        <div className="banner-txt">
                            <h1>Test Text</h1>
                        </div>
                    </div>
                </div>
                <div className="content">
                    
                </div>
            </div>
        </>
    )
}
