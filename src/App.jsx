import React from "react";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Proyectos from "./components/Proyectos";
import About from "./components/About";
import Tecnologias from "./components/Tecnologias";

function App() {
  return (
    <main className="my-8 md:my-[5.5rem] mx-auto max-w-6xl scroll-smooth items-center px-5">
      <Hero />
      <Title
        title={"Proyectos"}
        description={"Algunos proyectos y trabajos que he hecho"}
      />
      <Proyectos />
      <Title
        title={"Sobre mi"}
        description={"Descripcion y tecnologias que uso"}
      />
      <section className="w-full grid md:auto-rows-[140px] grid-cols-8 gap-4">
        <About />
        <Tecnologias />
      </section>
    </main>
  );
}

export default App;
