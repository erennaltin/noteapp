import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    removeNote: (state, action) => {
      state.value = state.value.filter((element) => {
        return element.id === action.payload.id ? false : true;
      });
    },
    editNote: (state, action) => {
      state.value = state.value.map((element) => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, removeNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;
