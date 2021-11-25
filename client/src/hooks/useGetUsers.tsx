import { useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { getAllUserApiCall } from "../features/actions/userActions";

const useGetUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUserApiCall());
  }, [dispatch]);

  return useMemo(
    () => ({
      users,
    }),
    [users]
  );
};

export default useGetUsers;
