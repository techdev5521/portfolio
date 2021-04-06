import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Typography, Container, Link } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import webqueueTheme from "./theme";
import './App.css';

function App() {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  const classes = useStyles();

  const cards = [
    {
      screenshot_url: "https://github.com/techdev5521/ywca-greater-lafayette/raw/master/screenshot.png",
      "title": "Young Women's Christian Association Wesbite Redsign",
      "description": "Rebranding of Young Women's Christian Association Website of Greater Lafayette",
      "gh_link": "https://github.com/techdev5521/ywca-greater-lafayette",
    },
    {
      screenshot_url: "https://github.com/techdev5521/getfedora.com/raw/master/screenshot.png",
      "title": "Swipe Out Starvation",
      "description": "A simple website made available to the Purdue student body to educate them on Purdue's Swipe Out Starvation program.",
      "gh_link": "https://github.com/techdev5521/Swipe-Out-Starvation",
    },
    {
      screenshot_url: "https://github.com/techdev5521/Swipe-Out-Starvation/raw/master/screenshot.png",
      "title": "getfedora.com",
      "description": "A remake of getfedora.com",
      "gh_link": "https://github.com/techdev5521/getfedora.com",
    },
    {
      screenshot_url: "",
      "title": "Photo Gallery Manager",
      "description": "A simple photo gallery manager allows for user management at the public, category manager and super manager levels with per image, category and user management.",
      "gh_link": "https://github.com/techdev5521/photo-gallery-manager",
    },
    {
      "screenshot_url": "",
      "title": "BPA Website Design Team 2014",
      "description": "A mock trip booking tool allowing for flight purchase, car rental and information on your destination scraped from Wikipedia.",
      "gh_link": "https://github.com/techdev5521/BPA-Website-Design-Team-2014",
      "demo_link": ""
    },
  ];

  const theme = webqueueTheme(false);
  console.log(theme.typography.h6.fontSize)
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <img
            className={classes.icon} 
            src={`${process.env.PUBLIC_URL}/logo512.png`}
            height="40px"
          />
          <Typography variant="h6" color="inherit" noWrap>
            Justin's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Justin's Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              I humanize technology, bridging the void between computers and the people using them.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="https://github.com/techdev5521">
                    View my GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://www.linkedin.com/in/justin-t-campbell/">
                    Connect on LinkedIN
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.screenshot_url ? card.screenshot_url : "https://source.unsplash.com/random"}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.gh_link}>
                      Code
                    </Button>
                    {card.demo_link
                      ? (
                        <Button size="small" color="primary" href={card.demo_link}>
                          Demo 
                        </Button>
                      ) : null}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
