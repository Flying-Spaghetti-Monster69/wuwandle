import { Container } from "@mantine/core";
import GuessesHeader from "./GuessesHeader";
import { useCharactersStore } from "../store/characters";
import Guess from "./Guess";

const Guesses = () => {
  const { guesses, characters } = useCharactersStore((state) => state);
  return (
    <Container className="w-[53rem] h-[37rem]">
      <GuessesHeader />
      {guesses.map((guess) => {
        const character = characters.find(
          (char) => char.characterName === guess
        );
        return <Guess key={guess} {...character} />;
      })}
    </Container>
  );
};

export default Guesses;
