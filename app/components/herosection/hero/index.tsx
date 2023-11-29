import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const initialTitleVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", duration: 1 }
        },
    };

    const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const paragraphY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
    const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={initialTitleVariant}
                    style={{ opacity: titleOpacity }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-bold mb-3">
                        Welcome to My Portfolio
                    </h1>
                </motion.div>
            </div>

            <div className="h-[30vh]"></div>

            <div className="w-full flex justify-center">
                <motion.p
                    style={{ 
                        opacity: paragraphOpacity,
                        y: paragraphY
                    }}
                    className="text-xl mb-3"
                >
                    Product Manager. Product Engineer. Data Guy. Movie Guy.
                </motion.p>
            </div>
        </div>
    )
}

export default Hero;


