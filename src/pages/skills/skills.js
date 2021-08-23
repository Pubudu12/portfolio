import React from 'react';
import Header from '../../components/navbar/Navbar';
import './style.css';
import ProgressBar from '@ramonak/react-progress-bar';
import CSSIMG from '../../images/skill/icons/css.svg';
import Footer from '../../components/footer/Footer';

export default function Skills() {
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
                <div className="container content">
                    <div className="row">
                        <div className="skill-content-box">
                            <div className="border-top-half"></div>
                            <div className="border-left-half"></div>
                                A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills.
                            <div className="border-bottom-half"></div>
                            <div className="border-right-half"></div>
                        </div>
                    </div>

                    {/* skills */}
                    <div className="container mt-4">
                        <div className="row">
                            <h3 className="mb-2">See what I am good at</h3>
                            <div className="col-md-6 col-12">
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>CSS</p>
                                    </div>
                                    <ProgressBar completed={60} bgColor={'blue'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>Javascript</p>
                                    </div>
                                    <ProgressBar completed={40} bgColor={'pink'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>PHP</p>
                                    </div>
                                    <ProgressBar completed={80} bgColor={'purple'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>HTML</p>
                                    </div>
                                    <ProgressBar completed={70} bgColor={'black'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>Laravel</p>
                                    </div>
                                    <ProgressBar completed={60} bgColor={'blue'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>React Js</p>
                                    </div>
                                    <ProgressBar completed={60} bgColor={'green'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-12">
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>CSS</p>
                                    </div>
                                    <ProgressBar completed={60} bgColor={'orange'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>Javascript</p>
                                    </div>
                                    <ProgressBar completed={40} bgColor={'grey'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>PHP</p>
                                    </div>
                                    <ProgressBar completed={80} bgColor={'brown'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>HTML</p>
                                    </div>
                                    <ProgressBar completed={70} bgColor={'black'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-1 ml-2 col-2 mt-3">
                                        <p>Laravel</p>
                                    </div>
                                    <ProgressBar completed={90} bgColor={'blue'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                                <div className="row mt-2">
                                    <div className="icon-wrapper col-md-1 ml-2 col-2">
                                        <img src={CSSIMG} alt="css"/>
                                    </div>
                                    <div className="col-md-4 ml-2 col-5 mt-3">
                                        <p>React Js</p>
                                    </div>
                                    <ProgressBar completed={60} bgColor={'royalblue'} transitionDuration={'1s'} width={400} transitionTimingFunction={'ease-in'}></ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
