import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section
            id="home"
            className="home-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Dynamic Background */}
            <div className="home-background">
                <div className="home-overlay"></div>
            </div>

            {/* Floating Animation Elements */}
            <div className="home-floating-elements">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-element"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                    />
                ))}
            </div>

            <div className="home-content">
                <motion.h1
                    className="home-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.span
                        className="home-title-glow"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(255,255,255,0.5)",
                                "0 0 40px rgba(255,255,255,0.8)",
                                "0 0 20px rgba(255,255,255,0.5)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ZETIAN ZHAO
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="home-subtitle"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Software & Website Developer
                </motion.p>

                <motion.p
                    className="home-contact"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    (250) 899-7985 | a13317881985@gmail.com
                </motion.p>

                <motion.div
                    className="home-buttons"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.a
                        href="https://github.com/skywalker007-cpu"
                        className="home-button"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/zetian-zhao"
                        className="home-button"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        LinkedIn
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Home; 