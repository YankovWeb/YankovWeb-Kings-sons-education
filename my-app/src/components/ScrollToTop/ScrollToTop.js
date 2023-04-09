import * as S from "./Styles";
import {Zoom, Fab} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

const ScrollToTop = ({scrollY}) => {
  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <Zoom in={scrollY > 100} sx={{transform: "none", visibility: "visible"}}>
      <S.Root onClick={handleClick}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <NavigationIcon sx={{fontSize: "large"}} />
        </Fab>
      </S.Root>
    </Zoom>
  );
};

export default ScrollToTop;
