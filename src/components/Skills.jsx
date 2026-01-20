import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://simpleicons.org/icons/html5.svg' },
    { name: 'CSS3', icon: 'https://simpleicons.org/icons/css.svg' },
    { name: 'JavaScript (ES6+)', icon: 'https://simpleicons.org/icons/javascript.svg' },
    { name: 'React', icon: 'https://simpleicons.org/icons/react.svg' },
    { name: 'Python', icon: 'https://simpleicons.org/icons/python.svg' },
    { name: 'Node.js', icon: 'https://simpleicons.org/icons/nodedotjs.svg' },
    { name: 'Express.js', icon: 'https://simpleicons.org/icons/express.svg' },
    { name: 'MongoDB', icon: 'https://simpleicons.org/icons/mongodb.svg' },
    { name: 'MySQL', icon: 'https://simpleicons.org/icons/mysql.svg' },
    { name: 'Git', icon: 'https://simpleicons.org/icons/git.svg' },
    { name: 'GitHub', icon: 'https://simpleicons.org/icons/github.svg' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.section
      id="skills"
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
        Skills
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-primary mb-6"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="p-5 rounded-lg border-2 border-dark-border dark:border-light-border bg-dark-bg dark:bg-light-bg text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mx-auto mb-3 filter brightness-0 invert-[0.75] sepia-[0.5] saturate-[10] hue-rotate-[350deg] brightness-[1.1] contrast-[1.01]"
            />
            <h3 className="text-sm font-medium text-dark-textLight dark:text-light-textLight">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Skills

