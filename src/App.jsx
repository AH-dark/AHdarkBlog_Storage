import React from "react";
import ReactDOM from "react-dom";
import Config from "./config";
import { Container, CssBaseline, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MessageCard from "./component/MessageCard/Display";

const useStyles = makeStyles((theme) => ({
    Root: {
        display: "flex",
        flexDirection: "column",
        margin: "5% 10px 5% 10px",
        position: "static"
    }
}))

export default function () {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.Root}>
            <Container maxWidth="sm">
                <MessageCard />
            </Container>
        </Box>
    )
}