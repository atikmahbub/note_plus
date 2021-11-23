import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store/hooks";
import MuiButton from "../../components/Button";
import TextInput from "../../components/Input";
import {
  AuthContainer,
  AuthForm,
  AuthLayout,
  Header,
} from "../../containers/Auth/Auth";
import { authRegisterApiCall } from "../../features/actions/authActions";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      password2: "",
    },
  });
  let pwd = watch("password");

  const onSubmit = (data: any) => {
    if (data.username) {
      data["password2"] = data.password;
      dispatch(authRegisterApiCall(data, navigate));
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthContainer>
        <AuthLayout alignItems="center" spacing={4}>
          <Header>Sign Up</Header>

          <Controller
            control={control}
            name={"email"}
            render={({ field: { onChange } }) => (
              <TextInput type="email" label="email" onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={"username"}
            render={({ field: { onChange } }) => (
              <TextInput label="user name" type="text" onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={"password"}
            render={({ field: { onChange } }) => (
              <TextInput label="password" type="password" onChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name={"password2"}
            render={({ field: { onChange } }) => (
              <TextInput label="password" type="password" onChange={onChange} />
            )}
            rules={{
              required: "You must specify a password",
              validate: (value) =>
                value === pwd || "The passwords do not match",
            }}
          />
          {errors.password2 && <p> {errors.password2.message}</p>}

          <MuiButton
            variant="contained"
            color="success"
            onClick={handleSubmit(onSubmit)}
          >
            Sign Up
          </MuiButton>
          <Typography variant="caption">
            Have an account? <Link to="/">Log In</Link>
          </Typography>
        </AuthLayout>
      </AuthContainer>
    </AuthForm>
  );
};

export default SignUp;
