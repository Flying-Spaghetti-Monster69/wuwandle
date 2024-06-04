import { Autocomplete, Avatar, Group, Text } from "@mantine/core";
import { useCharactersStore } from "../store/characters";

const renderAutocomplete = ({ option }) => {
  const { characterName, imageUrl } = useCharactersStore((state) =>
    state.characters.find(
      (character) => character.characterName === option.value
    )
  );

  return (
    <Group gap="sm">
      <Avatar src={imageUrl} size={36} radius="sm" />
      <div>
        <Text size="sm">{option.value}</Text>
      </div>
    </Group>
  );
};

function CharacterDropdown() {
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
        />
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default CharacterDropdown;
