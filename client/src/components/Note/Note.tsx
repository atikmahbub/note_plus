import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import moment from "moment";

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

type AuthorType = {
  id: number;
  username: string;
  email: string;
};

type dataProps = {
  created: string;
  updated: string;
  title: string;
  tags: string[];
  author: AuthorType;
  text: string;
  id: string;
};

type NoteProps = {
  handleNoteClick: (id: string) => void;
  data: dataProps;
};

const Note = ({ handleNoteClick, data }: NoteProps) => {
  return (
    <Stack spacing={2.5}>
      <NoteHeader onClick={() => handleNoteClick(data?.id)}>
        {data?.title}
      </NoteHeader>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Typography fontWeight={500} color="gray" variant="caption">
            created : {moment(data?.created).format("DD/MM/YYYY")}
          </Typography>
          <Typography fontWeight={500} color="gray" variant="caption">
            updated : {moment(data?.updated).format("DD/MM/YYYY")}
          </Typography>
          <Typography fontWeight={500} color="gray" variant="caption">
            author: {data?.author.username}
          </Typography>
        </Stack>
        <Tags>
          {data?.tags.map((tag: string, i: number) => (
            <Tag key={i}>#{tag}</Tag>
          ))}
        </Tags>
      </Stack>
      <NoteDetails>{data?.text}</NoteDetails>
    </Stack>
  );
};

export default Note;
