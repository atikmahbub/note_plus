import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import ShareIcon from "@mui/icons-material/Share";

type ShareNoteProps = {
  users: any[];
  handleShareNote: (id: string) => void;
};

const ShareContainer = styled("div")({
  padding: 20,
});

const ShareUser = ({ users, handleShareNote }: ShareNoteProps) => {
  return (
    <ShareContainer>
      {users.map((user: any, i: number) => (
        <Stack key={i} spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
            <Box>
              {user.email}- {user.username}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              color="green"
              onClick={() => handleShareNote(user.id)}
              style={{ cursor: "pointer" }}
            >
              <ShareIcon fontSize="small" />
              share
            </Box>
          </Stack>
        </Stack>
      ))}
    </ShareContainer>
  );
};

export default ShareUser;
