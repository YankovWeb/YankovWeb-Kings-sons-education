import useCreate from "../../hooks/useCreate";
import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";
import CreateClassAtom from "./CreateClassAtom";
import {useEffect, useMemo} from "react";

const CreateClass = () => {
  const {user} = useUserAuth();
  const initialState = useMemo(
    () => ({
      ownerId: user?.uid,
      ownerName: user?.displayName,
      video: "",
      image: "",
      heading: "",
      description: "",
    }),
    [user]
  );
  const {formData, handleFormChange, resetForm} = useFormData(initialState);
  const {createOne, error, isSuccess, unfold, errorMessage} = useCreate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createOne(formData);
  };
  useEffect(() => {
    if (isSuccess) {
      resetForm(initialState);
      unfold();
    }
  }, [isSuccess, resetForm, initialState, unfold]);
  console.log({errorMessage});
  return (
    <CreateClassAtom
      formData={formData}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      isError={error}
      errorMessage={errorMessage}
    />
  );
};

export default CreateClass;
