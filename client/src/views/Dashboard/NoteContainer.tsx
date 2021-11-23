import { Divider, Stack } from "@mui/material";
import Note from "../../components/Note";

type NoteProps = {
  handleNoteClick: (id: number) => void;
};

const NoteContainer = ({ handleNoteClick }: NoteProps) => {
  return (
    <Stack mt={10} spacing={3}>
      <Note handleNoteClick={handleNoteClick} />
      <Divider orientation="horizontal" />
    </Stack>
  );
};

export default NoteContainer;
