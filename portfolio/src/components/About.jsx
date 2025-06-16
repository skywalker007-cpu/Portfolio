import { motion } from 'framer-motion';
import computericon from '../assets/coding.png';
import dataicon from '../assets/data-science.png';
import internicon from '../assets/intern.png';

const About = () => {
    return (
        <motion.section
            id="about"
            className="about-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background Pattern */}
            <div className="about-pattern"></div>

            <div className="about-container">
                <motion.h2
                    className="about-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="about-card"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="timeline-fancy">
                        <motion.div
                            className="timeline-item-fancy"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div
                                className="timeline-icon"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={computericon} alt="Computer" className="timeline-icon-image" />
                            </motion.div>
                            <span className="timeline-text-fancy">Bachelor of Science in Computer Science from University of British Columbia</span>
                        </motion.div>

                        <motion.div
                            className="timeline-connector"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        ></motion.div>

                        <motion.div
                            className="timeline-item-fancy"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <motion.div
                                className="timeline-icon"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={internicon} alt="Intern" className="timeline-icon-image" />
                            </motion.div>
                            <span className="timeline-text-fancy">Backend Developer Intern at Alibaba Group</span>
                        </motion.div>

                        <motion.div
                            className="timeline-connector"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        ></motion.div>

                        <motion.div
                            className="timeline-item-fancy"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <motion.div
                                className="timeline-icon"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={dataicon} alt="Data" className="timeline-icon-image" />
                            </motion.div>
                            <span className="timeline-text-fancy">Master of Data Science from University of British Columbia</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About; 