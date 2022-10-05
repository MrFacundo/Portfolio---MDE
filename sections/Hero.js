import React from "react";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

const HeroContainer = tw.div`
    relative
    flex
    items-center
    justify-center
    h-screen
    mb-12
    bg-fixed
    bg-center
    bg-cover
    custom-img    
`;
const Overlay = tw.div`
    absolute
    top-0
    left-0
    right-0
    bottom-0
    bg-black/40
    z-[2]
`;

const Title = tw(motion.div)`
    text-white
    mt-5
    text-3xl
    md:text-7xl
    font-bold
`;

const Hero = ({ heading, message }) => {
    return (
        <HeroContainer>
            <Overlay></Overlay>
            <div className="z-10">
                <Title
                    data-scroll
                    data-scroll-speed="1"
                    data-scroll-direction="horizontal"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 4.5 }}
                >
                    {heading}
                </Title>
                <Title
                    data-scroll
                    data-scroll-speed="-1"
                    data-scroll-direction="horizontal"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 4.5 }}
                    className="pl-10"
                >
                    {message}
                </Title>
            </div>
        </HeroContainer>
    );
};

export default Hero;
