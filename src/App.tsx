import "@fontsource/roboto";
import {Box, Button, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import React, {useCallback, useEffect, useMemo} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppBar from "./component/AppBar";
import Beian from "./component/Beian";
import FooterContent from "./component/Footer";
import MessageCard from "./component/MessageCard";
import Comment from "./component/Comment";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "./store"

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "3% 10px 10px 10px",
        position: "static",
    }
}))

export default function App() {
    const classes = useStyles();
    const dispatch = useDispatch<Dispatch>()
    const themeOptions = useSelector((state: RootState) => state.theme)
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = useMemo(
        () => createTheme(themeOptions),
        [themeOptions]
    )
    const changeThemeMode = useCallback(
        (mode: "light" | "dark") => dispatch.theme.changeThemeMode(mode),
        [dispatch]
    )

    useEffect(() => {
        changeThemeMode(prefersDarkMode ? "dark" : "light")
    }, [prefersDarkMode])

    const toggle = ()=>{
        if (themeOptions.palette?.type === "dark") {
            changeThemeMode("light")
        } else {
            changeThemeMode("dark")
        }
    }

    return (<ThemeProvider theme={theme}>
            <Router>
                <Button onClick={toggle}>Toggle </Button>
                <AppBar/>
                <CssBaseline/>
                <Box component="main" display="block">
                    <Box component="div" className={classes.root}>
                        <Container maxWidth="sm">
                            <Switch>

                                <Route exact path="/">
                                    <>
                                        <MessageCard/>
                                        <FooterContent/>
                                        <Beian/>
                                    </>
                                </Route>

                                <Route path="/test">
                                    <>
                                        <p>test</p>
                                    </>
                                </Route>

                                <Route path="/comment">
                                    <>
                                        <Comment name={window.location.hostname + "/commentpage"}/>
                                    </>
                                </Route>


                            </Switch>
                        </Container>
                    </Box>
                </Box>

            </Router>
        </ThemeProvider>
    )
}