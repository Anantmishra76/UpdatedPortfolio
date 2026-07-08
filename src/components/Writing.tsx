import { motion } from 'framer-motion'

const projects = [
  {
    title: 'LearningEdge',
    description: 'Full-stack e-learning platform built with MERN, Razorpay payment gateway, and Cloudinary media uploads. Implemented secure JWT auth, Redux state management, and a responsive Tailwind CSS UI.',
    stack: 'MERN · Redux · Razorpay · Cloudinary · Tailwind CSS',
    link: 'https://github.com/Anantmishra76',
  },
  {
    title: 'Real Estate Platform',
    description: 'Full-stack real estate platform with role-based authentication and complete CRUD operations. Designed a responsive React frontend with modular components, client-side routing, and file uploads.',
    stack: 'MERN · Role-Based Auth · React Router · File Upload',
    link: 'https://github.com/Anantmishra76',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Selected Builds</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-8 md:py-10 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 tracking-widest uppercase">
                    {project.stack}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
