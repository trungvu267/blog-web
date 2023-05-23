import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook";
// TODO: create prop for private route

const PrivateRoute = ({ component, role }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
      return;
    }
    if (auth && auth.role !== role) {
      // TODO: navigate to not permissions
      navigate("/*");
      return;
    }
    const getPermission = async () => {
      //NOTE: get role here
      return;
    };
    getPermission();
  }, []);

  return component;
};

export default PrivateRoute;

PrivateRoute.defaultProps = {
  role: "editor",
};
