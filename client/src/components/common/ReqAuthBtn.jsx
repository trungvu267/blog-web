import { useAtom } from "jotai";
import { Button } from "react-daisyui";
import { requestLoginModalAtom } from "../../states/modal.state";
import { useAuth } from "../../hooks/auth.hook";
const ReqAuthBtn = ({ children, title, handleLogic, ...rest }) => {
  const { auth } = useAuth();

  const [, setRequestLoginModal] = useAtom(requestLoginModalAtom);

  return (
    <Button
      {...rest}
      onClick={(data) => {
        auth ? handleLogic(data) : setRequestLoginModal(true);
      }}
    >
      {children}
    </Button>
  );
};

export default ReqAuthBtn;
