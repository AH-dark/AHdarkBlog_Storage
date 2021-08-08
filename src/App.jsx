import { Box, Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MessageCard from "./component/MessageCard/Display";
import AppBar from "./component/AppBar/AppBar";

const useStyles = makeStyles((theme) => ({
    Root: {
        display: "flex",
        flexDirection: "column",
        margin: "5% 10px 5% 10px",
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
                <Box component="div" className={classes.Root}>
                    <Container maxWidth="sm">
                        <MessageCard />
                    </Container>
                </Box>
            </Box>
        </>
    )
}