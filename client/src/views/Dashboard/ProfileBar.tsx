import { Stack, Typography } from "@mui/material";
import ProfileMenu from "../../components/Menu";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Logo = styled("h2")({
  fontWeight: 700,
  cursor: "pointer",
});

type ProfileProps = {
  username: string;
};

const ProfileBar = ({ username }: ProfileProps) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo onClick={() => navigate("/dashboard")}>Note Plus</Logo>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>Welcome, {username}</Typography>
        <ProfileMenu />
      </Stack>
    </Stack>
  );
};

export default ProfileBar;
