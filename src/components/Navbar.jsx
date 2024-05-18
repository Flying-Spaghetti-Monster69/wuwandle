const Navbar = () => {
  return (
    <nav className="sticky bg-gradient-to-b from-black via-[#0c0d0f99] to-transparent top-0 ">
      <div className="mx-auto max-w-7xl px-8 py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
        <h1 className="bg-gradient-to-tr from-yellow-500 to-zinc-100 bg-clip-text text-transparent text-2xl font-bold pl-20 font-cinzel w-fit">
          Wuwandle
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
