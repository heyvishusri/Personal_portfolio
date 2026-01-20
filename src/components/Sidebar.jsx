import { motion } from 'framer-motion'

const Sidebar = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/sriwastaw51186',
      icon: 'https://simpleicons.org/icons/x.svg',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/heyvishusri',
      icon: 'https://simpleicons.org/icons/github.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishwash-kumar-srivastava-104661266/',
      icon: 'https://www.svgrepo.com/show/144030/linkedin-square-logo.svg',
    },
  ]

  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-[90vh] bg-dark-card dark:bg-light-card border border-dark-border dark:border-light-border rounded-2xl p-10 sticky top-10"
    >
      {/* Profile */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          src="/vishu.png"
          alt="Vishwash Kumar - Full-Stack Developer"
          className="h-[120px] w-[120px] rounded-full border-2 border-dark-border dark:border-light-border object-cover mx-auto mb-5 shadow-lg hover:shadow-primary/30 transition-shadow"
        />
        <h2 className="text-2xl font-bold mb-2 text-dark-textLight dark:text-light-textLight">
          Vishwash Kumar
        </h2>
        <p className="bg-dark-bg dark:bg-light-bg px-4 py-1 text-primary border border-dark-border dark:border-light-border text-sm rounded-lg inline-block">
          Full-Stack Developer
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 pt-5 border-t-2 border-dark-border dark:border-light-border"
      >
        <div className="mb-4">
          <h3 className="text-sm font-medium text-dark-text dark:text-light-text mb-1">
            Email
          </h3>
          <a
            href="mailto:vishwaskumar55347@gmail.com"
            className="text-dark-textLight dark:text-light-textLight hover:text-primary transition-colors"
          >
            vishwaskumar55347@gmail.com
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium text-dark-text dark:text-light-text mb-1">
            Phone
          </h3>
          <a
            href="tel:9546741465"
            className="text-dark-textLight dark:text-light-textLight hover:text-primary transition-colors"
          >
            9546741465
          </a>
        </div>
        <div>
          <h3 className="text-sm font-medium text-dark-text dark:text-light-text mb-1">
            Location
          </h3>
          <p className="text-dark-textLight dark:text-light-textLight">
            Gopalganj, Bihar
          </p>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 pt-5 border-t-2 border-dark-border dark:border-light-border"
      >
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} Profile`}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="block"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-6 h-6 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ filter: 'invert(0.7)' }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  )
}

export default Sidebar

