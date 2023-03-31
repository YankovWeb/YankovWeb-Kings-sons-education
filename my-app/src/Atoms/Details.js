import React from "react";
import {Typography, Grid, Paper} from "@mui/material";

const course = {
  id: 1,
  title: "Introduction to React",
  instructor: "John Doe",
  duration: 12,
  description: "Learn the basics of React and build a simple web application.",
};
const CourseDetail = () => {
  return (
    <Paper style={{padding: 16}}>
      <Typography variant="h4" gutterBottom>
        {course.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Course ID: {course.id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Instructor: {course.instructor}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Duration: {course.duration} hours
          </Typography>
          <video src={course.video} controls style={{maxWidth: "200%"}} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
            alt="Course"
            style={{maxWidth: "50%"}}
          />
          <Typography variant="subtitle1" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {course.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CourseDetail;
