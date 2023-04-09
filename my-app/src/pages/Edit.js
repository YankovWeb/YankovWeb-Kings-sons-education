import {useState} from "react";
import CreateClassAtom from "../components/CreateClass/CreateClassAtom";
import {useParams} from "react-router-dom";
import useUpdate from "../hooks/useUpdate";
import useFormData from "../hooks/useFormData";
import useReadOne from "../hooks/useReadOne";
import CustomCard from "../components/Card/CustomCard";
import CourseDetail from "../components/CourseDetailsView/CourseDetail";
import {Grid} from "@mui/material";
import {toast} from "react-toastify";
import {useUserAuth} from "../context/AuthContext";
import {isImage} from "../serivces/validate/isImage";
import {isLink} from "../serivces/validate/isLink";

const collectionName = "products";

const Edit = () => {
  const [errorMessage, setErrorMessage] = useState();
  const {id} = useParams();
  const {oneProduct} = useReadOne(id, collectionName);
  const {user} = useUserAuth();
  const {updateOne} = useUpdate(collectionName);
  const {formData, handleFormChange} = useFormData(oneProduct);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (collectionName === "products") {
      if (!isImage(formData.image)) {
        toast.error(
          "Url must end with jpg, jpeg, png, webp ,avif ,gif or svg!"
        );
        setErrorMessage(
          "Url must end with jpg, jpeg, png, webp ,avif ,gif or svg!"
        );
        return;
      }
      if (!isLink(formData.video)) {
        toast.error(
          "You must provide a video link starting with http or https!"
        );
        setErrorMessage(
          "You must provide a video link starting with http or https!"
        );
        return;
      }
      if (formData.heading.length < 5) {
        toast.error("Heading must be more than 5 symbols");
        setErrorMessage("Heading must be more than 5 symbols");
        return;
      }
      if (formData.description.length <= 20) {
        toast.error("Description must be more than 20 symbols");
        setErrorMessage("Description must be more than 20 symbols");
        return;
      }
    }
    await updateOne(id, formData);
    setErrorMessage("");
  };

  return (
    <Grid sx={{m: 2}} container spacing={1}>
      <>
        <CustomCard card={formData} />
        <div>{"<---Updated Post"}</div>
        <CreateClassAtom
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
        <CourseDetail course={formData} isAuth={user} />
      </>
    </Grid>
  );
};

export default Edit;
