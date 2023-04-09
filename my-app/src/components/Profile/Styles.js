import {Avatar, Box, Card, Divider, Typography, styled} from "@mui/material";

export const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px auto",
  maxWidth: 600,
});

export const AvatarStyled = styled(Avatar)({
  width: 100,
  height: 100,
  marginBottom: 20,
});

export const CardStyled = styled(Card)({
  padding: 20,
  marginBottom: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const HeadingTypography = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 10,
});

export const DividerStyled = styled(Divider)({
  width: "100%",
  margin: "20px 0",
});
