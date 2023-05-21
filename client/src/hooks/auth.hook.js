import { useMutation } from "react-query";
import { useMemo, useCallback } from "react";
import { useAtom } from "jotai";
import { login } from "../api/auth.api.js";
import { authAtom } from "../states/auth.state.js";
import { RESET } from "jotai/utils";

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const mutation = useMutation(login, {
    mutationKey: "login",
  });
  useMemo(() => {
    setAuth(mutation.data ?? {});
  }, [mutation.data]);

  const handleLogin = useCallback(
    ({ email, password }) => {
      mutation.mutate({ email, password });
    },
    [mutation]
  );
  const logout = () => {
    setAuth(RESET);
  };
  return {
    mutation,
    handleLogin,
    auth,
    logout,
  };
};

export default useAuth;
