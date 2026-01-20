import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      year: '2022-2026',
      degree: 'Bachelor of Technology in IT',
      college: 'RK University, Rajkot',
      description:
        'Focused on software development, algorithms, and web technologies. Completed a final year project on building a responsive e-commerce platform.',
    },
    {
      year: '2019-2021',
      degree: 'Intermediate (Science)',
      college: 'Shiv Pratap High School, Hathua – Gopalganj, Bihar (841438)',
      description:
        'Developed analytical and problem-solving skills through Science and Mathematics, while strengthening language proficiency in English and Hindi.',
    },
  ]

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-10 mt-8"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-dark-textLight dark:text-light-textLight"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1 bg-primary mb-6"
      />
      <div className="relative mt-5">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 border-l-2 border-dark-border dark:border-light-border" />
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-4 h-4 border-[3px] border-primary rounded-full bg-dark-card dark:bg-light-card z-10" />
              
              <div className="text-sm text-dark-text dark:text-light-text mb-1">
                {edu.year}
              </div>
              <h3 className="text-xl font-medium text-dark-textLight dark:text-light-textLight mb-1">
                {edu.degree}
              </h3>
              <p className="italic text-dark-text dark:text-light-text mb-2">
                {edu.college}
              </p>
              <p className="text-dark-text dark:text-light-text">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education

