import { create } from "zustand";
import { createClient } from "contentful";

const client = createClient({
  space: "ytbp6lyzlupm",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useCharactersStore = create((set) => ({
  characters: [],
  guesses: [],
  loading: true,
  showIconNames: false,
  correctCharacter: {},
  isGameOver: false,
  hasCorrectlyGuessedCharacter: false,
  streak: 0,

  fetchCharacters: async () => {
    try {
      const response = await client.getEntries({ content_type: "wuwandle" });
      const characters = response.items.map((character) => {
        const {
          characterName,
          imageUrl,
          element,
          weaponType,
          ascensionMats,
          weeklyMats,
          affiliation,
        } = character.fields || [];
        const id = character.sys.id;
        return {
          id,
          characterName,
          imageUrl,
          element,
          weaponType,
          ascensionMats,
          weeklyMats,
          affiliation,
        };
      });
      if (characters.length > 0) {
        set({ loading: false, characters });
        set((state) => ({
          correctCharacter:
            state.characters[
              Math.floor(Math.random() * state.characters.length)
            ],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },

  addGuesses: (guess) => {
    set((state) => ({ guesses: [...state.guesses, guess] }));
  },

  addStreak: () => {
    set((state) => ({ streak: state.streak + 1 }));
  },

  resetStreak: () => {
    set({ streak: 0 });
  },

  setShowIconNames: () => {
    set((state) => ({ showIconNames: !state.showIconNames }));
  },
  setGameOver: (isGameOver) => {
    set({ isGameOver });
  },
  setCorrectGuess: (booleanValue) => {
    set({ hasCorrectlyGuessedCharacter: booleanValue });
  },
  resetGame: () => {
    set({
      guesses: [],
      isGameOver: false,
      hasCorrectlyGuessedCharacter: false,
    });
    set((state) => ({
      correctCharacter:
        state.characters[Math.floor(Math.random() * state.characters.length)],
    }));
  },
}));
