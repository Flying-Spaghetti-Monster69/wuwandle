import { Container } from "@mantine/core";
import GuessesHeader from "./GuessesHeader";
import { useCharactersStore } from "../store/characters";
import Guess from "./Guess";

const Guesses = () => {
  const { guesses, characters } = useCharactersStore((state) => state);

  return (
    <Container className="guesses h-auto w-[100%] ">
      <GuessesHeader className="content" />
      {guesses.map((guess) => {
        const character = characters.find(
          (char) => char.characterName === guess
        );
        return <Guess key={character.id} {...character} />;
      })}
    </Container>
  );
};

export default Guesses;
