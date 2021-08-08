import { Box, Button, Card, CardContent, CardMedia, Hidden, Typography } from "@material-ui/core";
import ContactlessRoundedIcon from '@material-ui/icons/ContactlessRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Blog, UserName } from "../../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            height: 50,
        },
        [theme.breakpoints.up('sm')]: {
            height: 150,
        },
        margin: '15px 1rem 5px 1rem',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        width: "100%",
        marginTop: 5,
        marginBottom: 5
    },
    content: {
        height: 100,
        textAlign: "center"
    },
    button: {
        height: 50,
        width: "50%",
        padding: 5
    },
    cover: {
        width: 128,
        height: 128,
        marginTop: 12,
        marginBottom: 12,
        marginRight: 12,
        marginLeft: 12,
        right: 0,
        float: "right",
        display: "flex",
        minWidth: 128,
        minHeight: 128
    },
    buttonBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    text: {
        marginLeft: 5
    }
}));

export default function UserCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="card-root">
            <Hidden xsDown>
                <CardMedia
                    className={classes.cover}
                    image="/page/static/image/logo512.png"
                    title="Avatar"
                    id="card-logo"
                />
            </Hidden>
            <Box className={classes.details}>
                <Hidden xsDown>
                    <CardContent className={classes.content} id="card-content">
                        <Typography component="h3" variant="h4">
                            {UserName}
                        </Typography>
                        <Typography component="span" variant="subtitle1">
                            {Blog.Describe}
                        </Typography>
                    </CardContent>
                </Hidden>
                <Box className={classes.buttonBox}>
                    <Button
                        size="small"
                        color="primary"
                        href={Blog.Content}
                        onClick={() => window.open(Blog.Content)}
                        className={classes.button}
                    >
                        <ContactlessRoundedIcon />
                        <Box className={classes.text}>
                            {"Contact"}
                        </Box>
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        href={Blog.Url}
                        onClick={() => window.open(Blog.Url)}
                        className={classes.button}
                    >
                        <DescriptionRoundedIcon />
                        <Box className={classes.text}>
                            {"Go Blog"}
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Card>
    );
}