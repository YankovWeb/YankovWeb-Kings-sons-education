import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const LinearColor = () => {
  return (
    <Stack sx={{width: "50%", color: "grey.500"}} spacing={8}>
      <LinearProgress color="secondary" />
    </Stack>
  );
};
export default LinearColor;
