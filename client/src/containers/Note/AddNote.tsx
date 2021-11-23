import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/system";
import React from "react";
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

const AddNote = () => {
  return (
    <AddNoteLayout>
      <TextInput label="Title" />
      <TextArea minRows={10} placeholder="Note Details" />
      <TextInput label="Tags" />
    </AddNoteLayout>
  );
};

export default AddNote;
