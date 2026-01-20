import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description:
        'A fully responsive online store built with modern design principles.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NTg0MjU5NjM&ixlib=rb-1.2.1&q=80&w=400',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Business Landing Page',
      description:
        'A sleek, single-page site for a corporate client to generate leads.',
      image:
        'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTY1ODQyNTk5OQ&ixlib=rb-1.2.1&q=80&w=400',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Personal Blog Theme',
      description:
        'A clean, content-focused blog theme designed for readability.',
      image:
        'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxwb3J0Zm9saW98ZW58MHx8fHwxNjU4NDI2MDUx&ixlib=rb-1.2.1&q=80&w=400',
      tags: ['React', 'REST APIs', 'MongoDB'],
    },
    {
      title: 'Analytics Dashboard UI',
      description: 'A data visualization dashboard UI created with CSS Grid.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRhc2hib2FyZHxlbnwwfHx8fDE2NTg0MjYwMjM&ixlib=rb-1.2.1&q=80&w=400',
      tags: ['Python', 'MySQL', 'Git & GitHub'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="projects"
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
        Portfolio
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-dark-bg dark:bg-light-bg rounded-xl border border-dark-border dark:border-light-border overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-dark-textLight dark:text-light-textLight">
                {project.title}
              </h3>
              <p className="text-dark-text dark:text-light-text mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects

