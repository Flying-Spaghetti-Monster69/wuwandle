import { Button } from "@mantine/core";
import ConfettiExplosion from "react-confetti-explosion";
import { useCharactersStore } from "../store/characters";

const WinningScreen = () => {
  const { resetGame } = useCharactersStore((state) => state);
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <ConfettiExplosion
          duration={2500}
          particleCount={80}
          width={1000}
          force={0.6}
        />
        <h1 className="text-center text-white font-bold text-lg">
          Congrats! You guessed right!
        </h1>
        <img
          src="https://res.cloudinary.com/dby7b7qgf/image/upload/Wuwandle/encore-happy-sticker.png"
          className=" w-36  mx-auto"
        />
      </div>
      <Button
        type="button"
        className="mt-auto loss-button bg-yellow-300 hover:bg-yellow-400 w-full"
        onClick={() => {
          resetGame();
        }}
      >
        Restart Game
      </Button>
    </>
  );
};

export default WinningScreen;
