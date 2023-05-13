import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
      className="text-xl normal-case border-2"
      variant="outline"
    >
      DEV
    </Button>
  );
};

export default Logo;
