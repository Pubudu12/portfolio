import React from 'react';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './style.css';

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
                    {/* University Education */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-1 col-sm-1 col-1 short-line"></div>
                                <div className="col-md-11 col-sm-11 col-11 dark-blue">
                                    <div className="">
                                        <span className="tf-weight">BSc in Management & Information Technology </span>
                                        <small className="usf-weight">( South Eastern University of Sri Lanka )</small>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-2 col-sm-2 col-2"></div>
                                <div className="col-md-10 col-sm-10 col-10">
                                    <div><p>Duration : <small>From</small> 2017 <small>To</small> 2020</p></div>
                                    <div><p>Grade : 2nd Upper Class ( <b>3.41</b> Points )</p></div>
                                    <div><p>It covered both Information technology related and management related subjects where I could gain a considerable knowledge in both of the fields.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            img
                        </div>
                    </div>

                    {/* BCS */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            img
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-11 col-sm-11 col-11 dark-blue">
                                    <div className="">
                                        <span className="tf-weight">Professional Graduate Diploma </span>
                                        <small className="usf-weight">( British Computer Society )</small>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-1 col-1 short-line"></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-10 col-sm-10 col-10 text-right">
                                    <div><p>Duration : <small>From</small> 2016 <small>To</small> 2020</p></div>
                                    <div><p>Grade : 2nd Upper Class ( <b>3.41</b> Points )</p></div>
                                    <div><p>It covered both Information technology related and management related subjects where I could gain a considerable knowledge in both of the fields.</p></div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* IJSE */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-1 col-sm-1 col-1 short-line"></div>
                                <div className="col-md-11 col-sm-11 col-11 dark-blue">
                                    <div className="">
                                        <span className="tf-weight">Comprehensive Master Java Devloper </span>
                                        <small className="usf-weight">( Institute of Java and Software Engineering, Sri Lanka )</small>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-2 col-sm-2 col-2"></div>
                                <div className="col-md-10 col-sm-10 col-10">
                                    <div><p>Duration : <small>From</small> 2016 <small>To</small> 2017</p></div>
                                    <div><p>Grade : 2nd Upper Class ( <b>3.41</b> Points )</p></div>
                                    <div><p>It covered both Information technology related and management related subjects where I could gain a considerable knowledge in both of the fields.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            img
                        </div>
                    </div>

                     {/* School */}
                     <div className="row mt-4">
                        <div className="col-md-6">
                            img
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-11 col-sm-11 col-11 dark-blue">
                                    <div className="">
                                        <span className="tf-weight">Advanced Level Examination </span>
                                        <small className="usf-weight">( Devi Balika Vidyalaya, Colombo 8, Sri Lanka )</small>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-1 col-1 short-line"></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-10 col-sm-10 col-10 text-right">
                                    <div><p>Duration : <small>From</small> 2013 <small>To</small> 2015</p></div>
                                    <div><p>Grade : 2nd Upper Class ( <b>3.41</b> Points )</p></div>
                                    <div><p>It covered both Information technology related and management related subjects where I could gain a considerable knowledge in both of the fields.</p></div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
