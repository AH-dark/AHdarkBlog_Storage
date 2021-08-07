import { Button, Card, CardContent, CardMedia, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Blog, UserName } from "../../../config";
import ContactlessRoundedIcon from '@material-ui/icons/ContactlessRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import "./Card.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 150,
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

export default function () {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="card-root">
            <CardMedia
                className={classes.cover}
                image="/logo512.png"
                title="Live from space album cover"
                id="card-logo"
            />
            <Box className={classes.details}>
                <CardContent className={classes.content} id="card-content">
                    <Typography component="h3" variant="h4">
                        {UserName}
                    </Typography>
                    <Typography component="span" variant="subtitle1">
                        {Blog.Describe}
                    </Typography>
                </CardContent>
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
                            {"联系"}
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
                            {"前往博客"}
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Card>
    );
}