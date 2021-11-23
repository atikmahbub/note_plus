import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import TextInput from "../../components/Input/TextInput";

const AddNoteLayout = styled("div")({
  padding: 40,
  display: "flex",
  flexDirection: "column",
  gap: 30,
});

const TextArea = styled(TextareaAutosize)({
  borderRadius: 5,
  padding: 10,
  border: "1px solid #CFCFCE",
  fontSize: 16,
  "&:hover": {
    border: "1px solid black",
  },
});

type AddNoteProps = {
  getValue: (value: any) => void;
};

const AddNote = ({ getValue }: AddNoteProps) => {
  const [state, setState] = useState({
    title: "",
    text: "",
    tags: "",
  });

  useEffect(() => {
    if (getValue) {
      getValue(state);
    }
  }, [getValue, state]);

  return (
    <AddNoteLayout>
      <TextInput
        label="Title"
        onChange={(e) => setState({ ...state, title: e.target.value })}
      />
      <TextArea
        minRows={10}
        placeholder="Note Details"
        onChange={(e) => setState({ ...state, text: e.target.value })}
      />
      <TextInput
        label="Tags"
        placeholder="comma separated"
        onChange={(e) => setState({ ...state, tags: e.target.value })}
      />
    </AddNoteLayout>
  );
};

export default AddNote;
