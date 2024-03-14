import { informacion_personal } from "../../datos.json";
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
    <div
      className="rounded-3xl p-6 gap-3 border-2 col-span-8 md:col-span-4 md:row-span-3  bg-Cgray"
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold">
            {nombre} {apellido}
          </h1>
          <p className="text-base opacity-70 whitespace-pre-line mt-3">
            {descripcion}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {links &&
            Object.keys(links).map((link, key) => (
              <a
                key={key}
                className="mt-2 md:mt-10 mx-1 flex items-center justify-center p-2 rounded-lg cursor-pointer bg-Cwhite text-Cblack hover:bg-Cblue"
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
                <span className="mx-1 text-Cblack font-bold">{link}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
