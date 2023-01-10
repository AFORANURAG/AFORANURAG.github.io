import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/Orion_github.svg';
import { HashLink } from 'react-router-hash-link';
import { Link as link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "../App.css"
import {
  BrowserRouter as Router
} from "react-router-dom";

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Projects', 'Skills',"Contact Me","My Blogs","Resume"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    color={"white"}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'white'),
    }}
    >
    {children}
  </Link>
);



export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
    <Router>
    <Box color={"white"}  height={"70px"} bg={useColorModeValue('white.1000', 'white.100')}  backgroundColor={scrolled?"black":"white.1000"}   zIndex={1} top={0} style={{position:"sticky"}} px={4} marginTop={"20px"}>
      <Flex h={16} alignItems={'center'} position="sticky" justifyContent={'space-between'} >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box width={"13%"} marginTop={"20px"} color={"white"}>
          <img width={"20px"} src="https://iili.io/H7Fl0pp.jpg" alt="" />
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link} href={link}  activeClass="active" to={link} spy={true} smooth={true} offset={50} duration={500}>{link}</NavLink>

            ))}
            
            </HStack>

            </HStack>
        <Flex alignItems={'center'}>
         
          <Menu>
          <span className="navbar-text">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anurag-upadhyay-9676b5239"><img src={navIcon1} alt="" /></a>
          <a href="https://github.com/AFORANURAG"><img color={"white"} src={navIcon3} alt="" /></a>
        </div>
        <HashLink to='#connect'>
        </HashLink>
      </span> 
          <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={
"https://i.ibb.co/KF65FcH/Anurag-Upadhyay-logo.png"
                }
              />
            </MenuButton>
         
          </Menu>
        </Flex>
        
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}  activeClass="active" to={link} spy={true} smooth={true} offset={50} duration={500} >{link}</NavLink>
            ))}
          </Stack>
        
        </Box>
      ) : null}


      </Box>

    

    
    </Router>
    
    
  </> 
 
  )
}






          //   <Navbar id="nav-menu" expand="md" className={scrolled ? "scrolled" : ""}>
          //   <Container>
          //     <Navbar.Brand href="/">
          //     <img style={{width:"100px"}} src="https://iili.io/H7Fl0pp.jpg" alt="Anurag-Upadhyay-logo" border="0"/>
          //     </Navbar.Brand>
          //     <Navbar.Toggle aria-controls="basic-navbar-nav">
          //       <span className="navbar-toggler-icon"></span>
          //     </Navbar.Toggle>
          //     <Navbar.Collapse id="basic-navbar-nav">
          //       <Nav className="ms-auto">
          //         <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'nav-link home'} id="Home" onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          //         <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'nav-link skills'} id="Skill" onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          //         <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'nav-link projects'} id="Project" onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          //         <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'nav-link contact'} id="Contact" onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>            
          //       </Nav>
                
          //     </Navbar.Collapse>
          //   </Container>
          // </Navbar>
        //   <Button
        //   variant={'solid'}
        //   colorScheme={'teal'}
        //   size={'sm'}
        //   mr={4}
        //   leftIcon={<AddIcon />}>
          
        // </Button>