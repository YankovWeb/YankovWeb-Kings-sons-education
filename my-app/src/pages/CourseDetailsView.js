import {useParams} from "react-router-dom";

import useReadOne from "../hooks/useReadOne";

import {useUserAuth} from "../context/AuthContext";
import CourseDetail from "../components/CourseDetailsView/CourseDetail";

const collectionName = "products";

const CourseDetailsView = () => {
  const {id} = useParams();
  const {oneProduct} = useReadOne(id, collectionName);
  const {user} = useUserAuth();
  const isAuth = !!user;

  return <CourseDetail course={oneProduct} isAuth={isAuth} />;
};

export default CourseDetailsView;
