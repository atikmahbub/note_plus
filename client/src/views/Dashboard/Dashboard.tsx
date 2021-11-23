import { styled } from "@mui/system";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal";
import AddNote from "../../containers/Note/AddNote";
import { useNavigate } from "react-router";
import ProfileBar from "./ProfileBar";
import useAuth from "../../hooks/useAuth";
import SearchBar from "./SearchBar";
import NoteContainer from "./NoteContainer";

const DashboardContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
  padding: 50,
});

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { username } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNoteClick = (id: number) => {
    navigate({
      pathname: "/note",
      search: `id=${id}`,
    });
  };

  return (
    <Fragment>
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        header="Add Note"
      >
        <AddNote />
      </Modal>
      <DashboardContainer>
        <ProfileBar username={username} />
        <SearchBar handleClickOpen={handleClickOpen} />
        <NoteContainer handleNoteClick={handleNoteClick} />
      </DashboardContainer>
    </Fragment>
  );
};

export default Dashboard;
