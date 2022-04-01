import React from "react";
import BeautyQuotes from "../components/BeautyQuotes";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PopularArtists from "../components/PopularArtists";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <PopularArtists />
            <BeautyQuotes />
            <Gallery />
        </>
    )
}
export default Home;