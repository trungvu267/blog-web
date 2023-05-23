import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TODO: create prop for private route

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { auth } = useAuth();
    if (!auth) {
      navigate("/login");
      return;
    }
    const getPermission = async () => {
      //NOTE: get role here
      return;
    };
    getPermission();
  }, []);

  return { component };
};

export default PrivateRoute;
