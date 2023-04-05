import React from "react";
import {Typography, Grid, Paper} from "@mui/material";

const CourseDetail = ({course}) => {
  return (
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
            Instructor: {course?.ownerName || ""}
          </Typography>
          <video
            src={course?.video || ""}
            controls
            style={{maxWidth: "200%"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src={course?.image || ""}
            alt="Course"
            style={{maxWidth: "50%"}}
          />
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
};

export default CourseDetail;
