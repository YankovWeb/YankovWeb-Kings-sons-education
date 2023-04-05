import {useEffect, useState} from "react";

import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

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

  useEffect(() => {
    // Set the `isSubtitleVisible` state to true after a delay
    const timeoutId = setTimeout(() => {
      setIsSubtitleVisible(true);
    }, 500);

    // Clear the timeout if the component unmounts or the `isSubtitleVisible` state is set to true
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <ButtonBases />
      <Header>
        <Title>Welcome to our Educational School </Title>
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

const images = [
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Breakfast",
    width: "30%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Burgers",
    width: "40%",
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Camera",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({theme}) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({theme}) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({theme}) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function ButtonBases() {
  return (
    <Box sx={{display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%"}}>
      {images.map((image) => (
        <ImageButton
          component={Link}
          to="/"
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{backgroundImage: `url(${image.url})`}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
