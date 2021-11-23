import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const NoteHeader = styled("h3")({
  fontWeight: 600,
  fontSize: 24,
  lineHeight: 1.7,
  cursor: "pointer",
});

const NoteDetails = styled("p")({
  fontWeight: 300,
  fontSize: 18,
  textAlign: "justify",
  lineHeight: 1.6,
});

const Tags = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
});

const Tag = styled("span")({
  fontWeight: 700,
  color: "blue",
  fontSize: 10,
});

type NoteProps = {
  handleNoteClick: (id: number) => void;
};

const Note = ({ handleNoteClick }: NoteProps) => {
  return (
    <Stack spacing={2.5}>
      <NoteHeader onClick={() => handleNoteClick(1)}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </NoteHeader>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Typography fontWeight={500} color="gray" variant="caption">
            created : 27th jun,2021
          </Typography>
          <Typography fontWeight={500} color="gray" variant="caption">
            updated : 27th jun,2021
          </Typography>
          <Typography fontWeight={500} color="gray" variant="caption">
            author: Atik Mahbub
          </Typography>
        </Stack>
        <Tags>
          <Tag>#tag1</Tag>
          <Tag>#tag2</Tag>
          <Tag>#tag3</Tag>
          <Tag>#tag4</Tag>
        </Tags>
      </Stack>
      <NoteDetails>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </NoteDetails>
    </Stack>
  );
};

export default Note;
