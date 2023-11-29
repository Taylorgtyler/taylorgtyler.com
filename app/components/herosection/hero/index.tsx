import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
    const controlTitle = useAnimation();
    const controlFirstSection = useAnimation();
    const controlSecondSection = useAnimation();
    const controlFinalSection = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Define the points at which each animation should start
            const titleStart = windowHeight * 0.01;
            const firstSectionStart = windowHeight * 0.8;
            const secondSectionStart = windowHeight * 1.6;
            const finalSectionStart = windowHeight * 2.4;

            // Trigger animations based on scroll position
            if (scrollY >= titleStart) controlTitle.start("visible");
            if (scrollY >= firstSectionStart) controlFirstSection.start("visible");
            if (scrollY >= secondSectionStart) controlSecondSection.start("visible");
            if (scrollY >= finalSectionStart) controlFinalSection.start("visible");
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controlTitle, controlFirstSection, controlSecondSection, controlFinalSection]);

    const initialVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", duration: .5 }
        },
    };

    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-left mx-8">
                <motion.div
                    initial="hidden"
                    animate={controlTitle}
                    variants={initialVariant}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Welcome.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen w-full flex items-center justify-left mx-8">
                <motion.div
                    initial="hidden"
                    animate={controlFirstSection}
                    variants={initialVariant}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Product Manager.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen w-full flex items-center justify-left mx-8">
                <motion.div
                    initial="hidden"
                    animate={controlSecondSection}
                    variants={initialVariant}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Software Engineer.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen w-full flex items-top justify-center">
                <motion.div
                    initial="hidden"
                    animate={controlFinalSection}
                    variants={initialVariant}
                    className="text-center"
                >
                    <h1 className="text-4xl mb-3">Product Manager. Product Engineer. Data Guy. Movie Guy.</h1>
                    <p className="mx-20 mt-8">
                        {`Hi, I'm Taylor. I'm a product manager, software engineer, and data enthusiast...
                        My journey in the tech world started in my college data mining class...`}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;

