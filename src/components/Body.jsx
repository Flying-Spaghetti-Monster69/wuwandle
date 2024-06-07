import { Flex } from "@mantine/core";
import Guesses from "./Guesses";
import Navbar from "./Navbar";
import { OptionPaper } from "./OptionPaper";
import { useCharactersStore } from "../store/characters";
import { useEffect } from "react";

const Body = () => {
  const getCharacters = useCharactersStore((state) => state.fetchCharacters);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className="bg-fixed bg-cover bg-center image-background fixed top-0 left-0 right-0  bottom-0 overflow-visible">
      <div className="h-full overflow-auto ">
        <Navbar />
        {/* <div className="flex flex-row grid-cols-2 justify-center"> */}
        <Flex
          mih={50}
          gap="xl"
          justify="center"
          align="center"
          direction={{ base: "column", md: "row" }}
          wrap="nowrap"
          className="md:flex-col"
        >
          <OptionPaper />
          <Guesses />
        </Flex>
      </div>
    </main>
  );
};

export default Body;
