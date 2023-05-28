import { useState, useEffect } from "react";
import { Modal, Button } from "react-daisyui";
const ConfirmModal = ({
  children,
  textHeader,
  textBody,
  handleAccess,
  isLoading,
  isSuccess,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    isSuccess && setVisible(false);
  }, [isSuccess]);
  return (
    <div className="font-sans">
      <Button onClick={toggleVisible} {...rest}>
        {children}
      </Button>
      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">{textHeader}</Modal.Header>
        <Modal.Body>{textBody}</Modal.Body>
        <Modal.Actions>
          <Button color="primary" onClick={handleAccess} loading={isLoading}>
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
