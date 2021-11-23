import { Box } from "@mui/system";
import { useSearchParams } from "react-router-dom";
import Note from "../../components/Note";
import useAuth from "../../hooks/useAuth";
import useNoteDetails from "../../hooks/useNoteDetails";
import { DashboardContainer } from "../Dashboard/Dashboard";
import ProfileBar from "../Dashboard/ProfileBar";

const NoteDetails = () => {
  let [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  const { username } = useAuth();
  const { noteDetails } = useNoteDetails(id);

  return (
    <DashboardContainer>
      <ProfileBar username={username} />
      <Box mt={5}>
        <Note data={noteDetails} handleNoteClick={() => {}} />
      </Box>
    </DashboardContainer>
  );
};

export default NoteDetails;
