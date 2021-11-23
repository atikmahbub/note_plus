import { Divider, Stack } from "@mui/material";
import Note from "../../components/Note";

type NoteProps = {
  handleNoteClick: (id: string) => void;
  notes: any[];
};

const NoteContainer = ({ handleNoteClick, notes }: NoteProps) => {
  return (
    <Stack mt={10} spacing={3}>
      {notes?.map((item, i) => (
        <div key={i}>
          <Note data={item} handleNoteClick={handleNoteClick} />
          <Divider orientation="horizontal" />
        </div>
      ))}
    </Stack>
  );
};

export default NoteContainer;
