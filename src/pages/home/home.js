import React,{useRef} from 'react';
import Header from '../../components/navbar/Navbar';
import { Canvas,useFrame } from '@react-three/fiber';
import './style.css'
import { OrbitControls } from '@react-three/drei';
import Moon from '../../images/home/moon.jpg';
import { MeshStandardMaterial, Points, SphereGeometry } from 'three';

function Stars() {
    return(
        <mesh>
            <sphereGeometry attach="geometry"/>
            <meshBasicMaterial attach="material"/>
        </mesh>
    )
}

function AnimateCanvas() {
    console.log('called')
    return(
        <Canvas camera={{position:[100,10,0]}}>
            <Stars/>
        </Canvas>
    )
}

// function addStars() {
//     const spere = SphereGeometry(0.25,24,24);
//     const material = MeshStandardMaterial({color:'red'});

//     const [x,y,z] = Array(3).fill().map(()=>MathUtils.randFloatSpread(100));
//     // outside
//     array(200).fill().array.forEach(element => {
//         addStars()
//     });
// }

export default function Home() {
    return(
        <>
            <Header />
            <AnimateCanvas />
        </>
    )
}