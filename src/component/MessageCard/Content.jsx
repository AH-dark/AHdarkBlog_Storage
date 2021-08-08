import "@fontsource/roboto";
import { Box, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { UserName, Blog } from "../../config";

const useStyles = makeStyles((theme) => ({
    content: {
        margin: "5px 1rem 5px 1rem"
    },
    p: {
        margin: "5px 0.5rem 5px 0.5rem",
        fontSize: "1.2rem"
    }
}));

const Open = (link) => function () {
    return window.open(link, "_self");
}

export default function Content() {
    const classes = useStyles();

    return (
        <Box component="span" className={classes.content} Name="content">
            <Typography variant="body1" component="p" className={classes.p}>
                {"This is a storage site which build by "}
                <Link
                    href={Blog.Url}
                    onClick={() => Open(Blog.Url)}
                    className={classes.link}
                >
                    {UserName}
                </Link>
                {" and used by "}
                <Link
                    href={Blog.Url}
                    onClick={() => Open(Blog.Url)}
                    className={classes.link}
                >
                    {Blog.Name}
                </Link>
                {"."}
            </Typography>
            <Typography variant="body1" component="p" className={classes.p}>
                {"All of files were uploaded on "}
                <Link
                    href={Blog.Url}
                    onClick={() => Open(Blog.Url)}
                    className={classes.link}
                >
                    {Blog.Name}
                </Link>
                {" by manager & writer."}
            </Typography>
            <Typography variant="body1" component="p" className={classes.p}>
                {"If you have any questions, please contact "}
                <Link
                    href={Blog.Content}
                    onClick={() => Open(Blog.Content)}
                    className={classes.link}
                >
                    {UserName}
                </Link>
                {"."}
            </Typography>
        </Box>
    )
}