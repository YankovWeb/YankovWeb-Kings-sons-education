import CreateClassAtom from "../components/CreateClass/CreateClassAtom";
import {useParams} from "react-router-dom";
import useUpdate from "../hooks/useUpdate";
import useFormData from "../hooks/useFormData";
import useReadOne from "../hooks/useReadOne";
import CustomCard from "../UI/CustomCard";
import CourseDetail from "../components/CourseDetailsView/CourseDetail";
import {Grid} from "@mui/material";
import {toast} from "react-toastify";
import {useUserAuth} from "../context/AuthContext";

const collectionName = "products";

const Edit = () => {
  const {id} = useParams();
  const {oneProduct} = useReadOne(id, collectionName);
  const {user} = useUserAuth;
  const {updateOne} = useUpdate(collectionName);

  const {formData, handleFormChange} = useFormData(oneProduct);
  const patern = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
  const isImage = (url) => patern.test(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (collectionName === "products") {
      if (!isImage(formData.image)) {
        toast.error("Url is invalid, place provide valid Url");
        throw new Error();
      }
      if (formData.heading.length < 5) {
        toast.error("Heading must be more than 5 symbols");
        throw new Error();
      }
      if (formData.description.length <= 20) {
        toast.error("Heading must be more than 20 symbols");
        throw new Error();
      }
    }
    updateOne(id, formData);
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
        />
        <CourseDetail course={formData} isAuth={!!user} />
      </>
    </Grid>
  );
};

export default Edit;
