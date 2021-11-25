import { styled } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Modal from "../../components/Modal";
import AddNote from "../../containers/Note/AddNote";
import { useNavigate } from "react-router";
import ProfileBar from "./ProfileBar";
import useAuth from "../../hooks/useAuth";
import SearchBar from "./SearchBar";
import NoteContainer from "./NoteContainer";
import { useAppDispatch } from "../../app/store/hooks";
import { addNoteApiCall } from "../../features/actions/noteActions";
import useNoteHook from "../../hooks/useNoteHook";
import { useDebounce } from "use-debounce";

export const DashboardContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
  padding: 50,
});

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { username, user_id } = useAuth();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [searchValue] = useDebounce(search, 800);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [addNote, setAddNote] = useState<any>();
  const { allNotes } = useNoteHook(searchValue);

  const handleClose = () => {
    setOpen(false);
  };
  const handleNoteClick = (id: string) => {
    navigate({
      pathname: "/note",
      search: `id=${id}`,
    });
  };

  const handleAddNote = (value: any) => {
    if (value) {
      setAddNote(value);
    }
  };

  const handleSaveNote = () => {
    if (addNote) {
      addNote["tags"] = addNote?.tags?.split(",");
      addNote["author"] = user_id;
      dispatch(addNoteApiCall(addNote, navigate));
    }
  };

  const handleTagClick = (tag: string) => {
    setSearch(tag);
  };

  return (
    <Fragment>
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        header="Add Note"
        handleSave={handleSaveNote}
      >
        <AddNote getValue={handleAddNote} />
      </Modal>
      <DashboardContainer>
        <ProfileBar username={username} />
        <SearchBar
          handleClickOpen={handleClickOpen}
          onChange={(e) => setSearch(e.target.value)}
        />
        <NoteContainer
          handleNoteClick={handleNoteClick}
          notes={allNotes}
          handleTagClick={handleTagClick}
        />
      </DashboardContainer>
    </Fragment>
  );
};

export default Dashboard;
