import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = () => {
    return (
        <p>{title}</p>
    )
}

const About = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text=[17px] max-w-3xl leading-[30px]">
                👋 Hi, I'm David Gao, a passionate Machine Learning Engineer with a strong
                foundation in Computer Science, Mathematics, and Physics.
                I'm passionate about leveraging my skills and experience in machine learning,
                deep learning, and software engineering to contribute to exciting projects.
                Let's connect and explore opportunities to work together!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div >
    )
}

export default About
