import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterList: null,
};

export const characterSlice : any = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacterList: (state, action) => {
      state.characterList = action.payload;
    },
  },
});

export const { actions } = characterSlice;
export const selectCharacterList = (state: any) =>
  state.character.characterList;

export default characterSlice.reducer;
