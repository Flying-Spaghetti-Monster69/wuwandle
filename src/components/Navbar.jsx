const Navbar = () => {
  return (
    <nav className="sticky bg-gradient-to-b from-black via-[#0c0d0f99] to-transparent top-0 ">
      <div className="mx-auto max-w-7xl px-32 py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
        <h1 className="bg-gradient-to-tr from-yellow-500 to-zinc-100 bg-clip-text text-transparent text-2xl font-bold  font-cinzel w-fit">
          Wuwandle
        </h1>
        <h3 className="ml-auto text-white">settings</h3>
      </div>
    </nav>
  );
};

export default Navbar;
