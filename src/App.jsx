import "@fontsource/roboto";
import {
    Box,
    Container,
    CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import AppBar from "./component/AppBar";
import Beian from "./component/Beian";
import FooterContent from "./component/Footer";
import MessageCard from "./component/MessageCard";
import Comment from "./component/Comment";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "3% 10px 10px 10px",
        position: "static",
    }
}))

export default function App() {
    const classes = useStyles();

    return (
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
                                    <Comment name={window.location.hostname + "/commentpage"} />
                                </>
                            </Route>


                        </Switch>
                    </Container>
                </Box>
            </Box>

        </Router>
    )
}