import {useState} from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({});
  const handleFormChange = (event) => {
    setFormData((prev) => {
      return {...prev, [event.target.name]: event.target.value};
    });
  };
  return [formData, handleFormChange];
};

export default useFormData;
