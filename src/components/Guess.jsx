import { Group, Paper, Avatar } from "@mantine/core";
import { useCharactersStore } from "../store/characters";
import { useEffect } from "react";

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
  const {
    correctCharacter,
    showIconNames,
    setGameOver,
    setCorrectGuess,
    guesses,
  } = useCharactersStore((state) => state);

  useEffect(() => {
    if (correctCharacter.characterName === characterName) {
      setGameOver(true);
      setCorrectGuess(true);
    } else if (guesses.length >= 5) {
      setCorrectGuess(false);
      setGameOver(true);
    }
  }, []);

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
        {showIconNames ? (
          element
        ) : (
          <Avatar
            src={`https://res.cloudinary.com/dby7b7qgf/image/upload/Wuwandle/${element}.webp`}
            radius="sm"
            className="w-[100%] h-[100%]"
          />
        )}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.weaponType === weaponType
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? (
          weaponType
        ) : (
          <Avatar
            src={`https://res.cloudinary.com/dby7b7qgf/image/upload/Wuwandle/${weaponType}.webp`}
            radius="sm"
            className="w-[100%] h-[100%]"
          />
        )}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.ascensionMats === ascensionMats
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? (
          ascensionMats
        ) : (
          <Avatar
            src={`https://res.cloudinary.com/dby7b7qgf/image/upload/Wuwandle/${ascensionMats}.webp`}
            radius="sm"
            className="w-[100%] h-[100%]"
          />
        )}
      </Paper>
      <Paper
        withBorder={true}
        className={
          correctCharacter.weeklyMats === weeklyMats
            ? MATCHING_STYLES
            : NO_MATCHING_STYLES
        }
      >
        {showIconNames ? (
          weeklyMats
        ) : (
          <Avatar
            src={`https://res.cloudinary.com/dby7b7qgf/image/upload/Wuwandle/${weeklyMats}.webp`}
            radius="sm"
            className="w-[100%] h-[100%]"
          />
        )}
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
