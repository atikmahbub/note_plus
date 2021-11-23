import { useMemo } from "react";
import { useAppSelector } from "../app/store/hooks";

const useAuth = () => {
  const { authenticated, user_id, email, username } = useAppSelector(
    (state) => ({
      authenticated: state.auth.authenticated,
      user_id: state.auth.user_id,
      email: state.auth.email,
      username: state.auth.username,
    })
  );
  return useMemo(
    () => ({
      authenticated: authenticated,
      user_id,
      email,
      username,
    }),
    [authenticated, user_id, email, username]
  );
};

export default useAuth;
