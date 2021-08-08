import {
    AppBar,
    CssBaseline,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
    Hidden,
    Collapse,
    Tooltip
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { GitHub, SiteName } from "../../config";
import ListBar from "./ListBar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: "default"
    },
    Toolbar: {
        display: "flex",
        flexDirection: "row"
    },
    Drawer: {
        margin: theme.spacing(1)
    }
}))

const GitHubLink = "https://github.com/" + GitHub.UserName + "/" + GitHub.RepoName + "/";


export default function Bar() {
    const classes = useStyles();
    const [MenuOpen, set] = useState(false);


    const handleClickMenu = () => {
        set(!MenuOpen);
    }

    const Refresh = () => {
        window.location.href = "/";
    }

    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.Toolbar}>

                    <Hidden xsDown implementation="css">
                        <Tooltip title="Menu" aria-label="menu">
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menuIcon"
                                onClick={handleClickMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                    </Hidden>

                    <CssBaseline />

                    <Typography
                        variant="h6"
                        component="div"
                        className={classes.title}
                        onClick={Refresh}
                    >
                        {SiteName}
                    </Typography>

                    <CssBaseline />

                    <Tooltip title="GitHub Repository" aria-label="github-repository">
                        <IconButton
                            color="inherit"
                            href={GitHubLink}
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>

                    <CssBaseline />
                </Toolbar>
            </AppBar>

            <Hidden xsDown implementation="css">
                <Collapse
                    in={MenuOpen}
                    component="div"
                >
                    <ListBar
                        classes={{
                            paper: classes.drawerPaperDesktop,
                        }}
                        className={classes.Drawer}
                        variant="persistent"
                        anchor="left"
                    />
                </Collapse>
            </Hidden>
        </div>
    )
}