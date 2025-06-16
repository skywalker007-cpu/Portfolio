import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ currentSection, setCurrentSection }) => {
    const [isOpen, setIsOpen] = useState(false)

    // navigation elements
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ]

    const handleNavClick = (sectionId) => {
        setCurrentSection(sectionId)
        setIsOpen(false)
    }

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <motion.div
                        className="navbar-logo"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleNavClick('home')}
                    >
                        <span className="navbar-logo-text">ZZ</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="navbar-desktop">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`navbar-item ${currentSection === item.id ? 'active' : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                {currentSection === item.id && (
                                    <motion.div
                                        className="navbar-item-indicator"
                                        layoutId="activeTab"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        className="navbar-mobile-button"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? (
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className="navbar-mobile-menu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="navbar-mobile-content">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`navbar-mobile-item ${currentSection === item.id ? 'active' : ''}`}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;