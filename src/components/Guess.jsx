import { Group, Paper, Avatar } from "@mantine/core";
import { useCharactersStore } from "../store/characters";

const MATCHING_STYLES =
  "border-black border-2 rounded-[0px] bg-[#006100] flex items-center text-center justify-center h-[5rem] text-white w-[10%]";
const NO_MATCHING_STYLES =
  "border-black border-2 rounded-[0px] bg-[#870000] flex items-center text-center justify-center h-[5rem] text-white w-[10%]";
const MATCHING_STYLES_NAME =
  "border-black border-2 rounded-[0px] bg-[#006100] flex items-center text-center justify-center h-[5rem] text-white w-[30%]";
const NO_MATCHING_STYLES_NAME =
  "border-black border-2 rounded-[0px] bg-[#870000] flex items-center text-center justify-center h-[5rem] text-white w-[30%]";

const Guess = ({
  id,
  imageUrl,
  characterName,
  element,
  weaponType,
  ascensionMats,
  weeklyMats,
  affiliation,
}) => {
  const { correctCharacter, showIconNames } = useCharactersStore(
    (state) => state
  );

  return (
    <Group grow gap="0" preventGrowOverflow={false}>
      <Paper
        withBorder={true}
        style={{ boxSizing: "border-box" }}
        className={
          correctCharacter.characterName === characterName
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        <Avatar src={imageUrl} radius="sm" className="w-[100%] h-[100%]" />
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.characterName === characterName
            ? MATCHING_STYLES_NAME
            : NO_MATCHING_STYLES_NAME
        }
      >
        {characterName}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.element === element
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? element : <h1>xd</h1>}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.weaponType === weaponType
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? weaponType : <h1>xd</h1>}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.ascensionMats === ascensionMats
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? ascensionMats : <h1>xd</h1>}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.weeklyMats === weeklyMats
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? weeklyMats : <h1>xd</h1>}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.affiliation === affiliation
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {affiliation}
      </Paper>
    </Group>
  );
};

export default Guess;
