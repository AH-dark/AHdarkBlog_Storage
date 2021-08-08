import '@fontsource/roboto';
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { SiteName } from "../../config";

const useStyles = makeStyles((theme) => ({
    h1: {
        textAlign: "center",
        padding: "10px 0"
    }
}))

export default function Title() {
    const classes = useStyles();

    return (
        <Box component="span" Name="title">
            <Typography variant="h4" component="h1" gutterBottom={false} className={classes.h1} color='textPrimary'>
                {SiteName}
            </Typography>
            <Divider variant="middle" />
        </Box>
    )
}