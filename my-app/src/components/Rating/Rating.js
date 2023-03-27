import {useEffect, useState} from "react";
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

export default function CustomizedRating() {
  const [value, setValue] = useState(2);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    //send post request
  };
  console.log(value);
  return (
    <Box
      sx={{
        "& > legend": {mt: 2},
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
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
}
