import "./App.css";
import NotePaper from "./components/NotePaper";
import Box from "./components/Box";
import NotesList from "./components/NotesList";
import { FaAngleDoubleDown } from "react-icons/fa";

function App() {
  return (
    <>
      <Box
        className="addScreen"
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <NotePaper />
        <Box className="icon" mb="4px">
          <FaAngleDoubleDown size="36px" color="white" />
        </Box>
      </Box>
      <Box
        className="notesScreen"
        display="flex"
        flexDirection="column"
        height="100vh"
        alignItems="center"
      >
        <NotesList />
      </Box>
    </>
  );
}

export default App;
