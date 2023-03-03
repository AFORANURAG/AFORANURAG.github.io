
import React from 'react'
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import css from "../assets/img/icons8-css3.svg"
import aws from "../assets/img/icons8-amazon-web-services.svg"
import js from "../assets/img/icons8-javascript.svg"
import react from '../assets/img/react-2.svg';
import node from '../assets/img/nodejs-1.svg';
import express from '../assets/img/express-109.svg';
import { TextureLoader, MeshStandardMaterial } from 'three';
import myimage from "../assets/img/Anurag-Upadhyay-logo.png"
const textures=[
aws,css,js,react,node,
myimage
]


export default function Box() {

const materials = textures.map(texture => useTexture(texture));
    return (
        <mesh rotation={[0  , Math.PI /2.75, 0]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />
        {[...Array(6)].map((_, index) => (
          <meshStandardMaterial
            attachArray="material"
            key={index}
            map={materials[index]}
          />
        ))}
      </mesh>
      
          
      
      
      

  )
}
