import {
  Grid,
  Box,
  Typography,
  Avatar,
  CardMedia,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";

const CustomCard = ({card, children}) => {
  return (
    <Grid item key={card ? card.id : ""} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: 1,
        }}
      >
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="flex-end"
        >
          <Typography variant="h6" component="h6" marginLeft="1rem">
            {card ? card.ownerName : ""}
          </Typography>

          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>

        <CardMedia
          component="img"
          sx={{
            pt: "26.25%",
          }}
          image={card ? card.image : ""}
          alt="random"
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h5" component="h2">
            {card ? card.heading : ""}
          </Typography>
          <Typography variant="body1">
            {card ? card.description : ""}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: "space-between"}}>
          {children}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CustomCard;
