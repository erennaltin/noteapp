import React, { useState } from "react";
import Note from "./Note";
import Box from "./Box";
import { useSelector } from "react-redux";
import ColorInput from "./ColorInput";
import Text from "./Text";

export default function NotesList() {
  const [filter, setFilter] = useState("");
  const notes = useSelector((state) => state.notes.value);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text> Notes </Text>
      <ColorInput
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <Box display="flex" flexWrap='wrap'>
        {notes
          .filter((note) => {
            return note.text.toLowerCase().includes(filter.toLowerCase());
          })
          .map((element, index) => {
            return <Note key={index} note={element} />;
          })}
      </Box>
    </Box>
  );
}
