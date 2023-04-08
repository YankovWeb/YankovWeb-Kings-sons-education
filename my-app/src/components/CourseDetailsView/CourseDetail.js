import {Typography, Grid, Paper} from "@mui/material";
import {Video} from "../Video/Video";

const CourseDetail = ({course, isAuth}) => (
  <Paper sx={{margin: 6, border: 1}}>
    <Typography variant="h4" gutterBottom sx={{padding: 2}}>
      {course?.heading || ""}
    </Typography>
    <Grid container spacing={2} sx={{padding: 2}}>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1" gutterBottom>
          Course ID: {course?.id || ""}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Creator: {course?.ownerName || ""}
        </Typography>
        {isAuth ? (
          <Video url={course?.video || ""} />
        ) : (
          <h2 style={{backgroundColor: "red"}}>
            "TO SEE THE COURSE PLACE LOGIN"
          </h2>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={course?.image || ""} alt="Course" style={{maxWidth: "50%"}} />
        <Typography variant="subtitle1" gutterBottom>
          Description:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {course?.description || ""}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default CourseDetail;
