import { Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Card from "./Card/Card";
import Content from "./Content";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
    Paper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        maxHeight: "60%",
        minHeight: "450px",
        marginTop: "5%",
        borderRadius: "0.3rem",
        justifyContent: "space-evenly"
    }
}))

export default function Display() {
    const classes = useStyles();
    return (
        <Paper elevation={1} className={classes.Paper}>
            <Hidden xsDown implementation="css">
                <Title />
            </Hidden>
            <Content />
            <Card />
        </Paper>
    )
}