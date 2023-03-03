import React from 'react'
import { Heading } from '@chakra-ui/react'
export default function Loader() {
  return (
    <div style={{textAlign:"center"}}>
    <img style={{width:"100%",height:window.innerHeight/1.1}} src="https://media2.giphy.com/media/l1BgQWSijNp2plL7G/giphy.gif?cid=ecf05e47rj1ujgsm2lua0vovn5dvczaqjj169xufhfzwt349&rid=giphy.gif&ct=g" alt="" />
    <Heading fontFamily={"cursive"}>
    Loading please wait
    </Heading>
    </div>
  )
}
