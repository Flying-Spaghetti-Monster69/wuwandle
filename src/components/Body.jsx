import Guesses from "./Guesses";
import Navbar from "./Navbar";
import { OptionPaper } from "./OptionPaper";

const Body = () => {
  return (
    <main className="bg-fixed bg-cover bg-top image-background min-h-screen w-screen">
      <Navbar />
      <div className="flex flex-row grid-cols-2 justify-center">
        <OptionPaper />
        <Guesses />
      </div>
    </main>
  );
};

export default Body;
