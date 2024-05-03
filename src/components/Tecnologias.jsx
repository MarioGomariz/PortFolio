import { tecnologias } from "../../datos.json";
import { motion } from "framer-motion";

const renderIcon = (tech) => {
  switch (tech) {
    case "html":
      return "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
    case "css":
      return "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg";
    case "js":
      return "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    case "react":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
    case "tailwind":
      return "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
    case "sass":
      return "https://www.svgrepo.com/show/374061/sass.svg";
    case "typescript":
      return "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
    case "node":
      return "https://www.svgrepo.com/show/355140/node.svg";
    case "mysql":
      return "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg";
    case "nextjs":
      return "https://icons8.com/icon/MWiBjkuHeMVq/next.js";
    case "git":
      return "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg";
    case "github":
      return "https://icons8.com/icon/106562/github";
    case "vec":
      return "https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg";
    case "figma":
      return "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg";
    default:
      return null;
  }
};

function Tecnologias() {
  return (
    <>
      {Object.entries(tecnologias).map(([nombre, techArray], key) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          key={key}
          className={`rounded-3xl p-6 border-2 col-span-8 md:row-span-1 md:col-span-4 bg-Cgray`}
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold uppercase">{nombre}</h3>
            <div className="flex space-x-5 mt-1">
              {techArray.map((tech, index) => (
                <div key={index}>
                  <img
                    className="w-14 h-14"
                    src={renderIcon(tech)}
                    alt={tech}
                    title={tech}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Tecnologias;
