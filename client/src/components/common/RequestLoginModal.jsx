import { Modal, Button } from "react-daisyui";
import { useNavigate } from "react-router";
import { path } from "../../utils/path";
import { useAtom } from "jotai";
import { requestLoginModalAtom } from "../../states/modal.state";
const RequestLoginModal = () => {
  const [visible, setVisible] = useAtom(requestLoginModalAtom);
  const navigate = useNavigate();
  const toggleVisible = () => {
    setVisible(false);
  };
  const handleAccess = () => {
    navigate(path.login);
  };
  return (
    <Modal open={visible} onClickBackdrop={toggleVisible}>
      <Modal.Header className="font-bold">
        Xác nhận đăng nhập để sử dụng tính năng này
      </Modal.Header>
      {/* <Modal.Body>{textBody}</Modal.Body> */}
      <Modal.Actions>
        <Button color="primary" onClick={handleAccess}>
          Xác nhận
        </Button>
        <Button color="error" variant="outline" onClick={toggleVisible}>
          Đóng
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RequestLoginModal;
