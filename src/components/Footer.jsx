import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 py-8 border-t border-dark-border dark:border-light-border text-center"
    >
      <p className="text-dark-text dark:text-light-text">
        © {new Date().getFullYear()} Vishwash Kumar. All rights reserved.
      </p>
      <p className="text-sm mt-2 text-dark-text dark:text-light-text">
        Built with React, Tailwind CSS, and Framer Motion
      </p>
    </motion.footer>
  )
}

export default Footer

