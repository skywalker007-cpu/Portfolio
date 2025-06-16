import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(0);

    const projects = [
        {
            id: 0,
            title: "Terminal in Chatbot (PuPu)",
            description: "An innovative chatbot interface that integrates terminal functionality, allowing users to execute commands through natural language interactions.",
            tech: ["React", "Node.js", "WebSocket", "Terminal API"],
            link: "https://github.com/haoxiang-xu/PuPu",
            color: "purple"
        },
        {
            id: 1,
            title: "Video Submission Platform",
            description: "A comprehensive platform for video submissions with real-time processing, user authentication, and advanced video management features.",
            tech: ["React", "Node.js", "MongoDB", "FFmpeg"],
            link: "https://github.com/COSC-499-W2023/year-long-project-team-6.git",
            color: "blue"
        },
        {
            id: 2,
            title: "Post Creation Website",
            description: "A dynamic social media platform with advanced post creation tools, real-time interactions, and responsive design.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            link: "https://github.com/skywalker007-cpu/COSC-360.git",
            color: "green"
        },
        {
            id: 3,
            title: "Quizzing Package",
            description: "An interactive quiz application with customizable questions, real-time scoring, and comprehensive analytics dashboard.",
            tech: ["Python", "Flask", "SQLite", "Chart.js"],
            link: "https://github.com/skywalker007-cpu/533-QuizzingPackage.git",
            color: "orange"
        }
    ];

    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
        >
            {/* Animated Background */}
            <div className="projects-particles">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
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

            <div className="projects-container">
                <motion.h2
                    className="projects-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    My Projects
                </motion.h2>

                <div className="projects-layout">
                    {/* Project Navigation */}
                    <div className="projects-nav">
                        <div className="projects-nav-list">
                            {projects.map((project, index) => (
                                <motion.button
                                    key={project.id}
                                    className={`project-nav-item ${selectedProject === index ? 'active' : ''}`}
                                    onClick={() => setSelectedProject(index)}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="project-nav-title">{project.title}</h3>
                                    <div className="project-nav-tags">
                                        {project.tech.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="project-nav-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Project Display */}
                    <div className="projects-display">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProject}
                                className={`project-card ${projects[selectedProject].color}`}
                                initial={{ opacity: 0, rotateY: 90 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                exit={{ opacity: 0, rotateY: -90 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Card Background Pattern */}
                                <div className="project-pattern"></div>

                                <div className="project-content">
                                    <div>
                                        <motion.h3
                                            className="project-title"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {projects[selectedProject].title}
                                        </motion.h3>

                                        <motion.p
                                            className="project-description"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {projects[selectedProject].description}
                                        </motion.p>

                                        <motion.div
                                            className="project-tech"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {projects[selectedProject].tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="project-tech-tag"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>

                                    <motion.a
                                        href={projects[selectedProject].link}
                                        className="project-button"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        View Project →
                                    </motion.a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects; 