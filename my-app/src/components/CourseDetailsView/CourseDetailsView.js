import {useParams} from "react-router-dom";
import CourseDetail from "../../Atoms/CourseDetail";
import useReadOne from "../../hooks/useReadOne";
import Loader from "../../UI/Loader";
import {useUserAuth} from "../../context/AuthContext";

const CourseDetailsView = () => {
  const {id} = useParams();
  const {oneProduct, loading} = useReadOne(id);
  const {user} = useUserAuth();
  const isAuth = !!user;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CourseDetail course={oneProduct} isAuth={isAuth} />
      )}
    </>
  );
};

export default CourseDetailsView;
