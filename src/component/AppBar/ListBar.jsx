import "@fontsource/roboto";
import {
    Box, IconButton,
    List,
    ListItem,
    makeStyles,
    Paper,
    Typography
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import React from "react";
import { BlogURL, GitHub, UserEmail } from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: 240,
        zIndex: 50,
        position: "fixed",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column"
    },
    List: {
        display: "flex",
        height: "100%",
        zIndex: 80,
        width: "100%",
        flexDirection: "column",
        padding: 0
    },
    ListItem: {
        height: 50,
        display: "flex",
        margin: 0
    },
    WhiteBlock: {
        zIndex: 10,
        minHeight: 64,
        overflowY: "auto",
        [theme.breakpoints.up("sm")]: {
            height: "calc(var(--vh, 100vh) - 145px)",
        },

        [theme.breakpoints.down("sm")]: {
            minHeight: "calc(var(--vh, 100vh) - 360px)",
        },
    },
    iconBotton: {
        marginLeft: 16,
        marginRight: theme.spacing(2)
    },
    Block: {
        minHeight: 64,
        width: "100%",
        backgroundColor: "transparent",
        zIndex: 50
    },
    ButtonTextDiv: {
        flex: "1 1 auto",
        marginTop: 4,
        marginBottom: 4
    }
}))

const SendEmail = () => {
    return window.open("mailto:" + UserEmail);
}

const GoGitHub = () => {
    return window.open("https://github.com/" + GitHub.UserName);
}

const GoBlog = () => {
    return window.open(BlogURL);
}

export default function ListBar() {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} elevation={0} variant="outlined" square>
                <List
                    component="nav"
                    aria-label="main toolbar"
                    className={classes.List}
                >
                    <ListItem
                        button
                        className={classes.ListItem}
                        onClick={GoBlog}
                    >
                        <IconButton className={classes.iconBotton}>
                            <DescriptionRoundedIcon />
                        </IconButton>
                        <Box component="div" className={classes.ButtonTextDiv}>
                            <Typography component="span" variant="body1" className={classes.ButtonText} display="Block">
                                {"Blog"}
                            </Typography>
                        </Box>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.ListItem}
                        onClick={GoGitHub}
                    >
                        <IconButton className={classes.iconBotton}>
                            <GitHubIcon />
                        </IconButton>
                        <Box component="div" className={classes.ButtonTextDiv}>
                            <Typography component="span" variant="body1" className={classes.ButtonText} display="Block">
                                {"GitHub Account"}
                            </Typography>
                        </Box>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.ListItem}
                        onClick={SendEmail}
                    >
                        <IconButton className={classes.iconBotton}>
                            <MailRoundedIcon />
                        </IconButton>
                        <Box component="div" className={classes.ButtonTextDiv}>
                            <Typography component="span" variant="body1" className={classes.ButtonText} display="Block">
                                {"Send Mail"}
                            </Typography>
                        </Box>
                    </ListItem>
                </List>
            </Paper>
        </>
    )
}