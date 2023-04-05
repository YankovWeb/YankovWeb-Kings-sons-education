import useCreate from "../../hooks/useCreate";
import {useUserAuth} from "../../context/AuthContext";
import useFormData from "../../hooks/useFormData";
import CreateClassAtom from "../../Atoms/CreateClassAtom";
import Loader from "../../UI/Loader";
import {useMemo} from "react";

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
  const {formData, handleFormChange, resetForm} = useFormData(initialState);
  const {createOne, loading, error} = useCreate();

  const handleSubmit = (event) => {
    event.preventDefault();

    createOne(formData).then(resetForm(initialState));
    // TODO: handle form submission
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CreateClassAtom
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          isError={error}
        />
      )}
    </>
  );
};

export default CreateClass;
