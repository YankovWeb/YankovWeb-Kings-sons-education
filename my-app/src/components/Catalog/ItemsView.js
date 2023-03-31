import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Avatar} from "@mui/material";
import CustomizedRating from "../Rating/Rating";
import Copyright from "../../Atoms/CoppyRigth";
import CatalogButton from "../../Atoms/CatalogButton";
import {useUserAuth} from "../../context/AuthContext";
import {useFireStoreUser} from "../../context/UserContext";
import {NavLink} from "react-router-dom";
const ItemsView = ({cards}) => {
  const {user} = useUserAuth();
  const {getUserData} = useFireStoreUser();
  const owner = getUserData();

  //fix the inline css to a styled componnent.
  //important!  bring the bissnes logic here.
  //fix re rendering of avata becouse context calls

  return (
    <div>
      {" "}
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{pt: 4}}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <CatalogButton user={user} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" component="h6">
                    {card}
                  </Typography>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {user && <CustomizedRating />}

                    <Button size="small">
                      {" "}
                      <NavLink to={"/view"}>View</NavLink>
                    </Button>

                    {owner && <Button size="small">Edit</Button>}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{bgcolor: "background.paper", p: 6}} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Tank You
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  );
};

export default ItemsView;
