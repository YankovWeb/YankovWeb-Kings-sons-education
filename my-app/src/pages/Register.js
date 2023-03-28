import {useUserAuth} from "../context/AuthContext";

import RegisterView from "../components/Register/RegisterView";

export default function Register() {
  const {signUp} = useUserAuth();
  return <RegisterView signUp={signUp} />;
}
