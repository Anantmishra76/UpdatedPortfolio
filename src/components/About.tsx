import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Anant</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32 max-w-4xl">
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            I'm a MERN Stack Developer experienced in end-to-end web development — building
            responsive React frontends, Node.js/Express backends, and integrating with MongoDB
            and SQL databases. Hands-on with JWT authentication, REST API integration, and
            production deployments.
          </p>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "BUILDING FULL-STACK<br />
            <span className="text-white underline underline-offset-8">WEB APPLICATIONS</span><br />
            FROM CONCEPT TO<br />
            PRODUCTION DEPLOYMENT."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            MERN STACK<br />
            DEVELOPER
          </p>
        </motion.div>
      </div>
    </section>
  )
}
