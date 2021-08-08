import { Box, Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MessageCard from "./component/MessageCard/Display";
import AppBar from "./component/AppBar/AppBar";
import FooterContent from "./component/Footer/Footer";
import "@fontsource/roboto";

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
        <>
            <AppBar />
            <CssBaseline />
            <Box component="main" display="Block">
                <Box component="div" className={classes.root}>
                    <Container maxWidth="sm">
                        <MessageCard />
                        <FooterContent />
                    </Container>
                </Box>
            </Box>
        </>
    )
}