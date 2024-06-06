import { Group, Paper, Avatar } from "@mantine/core";

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
  console.log(imageUrl);
  return (
    <Group grow gap="0" preventGrowOverflow={false}>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        <Avatar src={imageUrl} radius="sm" size={79} />
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[30%]"
      >
        {characterName}
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        {element}
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        {weaponType}
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        {ascensionMats}
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        {weeklyMats}
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-1 bg-[#181b1e] flex items-center text-center justify-center h-[5rem] text-white w-[10%]"
      >
        {affiliation}
      </Paper>
    </Group>
  );
};

export default Guess;
