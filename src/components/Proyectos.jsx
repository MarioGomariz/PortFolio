import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { proyectos } from "../../datos.json";

import sinergiaImg from "../assets/sinergia.webp";
import todoImg from "../assets/todo.webp";
import fairwayImg from "../assets/fairway.webp";
import carritoImg from "../assets/carrito.webp";

const getImageSrc = (imageName) => {
  switch (imageName) {
    case "sinergia":
      return sinergiaImg;
    case "todo":
      return todoImg;
    case "fairway":
      return fairwayImg;
    case "carrito":
      return carritoImg;
    default:
      return "";
  }
};

const TarjetaProyecto = ({ proyecto }) => {
  const tarjetaClases =
    proyecto.tipo === "trabajo" ? "md:row-span-3 " : "md:row-span-2";
  const img =
    proyecto.tipo === "trabajo"
      ? "mt-8 w-fill h-44 md:h-64 "
      : "w-fill h-44 md:w-56 md:h-36 md:self-end";

  return (
    <div
      className={`rounded-3xl p-6 gap-3 border-2 col-span-8 md:col-span-4 ${tarjetaClases} bg-Cgray`}
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">{proyecto.nombre}</h3>
            <a
              className="p-2 border-2 rounded-full cursor-pointer  text-Cwhite hover:text-Cblue hover:border-Cblue"
              href={proyecto.link}
              target="_blank"
              rel="noreferrer"
              title="Ver más"
            >
              <MdArrowOutward />
            </a>
          </div>
          <p className="text-base opacity-30">{proyecto.descripcion}</p>
          <div className="flex items-center gap-2 opacity-60 font-medium">
            {proyecto.tecnologias.map((tecnologia, index) => (
              <span key={index} className="text-sm ">
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
        

        <div
          className={`rounded-3xl ${img} bg-cover`}
          style={{ backgroundImage: `url(${getImageSrc(proyecto.img)})` }}
        ></div>
      </div>
    </div>
  );
};

function Proyectos() {
  return (
    <section className="w-full grid auto-rows-[380px] md:auto-rows-[140px] grid-cols-8 gap-4">
      {Object.keys(proyectos).map((key) => (
        <TarjetaProyecto key={key} proyecto={proyectos[key]} />
      ))}
    </section>
  );
}

export default Proyectos;

{
  /* {proyecto.tipo === "trabajo" ? (
            <img
              className="rounded-2xl object-cover"
              src={getImageSrc(proyecto.img)}
              alt={proyecto.nombre}
              title="Project screenshot"
            />
          ) : (
            <></>
          )} */
}
