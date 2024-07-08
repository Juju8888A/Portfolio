import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';


const Home = () => {
    return (
        <div className='home-container'>
            <Header />
                <main>
                    <Banner />
                    <About />
                    <Skills />
                    <Achievements />
                </main>
            <Footer/>
        </div>
    );
};

export default Home;