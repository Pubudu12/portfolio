import React,{lazy} from 'react';
import { Route,Switch } from 'react-router-dom';
const Home = lazy(()=>import('../pages/home/home'))

const Routes =()=>{
    return(
        <>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </>
    )
}

export default Routes;

