"use client";

import portfolioData from "@/data/portfolio.json";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 mb-2 md:mb-0">
                  <span className="text-sm font-medium text-purple-400">{job.dates}</span>
                </div>
                <div className="md:col-span-3 border-l-2 border-white/10 pl-8 md:border-l-0 md:pl-0 relative">
                  {/* Timeline dot for mobile */}
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[41px] top-1.5 md:hidden" />
                  
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <h4 className="text-lg font-medium text-gray-400 mb-4">{job.company}</h4>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
