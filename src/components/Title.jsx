function Title({title,description}) {
  return (
    <header className="w-full flex flex-col gap-2 text-center my-4">
      <h1 className="text-3xl font-semibold" style={{opacity: "1", transform:"none"}}>
        {title}
      </h1>
      <p className="opacity-70" style={{opacity: "1", transform: "none"}}>
        {description}
      </p>
    </header>
  );
}

export default Title;
