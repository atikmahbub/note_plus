import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const AuthContainer = styled("div")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const AuthLayout = styled(Stack)({
  width: 600,
  padding: 20,
  border: "1px solid #EAE8E8",
});

export const Header = styled("div")({
  fontSize: 30,
  fontWeight: 700,
});

export const AuthForm = styled("form")({
  width: "100%",
});

export const ErrorMessage = styled("span")({
  textAlign: "start",
  color: "tomato",
});
