import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';
import React from "react";
import Gitalk from "../../gitalk.config";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    gitalk: {
        padding: 5,
        margin: 15,
        textAlign: "unset"
    }
}));

export default function Comment() {
    const classes = useStyles();
    const myGitalk = new Gitalk();
    myGitalk.id = "footer";

    return (
        <Box className={classes.root}>
            <Paper>
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