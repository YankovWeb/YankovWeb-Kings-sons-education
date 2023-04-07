import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const LinearColor = () => {
  return (
    <Stack sx={{width: "100%", color: "grey.500"}} spacing={8}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
};
export default LinearColor;
