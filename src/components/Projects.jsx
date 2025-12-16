import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((pro, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
           <div className="w-full lg:w-1/4">
  {pro.video ? (
    <motion.video
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      src={pro.video}
      controls
      muted
      autoPlay
      loop
      className="mb-6 rounded w-[150px] h-[150px]"
    />
  ) : (
    <motion.img
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      src={pro.image}
      alt={pro.title}
      className="mb-6 rounded w-[150px] h-[110px]"
    />
  )}
</div>


            {/* Project details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h3 className="mb-2 text-xl font-semibold">{pro.title}</h3>
              <p className="text-neutral-400 mb-4">{pro.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {pro.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
