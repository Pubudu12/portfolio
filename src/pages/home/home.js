import React,{useRef} from 'react';
import Header from '../../components/navbar/Navbar';
import { Canvas,useFrame } from '@react-three/fiber';
import './style.css'
import { OrbitControls } from '@react-three/drei';

function animate(e) {
    console.log(e)
    
    requestAnimationFrame(animate)
    // e.rotation.x += 0.01;
    // e.rotation.y += 0.01;
    // e.rotation.z += 0.01;

}

export default function Home() {
    return(
        <>
            <Header />
            <Canvas>
                <mesh>
                    <torusGeometry attach="geometry" args={[8,3,18,100]}/>
                    <meshBasicMaterial attach="material" color="#f57408" />
                    <ambientLight ></ambientLight>
                </mesh>
                <OrbitControls></OrbitControls>
            </Canvas>
        </>
    )
}