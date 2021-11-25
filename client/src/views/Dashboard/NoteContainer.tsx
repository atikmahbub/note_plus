import { Divider, Stack } from "@mui/material";
import Note from "../../components/Note";

type NoteProps = {
  handleNoteClick: (id: string) => void;
  notes: any[];
  handleTagClick: (tag: string) => void;
};

const NoteContainer = ({
  handleNoteClick,
  notes,
  handleTagClick,
}: NoteProps) => {
  return (
    <Stack mt={10} spacing={3}>
      {notes?.map((item, i) => (
        <div key={i}>
          <Note
            data={item}
            handleNoteClick={handleNoteClick}
            handleTagClick={handleTagClick}
          />
          <Divider orientation="horizontal" />
        </div>
      ))}
    </Stack>
  );
};

export default NoteContainer;
