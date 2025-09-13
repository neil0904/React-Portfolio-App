import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div 
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Left column (year) */}
            <div className="w-full lg:w-1/4">
              <motion.p
                    whileInView={{opacity:1, x:0}}
                    initial={{x:-100, opacity:0}} 
                    transition={{ duration: 0.5}} 
                    className="mb-4 text-sm text-neutral-400">
                {exp.year}
              </motion.p>
            </div>

            {/* Right column (details) */}
            <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{x:100, opacity:0}}
                transition={{ duration: 1}}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h3 className="mb-2 text-xl font-semibold">
                {exp.role}{" "}
                <span className="text-sm text-purple-100">
                  - {exp.company}
                </span>
              </h3>
              <p className="text-neutral-400 mb-4">{exp.description}</p>

              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
