import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import Title from "./Title";
import Content from "./Content";
import Card from "./Card/Card";

const useStyles = makeStyles((theme) => ({
    Paper: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        maxHeight: "60%",
        minHeight: "400px",
        marginTop: "10%",
        borderRadius: "0.3rem",
        justifyContent: "space-evenly"
    }
}))

export default function () {
    const classes = useStyles();
    return (
        <Paper elevation={1} className={classes.Paper}>
            <Title />
            <Content />
            <Card />
        </Paper>
    )
}