import { informacion_personal } from "../../datos.json";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaAt,
  FaDownload,
  FaInstagram,
} from "react-icons/fa";

import cv from "../assets/CV.pdf";

function About() {
  const { nombre, apellido, descripcion, links } = informacion_personal;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl p-6 gap-3 border-2 col-span-8 md:col-span-4 md:row-span-3  bg-Cgray"
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="flex flex-col gap-y-10 md:gap-y-5 lg:gap-y-20">
        <div className="flex flex-col flex-auto">
          <h1 className="text-4xl font-bold">
            {nombre} {apellido}
          </h1>
          <p className="text-base opacity-70 whitespace-pre-line mt-2">
            {descripcion}
          </p>
        </div>

        <div className="flex flex-wrap mt-2 gap-2 md:gap-x-2">
          {links &&
            Object.keys(links).map((link, key) => (
              <motion.a
                key={key}
                whileHover={{ scale: 1.1 }}
                className=" me-1 flex p-2 rounded-lg items-center cursor-pointer bg-Cwhite text-Cblack hover:bg-Cblue"
                href={links[link] === "cvv" ? cv : links[link]}
                target="_blank"
                rel="noreferrer noopener"
                title="Ver más"
                download={link === "CV" ? "Mario Gomariz CV" : undefined}
              >
                {link === "Linkedin" && <FaLinkedin />}
                {link === "Github" && <FaGithub />}
                {link === "Email" && <FaAt />}
                {link === "CV" && <FaDownload />}
                {link === "Instagram" && <FaInstagram />}
                <span className="mx-1 text-Cblack">{link}</span>
              </motion.a>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
