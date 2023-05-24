import { useMutation } from "react-query";
import { useMemo, useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { login, register } from "../api/auth.api.js";
import { authAtom } from "../states/auth.state.js";
import { RESET } from "jotai/utils";

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const mutation = useMutation(login, {
    mutationKey: "login",
  });
  useEffect(() => {
    mutation.isSuccess && setAuth(mutation.data);
  }, [mutation.isSuccess]);

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

export const useRegister = () => {
  const [, setAuth] = useAtom(authAtom);
  const mutation = useMutation(register, {
    mutationKey: "register",
  });
  useMemo(() => {
    setAuth(mutation.data ?? {});
  }, [mutation.data]);
  const handleRegister = useCallback(
    ({ email, name, password }) => {
      mutation.mutate({ email, name, password });
    },
    [mutation]
  );
  return { mutation, handleRegister };
};
