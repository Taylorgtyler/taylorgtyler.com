import React, { useEffect } from "react";
import { motion, useAnimation, useScroll } from 'framer-motion';
import LinkedInLink from "../../LinkedInTile";
import GitHubLink from "../../GitHubTile";

const Hero: React.FC = () => {
    const controlTitle = useAnimation();
    const controlFirstSection = useAnimation();
    const controlSecondSection = useAnimation();
    const controlThirdSection = useAnimation();
    const controlFourthSection = useAnimation();
    const controlFinalSection = useAnimation();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        controlTitle.start("visible");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            const firstSectionStart = windowHeight * 0.8;
            const secondSectionStart = windowHeight * 1.6;
            const thirdSectionStart = windowHeight * 2.4;
            const fourthSectionStart = windowHeight * 3.2;
            const finalSectionStart = windowHeight * 4.0;

            if (scrollY >= firstSectionStart) controlFirstSection.start("visible");
            if (scrollY >= secondSectionStart) controlSecondSection.start("visible");
            if (scrollY >= thirdSectionStart) controlThirdSection.start("visible");
            if (scrollY >= fourthSectionStart) controlFourthSection.start("visible");
            if (scrollY >= finalSectionStart) controlFinalSection.start("visible");
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controlTitle, controlFirstSection, controlSecondSection, controlThirdSection, controlFourthSection, controlFinalSection]);

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
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlTitle}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Welcome.</h1>
                </motion.div>
            </div>
            {/* Additional sections should follow a similar pattern */}
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlFirstSection}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Product Manager.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlSecondSection}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Software Engineer.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlThirdSection}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Product Engineer.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlFourthSection}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl md:text-8xl font-bold">Data Engineer.</h1>
                </motion.div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-2 md:px-8">
                <motion.div
                    initial="hidden"
                    animate={controlFinalSection}
                    variants={initialVariant}
                    className="text-center w-full"
                >
                    <h1 className="text-4xl mb-3">{`There's a lot of things you could call me, but let's just start with Taylor.`}</h1>
                    <p className="mt-8 mx-auto max-w-prose">
                        {`I'm a data-focused builder of tools and processes that help customers, businesses, and
                        users bring out the best parts of what they're trying to do. I work from the customers
                        back to the cloud infrastructure and strive to deliver value everywhere along the way.`}
                    </p>
                    <div className="flex justify-center mt-12 space-x-4">
                        <LinkedInLink
                            profileUrl="https://www.linkedin.com/in/taylor-tyler-932349158/"
                            name='Taylor Tyler'
                        />
                        <GitHubLink
                            profileUrl="https://github.com/Taylorgtyler"
                            username="Taylorgtyler"
                            />

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

