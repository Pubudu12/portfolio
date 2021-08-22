import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { Route,HashRouter } from "react-router-dom";
import Routes from "./routes/route";

export default function App() {
    return (
        <HashRouter>
            <Suspense fallback={
                        <div></div>
                      }>
                <Route path="/" component={Routes}></Route>
            </Suspense>
        </HashRouter>
    );
}