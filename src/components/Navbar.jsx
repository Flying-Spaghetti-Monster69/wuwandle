import { Menu } from "@mantine/core";
import { FaCog } from "react-icons/fa";
import { useCharactersStore } from "../store/characters";

const Navbar = () => {
  const { setShowIconNames, showIconNames } = useCharactersStore(
    (state) => state
  );
  return (
    <nav className="sticky bg-gradient-to-b from-black via-[#0c0d0f99] to-transparent top-0 ">
      <div className="mx-auto max-w-7xl px-32 py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
        <h1 className="bg-gradient-to-tr from-yellow-500 to-zinc-100 bg-clip-text text-transparent text-2xl font-bold  font-cinzel w-fit">
          Wuwandle
        </h1>
        <div className="ml-auto">
          <Menu
            closeOnEscape={true}
            closeOnClickOutside={true}
            closeOnItemClick={false}
          >
            <Menu.Target>
              <button>
                <FaCog />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <input
                    type="checkbox"
                    id="my-checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-yellow-300 focus:ring-opacity-50 checked:bg-yellow-300 checked:border-yellow-300"
                    onChange={() => {
                      setShowIconNames();
                      console.log(showIconNames);
                    }}
                    checked={showIconNames}
                  />
                }
              >
                show names instead of icons
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
