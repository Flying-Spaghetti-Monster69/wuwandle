import { Paper, Stack, Autocomplete } from "@mantine/core";
import CharacterDropdown from "./CharacterDropdown";

export function OptionPaper() {
  return (
    <Paper
      shadow="xl"
      radius="md"
      withBorder
      p="xl"
      className=" w-[24rem] h-[80vh] bg-[#0c0d0f99] ml-[8.5rem] mt-5 p-0 border-yellow-300"
    >
      <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-tr from-yellow-500 to-yellow-100 bg-clip-text font-cinzel text-transparent text-center top-0">
        Normal mode
      </h1>
      <Stack>
        <h3 className="text-center font-semibold font-sans text-lg text-white mt-1 ">
          Tries: 0/5
        </h3>
        <CharacterDropdown />
      </Stack>
    </Paper>
  );
}
