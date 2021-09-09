import React from "react";
import Box from "./Box";
import Text from "./Text";

export default function Note({ note }) {
  return (
    <Box bg={note.color} width={note.width} height={note.height} margin="8px">
      <Text color={note.textColor}> {note.text} </Text>
    </Box>
  );
}
