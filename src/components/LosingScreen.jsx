import { Button } from "@mantine/core";
import { useCharactersStore } from "../store/characters";

const LosingScreen = () => {
  const { resetGame, correctCharacter } = useCharactersStore((state) => state);
  return (
    <>
      <div className="flex items-center text-center justify-center h-[5%] loss-display-small-text">
        <h1 className="text-center text-white font-bold text-lg">
          Sorry! you <span className=" text-red-600">Lost...</span>
        </h1>
        <img
          src="https://res.cloudinary.com/dby7b7qgf/image/upload/f_auto,q_auto/v1/Wuwandle/yanyang-crying-sticker"
          className="w-16 h-16"
        />
      </div>
      <div className="h-[15%] loss-display">
        <h2 className="text-center text-white font-semibold text-base">
          The correct character was{" "}
          <span className=" text-green-400">
            {correctCharacter.characterName}
          </span>
        </h2>
        <img src={correctCharacter.imageUrl} className=" w-36  mx-auto" />
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
export default LosingScreen;
