import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import * as S from "./ButtonBasesStyles";

export const ButtonBases = ({allProducts}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {allProducts.map((image) => (
        <S.ImageButton
          key={image.id}
          component={Link}
          to={`/catalog/view/${image.id}`}
          focusRipple
          style={{
            width: "33%",
            margin: "2rem",
          }}
        >
          <S.ImageSrc style={{backgroundImage: `url(${image.image})`}} />
          <S.ImageBackdrop className="MuiImageBackdrop-root" />
          <S.Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                color: "white",
              }}
            >
              {image.heading}
              <S.ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </S.Image>
        </S.ImageButton>
      ))}
    </Box>
  );
};
