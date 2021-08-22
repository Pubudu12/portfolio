import React,{useRef} from 'react';
import Header from '../../imports/Header';
import { Canvas,useFrame } from '@react-three/fiber';
import './style.css'
import { OrbitControls } from '@react-three/drei';

export default function Home() {
    return(
        <>
            <Header />
            <Canvas>
                <mesh>
                    <torusGeometry attach="geometry" args={[8,3,18,100]}/>
                    <meshBasicMaterial attach="material"/>
                </mesh>
                <OrbitControls></OrbitControls>
            </Canvas>
        </>
    )
}