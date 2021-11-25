import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import moment from "moment";
import useAuth from "../../hooks/useAuth";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../app/store/hooks";
import { useNavigate } from "react-router-dom";
import {
  deleteNoteApiCall,
  shareNoteApiCall,
} from "../../features/actions/noteActions";
import Modal from "../Modal";
import ShareUser from "../../containers/Note/ShareUser";
import useGetUsers from "../../hooks/useGetUsers";

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
  cursor: "pointer",
});

const Action = styled("div")({
  fontWeight: 700,
  fontSize: 12,
  color: "green",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 5,
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
  detail?: boolean;
  handleTagClick: (tag: string) => void;
};

const Note = ({ handleNoteClick, data, detail, handleTagClick }: NoteProps) => {
  const { user_id } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { users } = useGetUsers();

  const handleDelete = (id: string) => {
    dispatch(deleteNoteApiCall(id, navigate));
  };

  const handleShareNote = (id: string) => {
    const shareData = {
      note_id: data.id,
      user: id,
    };
    dispatch(shareNoteApiCall(shareData));
  };

  return (
    <>
      <Modal
        header="Share Note"
        open={open}
        handleClickOpen={() => setOpen(true)}
        handleClose={() => setOpen(false)}
        handleSave={() => {}}
      >
        <ShareUser
          users={users?.filter((item: any) => item.id !== user_id)}
          handleShareNote={handleShareNote}
        />
      </Modal>
      <Stack spacing={2.5}>
        {detail && (
          <Box display="flex" justifyContent="flex-end" gap="10px">
            {user_id === data?.author.id && (
              <>
                <Action onClick={() => setOpen(true)}>
                  <ShareIcon fontSize="small" />
                  Share
                </Action>
                <Action onClick={() => handleDelete(data.id)}>
                  <DeleteIcon fontSize="small" />
                  Delete
                </Action>
              </>
            )}
          </Box>
        )}
        <NoteHeader onClick={() => handleNoteClick(data?.id)}>
          {data?.title}
        </NoteHeader>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
              <Tag key={i} onClick={() => handleTagClick(tag)}>
                #{tag}
              </Tag>
            ))}
          </Tags>
        </Stack>
        <NoteDetails>{data?.text}</NoteDetails>
      </Stack>
    </>
  );
};

export default Note;
