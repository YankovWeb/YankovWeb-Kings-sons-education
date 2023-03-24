import {useState} from "react";
import {register} from "./your-code-file";

const useRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await register(email, password);
      setIsRegistered(true);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return {
    email,
    password,
    isLoading,
    error,
    isRegistered,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useRegistration;
