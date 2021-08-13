import {
    Box,
    Container,
    createStyles,
    Link,
    Theme,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            paddingLeft: 0,
            paddingRight: 0,
        },
        copyright: {
            marginTop: theme.spacing(1),
        },
    })
);

export default function Footer() {
    const classes = useStyles();
    const Year = moment().get("year");

    const CopyRight = (
        <>
            {"Copyright © 2021"}
            {Year !== 2021 ? "-" + Year : null}{" "}
            <Link href="https://ahdark.com" target="_blank" underline="none">
                {"AHdark"}
            </Link>
            {" All Right Reserved"}
        </>
    );

    return (
        <>
            <Container component="footer" className={classes.root}>
                <Box component="div" className={classes.copyright}>
                    <Typography component="div" variant="body2">
                        {CopyRight}
                    </Typography>
                    <Typography component="div" variant="body2">
                        {"The source code is stored on "}
                        <Link
                            component="button"
                            underline="none"
                            onClick={() =>
                                window.open(
                                    "https://github.com/AH-dark/AHdarkBlog_Storage",
                                    "_blank"
                                )
                            }
                        >
                            GitHub
                        </Link>
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </>
    );
}
