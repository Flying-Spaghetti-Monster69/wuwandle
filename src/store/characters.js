import { create } from "zustand";

export const useCharactersStore = create((set, get)=>({
    characters: [],
    guesses: [],
    
    fetchCharacters: async ()=>{
        const res = await fetch()
    }
}))
