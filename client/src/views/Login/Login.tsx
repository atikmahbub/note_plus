import { Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import MuiButton from "../../components/Button";
import TextInput from "../../components/Input";
import {
  AuthContainer,
  AuthLayout,
  Header,
  AuthForm,
} from "../../containers/Auth/Auth";
import { useAppDispatch } from "../../app/store/hooks";

import { useNavigate } from "react-router-dom";
import { authLoginApiCall } from "../../features/actions/authActions";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    if (data.username) {
      dispatch(authLoginApiCall(data, navigate));
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthContainer>
        <AuthLayout alignItems="center" spacing={4}>
          <Header>Login</Header>
          <Controller
            control={control}
            name={"username"}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <TextInput
                type="text"
                label="user name"
                onChange={onChange}
                helperText={errors.username ? "user name is required" : ""}
              />
            )}
          />
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                onChange={onChange}
                type="password"
                label="Password"
                helperText={errors.password ? "password is required" : ""}
              />
            )}
            rules={{ required: true }}
            name="password"
          />
          <MuiButton
            onClick={handleSubmit(onSubmit)}
            type="submit"
            color="success"
            variant="contained"
          >
            Login
          </MuiButton>
          <Typography variant="caption">
            create an account? <Link to="/signup"> sign up</Link>
          </Typography>
        </AuthLayout>
      </AuthContainer>
    </AuthForm>
  );
};

export default Login;
