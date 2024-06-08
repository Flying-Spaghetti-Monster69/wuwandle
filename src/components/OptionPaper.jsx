import { Button, Paper, Stack } from "@mantine/core";
import CharacterDropdown from "./CharacterDropdown";
import { useForm } from "@mantine/form";
import { useCharactersStore } from "../store/characters";
import LosingScreen from "./LosingScreen";
import WinningScreen from "./WinningScreen";

function capitalizeFirstLetter(string) {
  const char = string.toLowerCase();
  return char.charAt(0).toUpperCase() + char.slice(1);
}

export function OptionPaper() {
  const {
    addGuesses,
    characters,
    guesses,
    isGameOver,
    hasCorrectlyGuessedCharacter,
    streak,
  } = useCharactersStore((state) => state);
  const guess = useForm({
    mode: "uncontrolled",
    initialValues: {
      character: "",
    },

    validate: {
      character: (value) =>
        characters.find(
          (char) => char.characterName === capitalizeFirstLetter(value)
        )
          ? null
          : "invalid character",
    },
  });

  return (
    <form
      className="option-pager my-5 p-0 w-[90%] h-[55vh]"
      onSubmit={guess.onSubmit((values) => {
        addGuesses(capitalizeFirstLetter(values.character));
        guess.reset();
      })}
    >
      <Paper
        shadow="xl"
        radius="md"
        withBorder
        p="xl"
        className=" w-[100%] h-[100%] bg-[#0c0d0f99] border-yellow-300"
      >
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-tr from-yellow-500 to-yellow-100 bg-clip-text font-cinzel text-transparent text-center top-0">
          Normal mode
        </h1>

        <Stack className="h-[90%]">
          <h3 className="text-center font-semibold font-sans text-lg text-white mt-1 ">
            Tries: {guesses.length}/5 - Streak: {streak}
          </h3>
          {isGameOver ? (
            hasCorrectlyGuessedCharacter ? (
              <WinningScreen />
            ) : (
              <LosingScreen />
            )
          ) : (
            <>
              <CharacterDropdown
                key={guess.key("character")}
                {...guess.getInputProps("character")}
                form={guess.form}
                getInputProps={guess.getInputProps}
              />
              <Button
                type="submit"
                className="mt-auto mb-2 bg-yellow-300 hover:bg-yellow-400"
              >
                Submit
              </Button>
            </>
          )}
        </Stack>
      </Paper>
    </form>
  );
}
