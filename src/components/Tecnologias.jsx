import { tecnologias } from "../../datos.json";
import { motion } from "framer-motion";

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
                    className={`w-14 h-14 ${tech.includes("nextjs") || tech.includes("GitHub") ? "dark:invert" : ""} `}
                    src={tech}
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
