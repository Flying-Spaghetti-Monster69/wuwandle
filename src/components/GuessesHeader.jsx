import { Group, Paper } from "@mantine/core";

const GuessesHeader = () => {
  return (
    <Group grow gap="0" preventGrowOverflow={false}>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        <h4>Photo</h4>
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[30%] rounded-none"
      >
        Name
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        Element
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        Weapon Type
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        Ascension Material
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        Weekly Material
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white font-semibold font-sans bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%] rounded-none"
      >
        Affiliation
      </Paper>
    </Group>
  );
};

export default GuessesHeader;
