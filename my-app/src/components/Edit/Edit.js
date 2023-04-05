import CreateClassAtom from "../../Atoms/CreateClassAtom";

const Edit = () => {
  return (
    <CreateClassAtom
      formData={formData}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
      isTrue={isTrue}
      message={message}
    />
  );
};

export default Edit;
