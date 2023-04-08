import React from "react";
import {useUserAuth} from "../context/AuthContext";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    maxWidth: 600,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    margin: "20px 0",
  },
};

const Profile = () => {
  const {user} = useUserAuth();

  return (
    <Box style={styles.root}>
      <Avatar alt="User Avatar" src={user?.photoURL} style={styles.avatar} />
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h5" style={styles.heading}>
            {user?.displayName}
          </Typography>
          <Typography variant="body1">Email: {user?.email}</Typography>
          <Typography variant="body1">User ID: {user?.uid}</Typography>
          <Divider style={styles.divider} />
          <Typography variant="body1">
            Last Sign-in Time: {user?.metadata.lastSignInTime}
          </Typography>
          <Typography variant="body1">
            Account Creation Time: {user?.metadata.creationTime}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
