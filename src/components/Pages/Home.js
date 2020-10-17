import React from 'react';
import '../../App.css'
import {HeroSection} from '../HeroSection/HeroSection'
import {Cards} from '../Cards/Cards'
import { Footer } from '../Footer/Footer';

export const Home = () =>{
    return(
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}