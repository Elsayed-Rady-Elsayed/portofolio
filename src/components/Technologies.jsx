import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-700" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.1,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.7,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-6xl text-orange-700" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.0,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className="text-6xl text-blue-700" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-6xl text-neutral-700" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 0.7,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoSass className="text-6xl text-pink-700" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-6xl text-teal-500" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 1.8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoRedux className="text-6xl text-purple-600" />
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          transition={{
            duration: 0.9,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={{
            y: 20,
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandVite className="text-6xl text-yellow-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
