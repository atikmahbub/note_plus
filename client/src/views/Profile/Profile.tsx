import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileBar from "../Dashboard/ProfileBar";
import TextInput from "../../components/Input/TextInput";
import { styled } from "@mui/system";
import MuiButton from "../../components/Button/MuiButton";
import { useAppDispatch } from "../../app/store/hooks";
import { updateUserApiCall } from "../../features/actions/userActions";
import { Stack } from "@mui/material";

const ProfileContainer = styled(Stack)({
  padding: 30,
});

const Profile = () => {
  const { username, email, user_id } = useAuth();
  const [state, setState] = useState({
    email: email,
    username: username,
  });
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(updateUserApiCall(user_id, state));
  };

  return (
    <ProfileContainer spacing={10} justifyContent="center" textAlign="center">
      <ProfileBar username={username} />
      <TextInput
        type="text"
        value={state.username}
        label="User Name"
        onChange={(e) => {
          setState({ ...state, username: e.target.value });
        }}
      />
      <TextInput
        type="email"
        value={state.email}
        label="Email"
        onChange={(e) => {
          setState({ ...state, email: e.target.value });
        }}
      />
      <MuiButton color="success" variant="contained" onClick={handleSubmit}>
        Submit
      </MuiButton>
    </ProfileContainer>
  );
};

export default Profile;
