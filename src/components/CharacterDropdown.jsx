import { Autocomplete, Avatar, Group, Text } from "@mantine/core";
import { useCharactersStore } from "../store/characters";

const renderAutocomplete = ({ option }) => {
  const { imageUrl } = useCharactersStore((state) =>
    state.characters.find(
      (character) => character.characterName === option.value
    )
  );

  return (
    <Group gap="sm" className="selection:bg-yellow-300">
      <Avatar src={imageUrl} size={40} radius="sm" />
      <div>
        <Text
          className="font-bold tracking-wide font-sans text-white"
          size="sm"
        >
          {option.value}
        </Text>
      </div>
    </Group>
  );
};

function CharacterDropdown({ getInputProps }) {
  const isLoading = useCharactersStore((state) => state.loading);
  const charactersNames = useCharactersStore((state) =>
    state.characters.map((character) => character.characterName)
  );

  return (
    <>
      {!isLoading ? (
        <Autocomplete
          data={charactersNames}
          maxDropdownHeight={300}
          placeholder="Search for character"
          renderOption={renderAutocomplete}
          {...getInputProps("character")}
        />
      ) : (
        <h1 className="text-center text-white font-bold text-lg">Loading...</h1>
      )}
    </>
  );
}

export default CharacterDropdown;
