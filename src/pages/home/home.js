import React,{useRef,useMemo} from 'react';
import Header from '../../components/navbar/Navbar';
import { Canvas,useFrame, useLoader } from '@react-three/fiber';
import './style.css'
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import Moon from '../../images/home/moon.jpg';
import Footer from '../../components/footer/Footer';
import { MeshStandardMaterial, Points, SphereGeometry } from 'three';
import { Sphere } from 'three';
import Sparkle from 'react-sparkle';

// function Stars() {
//     const Img = useLoader(THREE.TextureLoader,Moon);

//     let count = 200
//     let sep = 3;

//     // let position = useMemo(() => {
//     //     let position = [];

//     //     for (let xi = 0; xi < count; xi++) {
//     //         for (let zi = 0; zi < count; zi++) {
//     //             let x= sep * (xi - count/ 2)
//     //             let z= sep * (zi - count/ 2)
//     //             let y= 0
//     //             position.push(x,y,z)
//     //         }
//     //     }
//     //     return new Float32Array(position)
//     // })

//     let position = useMemo(() => {
//         let position = [];

//         for (let xi = 0; xi < count; xi++) {
//             let x= sep * (xi - count/ 2)
//             let z= sep * (count/ 2)
//             let y= 0
//             position.push(x,y,z)
//         }
//         return new Float32Array(position)
//     })

//     return(
//         <mesh>
//             {/* <bufferGeometry attach="geometry">
//                 <bufferAttribute 
//                 attachObject={['attributes','position']}
//                 array={position}
//                 count={position.length/3}
//                 itemSize={3}
//                 />
//             </bufferGeometry>

//             <pointsMaterial
//                 attach="material"
//                 map={Img}
//                 color={'white'}
//                 size={0.5}
//                 sizeAttenuation
//                 transparent={false}
//                 alphaTest={0.5}
//                 opacity={1.0}>

//             </pointsMaterial> */}

//             <sphereGeometry attach="geometry" array={position} attachObject={['attributes','position']}>
//             <bufferAttribute 
//                 attachObject={['attributes','position']}
//                 array={position}
//                 count={position.length/3}
//                 itemSize={3}
//                 />
                
               
//             </sphereGeometry>

//             <MeshStandardMaterial attach="material"  >

//             </MeshStandardMaterial>
//         </mesh>
//     )
// }

// function AnimateCanvas() {
//     console.log('called')
//     return(
//         <Canvas className="black" camera={{position:[100,10,0]}}>
//             <Stars/>
//         </Canvas>
//     )
// }

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
            
            <Footer/>
        </>
    )
}