// Dependencies
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Tools
import { addNote } from "../store/slices/notesSlice";


// Styled Components
import Box from "./Box";
import TextArea from "./TextArea";
import ColorInput from "./ColorInput";
import Button from "./Button";
import Text from "./Text";


export default function NotePaper() {
  // States
  const [color, setColor] = useState("#E1AB37");
  const [textColor, setTextColor] = useState("#000000");
  const [text, setText] = useState("I will learn JavaScript, React and Redux!");

  // Functions
  const dispatch = useDispatch();

  const handleChange = (e, cb) => {
    cb(e.target.value);
  };

  const add = (e) => {
    if (text !== "") {
      const notepad = e.target.parentElement.parentElement.children[1];
      const newNote = {
        text: text,
        color: color,
        textColor: textColor,
        height: notepad.clientHeight,
        width: notepad.clientWidth,
      };
      dispatch(addNote(newNote));
    }
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box alignContent="center" zIndex={2}>
        <Text
          fontSize="2rem"
          fontWeight="bold"
          fontFamily="Urbanist"
          mb="3"
          textAlign="center"
          color="white"
        >
          NoteApp by Eren Altın
        </Text>

        <TextArea
          className="textarea"
          autoFocus
          color={textColor}
          bg={color}
          placeholderColor={textColor}
          cols="80"
          rows="20"
          border="none"
          value={text}
          onChange={(e) => handleChange(e, setText)}
        />
        <Box
          position="relative"
          bottom="40px"
          display="flex"
          alignItems="center"
        >
          <ColorInput
            value={color}
            type="color"
            border="1px solid"
            bg="white"
            ml="2"
            p="4px"
            height="32px"
            width="32px"
            onChange={(e) => handleChange(e, setColor)}
          />
          <ColorInput
            value={textColor}
            type="color"
            ml="2"
            p="4px"
            height="32px"
            width="32px"
            onChange={(e) => handleChange(e, setTextColor)}
          />
          <Button
            p="4px"
            width="64px"
            border="none"
            ml="2"
            bg={textColor}
            color={color}
            onClick={add}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
