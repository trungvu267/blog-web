import { useMutation, useQuery } from "react-query";
import { useMemo, useCallback, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { login, register, authWithGoogle } from "../api/auth.api.js";
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

export const useAuthWithGoogle = () => {
  const [, setAuth] = useAtom(authAtom);
  const [enabled, setEnable] = useState(false);
  const handleGoogleLogin = useCallback(() => {
    setEnable(true);
  }, []);
  const { isLoading, error, data } = useQuery({
    queryKey: ["/auth/google"],
    queryFn: authWithGoogle,
    onSuccess: (res) => {
      console.log(res);
      // set(res.data.bookmark);
    },
    onError: (err) => {
      console.log(err);
    },
    enabled,
  });
  return {
    handleGoogleLogin,
    isLoading,
    error,
  };
};
