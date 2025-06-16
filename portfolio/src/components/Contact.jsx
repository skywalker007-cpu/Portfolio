import { motion } from 'framer-motion';
import githubicon from '../assets/github.png';
import linkedinicon from '../assets/linkedin.png';
import emailicon from '../assets/email.png';
import phoneicon from '../assets/phone-call.png';

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="contact-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
        >
            {/* Animated Background Elements */}
            <div className="contact-circles">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="contact-circle"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.1, 0.3],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="contact-container">
                <div className="contact-content">
                    <motion.h2
                        className="contact-title"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.div
                        className="contact-card"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="contact-info">
                            <motion.div
                                className="contact-item"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <motion.div
                                    className="contact-icon"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={emailicon} alt="Email" className="contact-image" />
                                </motion.div>
                                <h3 className="contact-item-title">Email</h3>
                                <p className="contact-item-text">a13317881985@gmail.com</p>
                            </motion.div>

                            <motion.div
                                className="contact-item"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <motion.div
                                    className="contact-icon"
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={phoneicon} alt="Phone" className="contact-image" />
                                </motion.div>
                                <h3 className="contact-item-title">Phone</h3>
                                <p className="contact-item-text">(250) 899-7985</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-buttons"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.a
                            href="https://github.com/skywalker007-cpu"
                            className="contact-button"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="contact-button-shimmer"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="contact-button-content">
                                <img src={githubicon} alt="GitHub" className="contact-button-icon" />
                                GitHub
                            </span>
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/zetian-zhao"
                            className="contact-button"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="contact-button-shimmer"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="contact-button-content">
                                <img src={linkedinicon} alt="LinkedIn" className="contact-button-icon" />
                                LinkedIn
                            </span>
                        </motion.a>
                    </motion.div>

                    <motion.p
                        className="contact-message"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        Ready to bring your ideas to life? Let's build something amazing together!
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact; 