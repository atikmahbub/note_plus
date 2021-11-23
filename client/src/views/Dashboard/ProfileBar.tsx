import { Stack, Typography } from "@mui/material";
import ProfileMenu from "../../components/Menu";
import { styled } from "@mui/system";

const Logo = styled("h2")({
  fontWeight: 700,
});

type ProfileProps = {
  username: string;
};

const ProfileBar = ({ username }: ProfileProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo>Note Plus</Logo>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>Welcome, {username}</Typography>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default ProfileBar;
