import { Box, Container, CssBaseline, Divider, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 10,
        textAlign: "center"
    }
}))

export default function Footer() {
    const classes = useStyles();
    const Year = moment().get("year");

    const CopyRight = (
        <>
            {"Copyright © 2021"}
            {(Year != 2021) ? ("-" + Year) : null}
            {" "}
            <Link
                href="https://ahdark.com"
                target="_blank"
                underline="none"
            >
                {"AHdark"}
            </Link>
            {" All Right Reserved"}
        </>
    )

    return (
        <>
            <Container
                component="footer"
                className={classes.root}
            >
                <Box component="div">
                    <Typography component="div" variant="body2">
                        {CopyRight}
                    </Typography>
                    <Typography component="div" variant="body2">
                        {"The source code of this site is stored on "}
                        <Link
                            component="button"
                            underline="none"
                            onClick={() => window.open("https://github.com/AH-dark/AHdarkBlog_Storage", "_blank")}
                        >
                            GitHub
                        </Link>
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}