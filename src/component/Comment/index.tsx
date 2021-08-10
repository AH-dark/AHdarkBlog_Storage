/* jshint esversion: 6 */
import { Box, createStyles, Paper, Theme } from "@material-ui/core";
import { makeStyles }                      from "@material-ui/styles";
import 'gitalk/dist/gitalk.css';
import React                               from "react";
import { Gitalk as GitalkConfig }          from "../../gitalk";
import GitalkComponent                     from "gitalk/dist/gitalk-component";
import { useSelector }                     from 'react-redux'
import { RootState }                       from '../../store'


const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
	root: {},
	display: {
		display: "flex",
		flexDirection: "column",
		minHeight: "450px",
		marginTop: "5%",
		borderRadius: "0.3rem",
		justifyContent: "space-evenly",
		backgroundColor: theme.palette.background.paper
	},
	gitalk: {
		padding: 5,
		margin: 15,
		textAlign: "left"
	}
} ) );

export default function Comment ( props: any ) {
	const classes = useStyles();
	
	return (
		<Box className={classes.root}>
			<Paper className={classes.display}>
				<Box className={classes.gitalk} id="gitalk-container">
					<GitalkComponent options={{
						clientID: GitalkConfig.ClientID,
						clientSecret: GitalkConfig.ClientSecret,
						repo: GitalkConfig.Repository,
						owner: GitalkConfig.Owner,
						admin: GitalkConfig.Admin,
						id: props.name,
						distractionFreeMode: true
					}}
					/>
				</Box>
			</Paper>
		</Box>
	)
}