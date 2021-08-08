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
                {"这是 "}
                <Link
                    href={Blog.Url}
                    onClick={() => Open(Blog.Url)}
                    className={classes.link}
                >
                    {Blog.Name}
                </Link>
                {" 的存储站点"}
            </Typography>
            <Typography variant="body1" component="p" className={classes.p}>
                {"所有文件皆为 "}
                <Link
                    href={Blog.Url}
                    onClick={() => Open(Blog.Url)}
                    className={classes.link}
                >
                    {Blog.Name}
                </Link>
                {" 管理员上传"}
            </Typography>
            <Typography variant="body1" component="p" className={classes.p}>
                {"如有问题请联系 "}
                <Link
                    href={Blog.Content}
                    onClick={() => Open(Blog.Content)}
                    className={classes.link}
                >
                    {UserName}
                </Link>
            </Typography>
        </Box>
    )
}