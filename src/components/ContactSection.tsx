"use client";

import { motion } from "framer-motion";
import { Star, Trophy, Award, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Have an Awesome Project Idea? <br />
            <span className="text-[#FD853A]">Let's Discuss</span>
          </h2>
        </motion.div>

        {/* Email Input Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center bg-white/5 border border-white/10 rounded-full p-1 pl-6 gap-2 focus-within:border-[#FD853A]/50 transition-colors">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent border-none focus:outline-none text-white py-3 text-lg placeholder:text-gray-500"
            />
            <button className="w-full sm:w-auto bg-[#FD853A] hover:bg-[#e4752f] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all group">
              Send
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Social Proof Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FD853A]/10 rounded-lg">
              <Star className="w-5 h-5 text-[#FD853A]" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">4.9</p>
              <p className="text-gray-500 text-sm">Average Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FD853A]/10 rounded-lg">
              <Trophy className="w-5 h-5 text-[#FD853A]" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">25+</p>
              <p className="text-gray-500 text-sm">Winning Awards</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FD853A]/10 rounded-lg">
              <Award className="w-5 h-5 text-[#FD853A]" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Certified</p>
              <p className="text-gray-500 text-sm">Product Design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
