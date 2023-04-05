import {useEffect, useState} from "react";

const useFormData = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const resetForm = (initialState) => setFormData(initialState);

  const handleFormChange = (event) => {
    setFormData((prev) => {
      return {...prev, [event.target.name]: event.target.value};
    });
  };
  useEffect(
    () => setFormData((prev) => ({...prev, ...initialState})),
    [initialState]
  );
  return {formData, handleFormChange, setFormData, resetForm};
};

export default useFormData;
