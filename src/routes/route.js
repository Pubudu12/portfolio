import React,{lazy} from 'react';
import { Route,Switch } from 'react-router-dom';
const Home = lazy(()=>import('../pages/home/home'))
const Education = lazy(()=>import('../pages/education/education'))
const Skill = lazy(()=>import('../pages/skills/skills'))
const Experience = lazy(()=>import('../pages/experience/experience'))
const Contact = lazy(()=>import('../pages/contact/contact'))
// const test = lazy(()=>import('../pages/education/test'))

const Routes =()=>{
    return(
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/skills" component={Skill}/>
                <Route path="/education" component={Education}/>
                <Route path="/contact_me" component={Contact}/>
                <Route path="/experiences" component={Experience}/>
                {/* <Route path="/test" component={test}/> */}
            </Switch>
        </>
    )
}

export default Routes;

