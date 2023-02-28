import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/Orion_github.svg';
import { HashLink } from 'react-router-hash-link';
import { Link as link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "../App.css"
import {
  BrowserRouter as Router
} from "react-router-dom";
import {
  Box,
  Flex,

  HStack,
  Link,
  IconButton,
  Menu,

  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Projects', 'Skills',"Contact Me","My Blogs"];

const NavLink1 = ({ children }) => (
  <Link
    // px={2}
   w={100}
    color={"white"}
    py={1}
    // ml={"100px"}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#aboutme"
    >
    {children}
  </Link>
);
const NavLink2 = ({ children }) => (
  <Link
    px={2}
    color={"white"}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#Projects"
    >
    {children}
  </Link>
);



const NavLink3 = ({ children }) => (
  <Link
    px={2}
    color={"white"}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#Skills"
    >
    {children}
  </Link>
);

const NavLink5 = ({ children }) => (
  <Link
    px={2}
    color={"white"}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#Skills"
    >
    {children}
  </Link>
);

const NavLink4 = ({ children }) => (
  <Link
    px={2}
    ml={20} 
    color={"white"}
    w={120}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#ContactMe"
    >
    {children}
  </Link>
);

const NavLink = ({ children }) => (
  <Link
    px={2}
    color={"white"}
    py={1}
    w={500}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    href="#Resume"
    >
    {children}
  </Link>
);



export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
 
  const handleClick = async () => {
    setIsDownloading(true);
console.log("downloading is started")
    try {
      const response = await fetch("fw21_0957-Anurag-Upadhyay-Resume.pdf");
      const blob = await response.blob();
      console.log(blob)
      const url = window.URL.createObjectURL(blob);
      console.log(url)
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.target="_blank";
      a.download = 'fw21_0957-Anurag-Upadhyay-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.open("https://drive.google.com/file/d/127bV394x7UnI-a9Svyz7F9ZYTxMTash6/view?usp=sharing","_blank")
  
      // URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  const capitalizer=(string)=>{
    let something=string.charAt(0).toLowerCase()
  let string1=something
    for(let i=1;i<string.length;i++){
string1+=string[i]
  }
   return string1
    
  }
  // console.log(answer)
  return (
    <>
    <Router>
    <Box color={"white"}  height={"100px"} bg={useColorModeValue('white.1000', 'white.100')}  backgroundColor={scrolled?"blackAlpha.700":"white.1000"}   zIndex={1} top={0} style={{position:"sticky"}} px={4} marginTop={"20px"}>
      <Flex h={"100px"}  alignContent={"center"} alignItems={'center'} justifyContent={'space-between'} >
        <IconButton
          size={'sm'}
          icon={isOpen ? <>
            <img src="https://img.icons8.com/ios/24/null/close-window--v1.png" alt="close icon"/>
            </> :<>
            <img src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/null/external-hamburger-menu-bar-with-parallel-navigation-button-basic-light-tal-revivo.png" alt="hamburger icon"/>
            </>}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box width={["25%","20%","10%"]}   color={"white"}>
         
          </Box>
          <HStack className={"hello"}
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink5>Home </NavLink5>
<NavLink1>About Me </NavLink1>           
<NavLink3>Skills </NavLink3>
<NavLink2>Projects </NavLink2>
<NavLink4>Contact Me</NavLink4>
<button disabled={isDownloading} style={{width:"200px",marginLeft:"-20px"}}  onClick={handleClick} >
            <NavLink key={"73892472"}   className={"nav-link resume"} >{isDownloading ? 'Downloading...' : 'Download Resume'}</NavLink>  
            
          </button>

            </HStack>

            </HStack>
        <Flex alignItems={'center'}>
         
          <Menu>
          <span className="navbar-text">
        <div className="social-icon" style={{marginTop:"80px"}}>
          <a style={{marginTop:"20px"}} href="https://www.linkedin.com/in/anurag-upadhyay-9676b5239"><img src={navIcon1} alt="" /></a>
          <a style={{marginTop:"20px"}} href="https://github.com/AFORANURAG"><img color={"white"} src={navIcon3} alt="" /></a>
        </div>
        <HashLink to='#connect'>
        </HashLink>
      </span> 

          </Menu>
        </Flex>
        
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} bg={"blackAlpha.700"}  >
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}  className={`nav-link ${capitalizer(link)} }`} activeClass="active" to={link} spy={true} smooth={true} offset={50} duration={500} >{link}</NavLink>
            ))}
            <button disabled={isDownloading} style={{width:"200px",marginLeft:"-22px"}}  onClick={handleClick} >
          <NavLink key={"73892472"}   className={"nav-link resume"} >{isDownloading ? 'Downloading...' : 'Download Resume'}</NavLink>  
          
        </button>
          </Stack>
          

        </Box>
      ) : null}


      </Box>

    

    
    </Router>
    
    
  </> 
 
  )
}




