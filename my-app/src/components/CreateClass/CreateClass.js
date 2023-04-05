import useCreate from "../../hooks/useCreate";
import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";
import CreateClassAtom from "../../Atoms/CreateClassAtom";
import Loader from "../../UI/Loader";
import {useMemo, useCallback} from "react";

const CreateClass = () => {
  const {user} = useUserAuth();
  const initialState = useMemo(
    () => ({
      ownerId: user?.uid,
      ownerName: user?.displayName,
      image: "",
      heading: "",
      description: "",
    }),
    [user]
  );
  const [formData, handleFormChange, resetForm] = useFormData(initialState);
  const {createOne, loading, error} = useCreate();
  const {isTrue, message} = error;
  const formDataLocal = formData;

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createOne(formDataLocal).then(resetForm(initialState));
      // TODO: handle form submission
    },
    [createOne, formDataLocal, resetForm, initialState]
  );
  console.log(typeof message);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CreateClassAtom
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          isTrue={isTrue}
          message={message}
        />
      )}
    </>
  );
};

export default CreateClass;
