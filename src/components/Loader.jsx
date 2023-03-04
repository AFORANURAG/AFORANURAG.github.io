import React from 'react'
import { Heading } from '@chakra-ui/react'
import "../loader.css"
export default function Loader() {
  return (
    <div style={{textAlign:"center"}}>
    <span class="loader"></span>
    <Heading fontFamily={"cursive"}>
    Loading please wait
    </Heading>

    </div>
  )
}
