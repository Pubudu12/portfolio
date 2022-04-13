import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { Route,HashRouter } from "react-router-dom";
import Routes from "./routes/route";
import Sparkle from "react-sparkle";
import './App.css';
// import ReactOwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// export default function App() {
//     return (
//         <HashRouter>
//             <Suspense fallback={
//                         <div></div>
//                       }>
//                 <Route path="/" component={Routes}></Route>
//             </Suspense>
//         </HashRouter>
//     );
// }
const SparklyThing = () => (
    // Note: the parent of Sparkle must be positioned relatively or absolutely
    <div className="box">
        {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div class='item'>
                <h4>1</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>3</h4>
            </div>
        </OwlCarousel> */}
      <Sparkle 
            color="silver"
            count={30}
            minSize={10}
            maxSize={12}
            overflowPx={80}
            fadeOutSpeed={10}
            flicker={false}
        > 
        </Sparkle>
    </div>
  )

  export default SparklyThing;