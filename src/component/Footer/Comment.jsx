import React from "react";
import GitalkComponent from "gitalk/dist/gitalk-component";
import { makeStyles } from "@material-ui/styles";
import Gitalk from "../../gitalk.config";
import { Box, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    gitalk: {
        padding: 5
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