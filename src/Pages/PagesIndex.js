import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/SidebarIndex';
import Navbar from '../Components/Navbar/NavbarIndex';
import HeroSection from '../Components/HeroSection/HeroIndex';
import Experiences from '../Components/Experiences/ExperiencesIndex'
import Section from '../Components/Sections/SectionIndex';
import { homeObjOne } from '../Components/Sections/Data';
import { cardObjSkills, cardObjProjects } from '../Components/Cards/DataCards';
import Footer from '../Components/Footer/FooterIndex';
import Contact from '../Components/ContactForm/ContactIndex';
import CardSection from '../Components/Cards/CardsIndex';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Section {...homeObjOne} />
            <CardSection {...cardObjSkills} />
            <CardSection {...cardObjProjects} />
            <Experiences />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
