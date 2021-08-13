import "@fontsource/roboto";
import {
    Box,
    Container,
    createStyles,
    createTheme,
    CssBaseline,
    Theme,
    ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useMemo } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./component/AppBar";
import Beian from "./component/Beian";
import FooterContent from "./component/Footer";
import MessageCard from "./component/MessageCard";
import Comment from "./component/Comment";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            margin: "3% 10px 10px 10px",
            position: "static",
        },
    })
);

export default function App() {
    const classes = useStyles();
    const themeOptions = useSelector((state: RootState) => state.theme);

    const theme: Theme = useMemo(
        () => createTheme(themeOptions),
        [themeOptions]
    );

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppBar />
                <CssBaseline />
                <Box component="main" display="block">
                    <Box component="div" className={classes.root}>
                        <Container maxWidth="sm">
                            <Switch>
                                <Route exact path="/">
                                    <>
                                        <MessageCard />
                                        <FooterContent />
                                        <Beian />
                                    </>
                                </Route>

                                <Route path="/test">
                                    <>
                                        <p>test</p>
                                    </>
                                </Route>

                                <Route path="/comment">
                                    <>
                                        <Comment
                                            name={
                                                "https://cdn.ahdark.com/comment"
                                            }
                                        />
                                    </>
                                </Route>
                            </Switch>
                        </Container>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
}
