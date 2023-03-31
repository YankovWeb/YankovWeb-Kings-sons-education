import {useState} from "react";

const useShowAlert = () => {
  const [showModal, setShowModal] = useState(false);
  const onCloseErrorHandler = () => {
    setShowModal(false);
  };
  return [showModal, setShowModal, onCloseErrorHandler];
};

export default useShowAlert;
