import { Group, Paper } from "@mantine/core";

const GuessesHeader = () => {
  return (
    <Group grow gap="0" preventGrowOverflow={false}>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        <h4>Photo</h4>
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[30%]"
      >
        Name
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        Element
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        weapon type
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        class
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        affiliation
      </Paper>
      <Paper
        withBorder={true}
        className=" border-yellow-300 border-2 text-white bg-[#181b1e] flex items-center text-center justify-center h-[3.5rem] w-[10%]"
      >
        random shit
      </Paper>
    </Group>
  );
};

export default GuessesHeader;
