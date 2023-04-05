import CreateClassAtom from "../../Atoms/CreateClassAtom";
import {useParams, useNavigate} from "react-router-dom";
import useUpdate from "../../hooks/useUpdate";
import useFormData from "../../hooks/useFormData";
import useReadOne from "../../hooks/useReadOne";
import Loader from "../../UI/Loader";
import CustomCard from "../../UI/CustomCard";
import CourseDetail from "../../Atoms/CourseDetail";
import {Grid} from "@mui/material";
const Edit = () => {
  const {id} = useParams();
  const {oneProduct} = useReadOne(id);
  const {updateOne, loading} = useUpdate();

  const navigate = useNavigate();
  const {formData, handleFormChange} = useFormData(oneProduct);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateOne(id, formData).then(() => navigate("/catalog"));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid sx={{m: 2}} container spacing={1}>
          <>
            <CustomCard card={formData} />
            <div>{"<---Updated Post"}</div>
            <CreateClassAtom
              formData={formData}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
            />
            <CourseDetail course={formData} />
          </>
        </Grid>
      )}
    </>
  );
};

export default Edit;
