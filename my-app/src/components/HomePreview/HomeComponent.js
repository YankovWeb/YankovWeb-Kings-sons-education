import {useEffect, useState} from "react";
import {useFireStoreUser} from "../../context/UserContext";

import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Define the styles for the different elements using the `styled` function
const Header = styled(Box)({
  height: "100px",
  backgroundColor: "#00bcd4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Title = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "2rem",
});

const Content = styled(Box)({
  height: "calc(100vh - 100px)",
  backgroundColor: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Subtitle = styled(Typography)({
  color: "#333",
  fontWeight: "bold",
  fontSize: "1.5rem",
  opacity: 0,
  transition: "opacity 1s ease-in-out",
  "&.fade-in": {
    opacity: 1,
  },
});

const HomeComponent = () => {
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const {getUserData} = useFireStoreUser();

  const curetUser = getUserData();

  useEffect(() => {
    // Set the `isSubtitleVisible` state to true after a delay
    const timeoutId = setTimeout(() => {
      setIsSubtitleVisible(true);
    }, 1500);

    // Clear the timeout if the component unmounts or the `isSubtitleVisible` state is set to true
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  console.log(curetUser);
  return (
    <>
      <Header>
        <Title>
          Welcome to our Educational School {curetUser[0]?.userName}
        </Title>
      </Header>
      <Content>
        <Subtitle className={isSubtitleVisible ? "fade-in" : ""}>
          Learn new skills and advance your career with us
        </Subtitle>
      </Content>
    </>
  );
};

export default HomeComponent;
