import {Box, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';
import React from "react";
import Gitalk from "../../gitalk";

const useStyles = makeStyles((theme) => ({
    root: {},
    display: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        minHeight: "450px",
        marginTop: "5%",
        borderRadius: "0.3rem",
        justifyContent: "space-evenly"
    },
    gitalk: {
        padding: 5,
        margin: 15,
        textAlign: "left"
    }
}));

export default function Comment(props) {
    const classes = useStyles();
    const myGitalk = new Gitalk();
    myGitalk.id = props.name;

    return (
        <Box className={classes.root}>
            <Paper className={classes.display}>
                <div className={classes.gitalk} id="Gitalk">
                    <GitalkComponent options={{
                        clientID: myGitalk.ClientID,
                        clientSecret: myGitalk.ClientSecret,
                        repo: myGitalk.Repository,
                        owner: myGitalk.Owner,
                        admin: myGitalk.Admin,
                        distractionFreeMode: false
                    }}
                    />
                </div>
            </Paper>
        </Box>
    )
}