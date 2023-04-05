import {useParams} from "react-router-dom";
import CourseDetail from "../../Atoms/CourseDetail";
import useReadOne from "../../hooks/useReadOne";
import Loader from "../../UI/Loader";

const CourseDetailsView = () => {
  debugger;
  const {id} = useParams();
  const {oneProduct, loading} = useReadOne(id);

  return <>{loading ? <Loader /> : <CourseDetail course={oneProduct} />}</>;
};

export default CourseDetailsView;
