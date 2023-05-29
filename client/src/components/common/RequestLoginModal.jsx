import { Modal, Button } from "react-daisyui";
import { useNavigate } from "react-router";
import { path } from "../../utils/path";
import { useAtom } from "jotai";
import { requestLoginModalAtom } from "../../states/modal.state";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
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
    <Modal
      open={visible}
      onClickBackdrop={toggleVisible}
      className="border  bg-white rounded-xl absolute top-[250px] left-1/2 -translate-x-1/2 flex justify-center text-center flex-col"
    >
      <Modal.Header className="font-bold">
        Xác nhận đăng nhập để sử dụng tính năng này
      </Modal.Header>
      {/* <Modal.Body>{textBody}</Modal.Body> */}
      <Modal.Body>
        {/* <Button color="primary" onClick={handleAccess}>
          Xác nhận
        </Button>
        <Button color="error" variant="outline" onClick={toggleVisible}>
          Đóng
        </Button> */}
        {/* <div className="border  bg-white rounded-xl absolute top-[250px] left-1/2 -translate-x-1/2 flex justify-center text-center flex-col"> */}
        <img
          className="rotate-12 w-14 h-14 ml-5 mb-5"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        <Link to={"/login"}>
          <Button
            color="ghost"
            className="w-full max-w-[450px] bg-primary  hover:bg-primary text-white hover:text-white border-2 mt-3"
          >
            Đăng nhập
          </Button>
        </Link>
        <Link to={"signup"}>
          <Button
            className="w-full max-w-[450px]  text-primary outline-none  font-semibold mt-3"
            variant="outline"
          >
            Đăng ký
          </Button>
        </Link>
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
};

export default RequestLoginModal;
