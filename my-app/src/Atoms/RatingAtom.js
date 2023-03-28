import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const RatingAtom = ({value, onChangeHandler}) => {
  return (
    <Box
      sx={{
        "& > legend": {mt: 2},
      }}
    >
      <Typography component="legend">Favorite</Typography>
      <StyledRating
        value={+value}
        name="customized-color"
        precision={1}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        onChange={onChangeHandler}
      />
      {`Score:  ${value}`}
    </Box>
  );
};
export default RatingAtom;
