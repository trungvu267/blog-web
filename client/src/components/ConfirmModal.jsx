import { useState } from "react";
import { Modal, Button } from "react-daisyui";
const ConfirmModal = ({
  children,
  textHeader,
  textBody,
  handleAccess,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="font-sans">
      <Button onClick={toggleVisible} {...rest}>
        {children}
      </Button>
      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">{textHeader}</Modal.Header>
        <Modal.Body>{textBody}</Modal.Body>
        <Modal.Actions>
          <Button color="primary" onClick={handleAccess}>
            Xác nhận
          </Button>
          <Button color="error" variant="outline" onClick={toggleVisible}>
            Đóng
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
