import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-dark-textLight dark:text-light-textLight"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-primary mb-4"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-justify text-dark-text dark:text-light-text leading-relaxed"
      >
        I'm a motivated Full-Stack Developer skilled in MERN stack and Python,
        with a strong focus on practical development and continuous learning. I
        enjoy building scalable applications, solving problems, and turning
        ideas into working products through clean and efficient code.
      </motion.p>
    </motion.section>
  )
}

export default About

