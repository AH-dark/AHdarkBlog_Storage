import "@fontsource/roboto";
import {
	Box,
	createStyles,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	makeStyles,
	Paper,
	Theme,
	Typography
}                                from "@material-ui/core";
import DescriptionRoundedIcon    from '@material-ui/icons/DescriptionRounded';
import GitHubIcon                from "@material-ui/icons/GitHub";
import HomeRoundedIcon           from '@material-ui/icons/HomeRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import React                     from "react";
import { useHistory }            from "react-router-dom";
import { BlogURL, GitHub }       from "../../config";

const useStyles = makeStyles( ( theme: Theme ) => createStyles( {
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
		[ theme.breakpoints.up( "sm" ) ]: {
			height: "calc(var(--vh, 100vh) - 145px)",
		},
		
		[ theme.breakpoints.down( "sm" ) ]: {
			minHeight: "calc(var(--vh, 100vh) - 360px)",
		},
	},
	iconBotton: {
		marginLeft: theme.spacing( 2 )
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
	},
	ButtonText: {
		display: "block"
	}
} ) )

export default function ListBar () {
	const classes = useStyles();
	let history = useHistory();
	
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
						onClick={() => history.push( "/?" )}
					>
						<ListItemIcon className={classes.iconBotton}>
							<HomeRoundedIcon/>
						</ListItemIcon>
						<Box component="div" className={classes.ButtonTextDiv}>
							<Typography component="span" variant="body1" className={classes.ButtonText}>
								{"Home"}
							</Typography>
						</Box>
					</ListItem>
					
					<ListItem
						button
						className={classes.ListItem}
						onClick={() => history.push( "/comment?" )}
					>
						<ListItemIcon className={classes.iconBotton}>
							<QuestionAnswerRoundedIcon/>
						</ListItemIcon>
						<Box component="div" className={classes.ButtonTextDiv}>
							<Typography component="span" variant="body1" className={classes.ButtonText}>
								{"Comment"}
							</Typography>
						</Box>
					</ListItem>
					
					<Divider/>
					
					<ListItem
						button
						className={classes.ListItem}
						onClick={
							() =>
								window.open( BlogURL, "_blank" )
						}
					>
						<ListItemIcon className={classes.iconBotton}>
							<DescriptionRoundedIcon/>
						</ListItemIcon>
						<Box component="div" className={classes.ButtonTextDiv}>
							<Typography component="span" variant="body1" className={classes.ButtonText}>
								{"Blog"}
							</Typography>
						</Box>
					</ListItem>
					
					<ListItem
						button
						className={classes.ListItem}
						onClick={
							() =>
								window.open( "https://github.com/" + GitHub.UserName, "_blank" )
						}
					>
						<ListItemIcon className={classes.iconBotton}>
							<GitHubIcon/>
						</ListItemIcon>
						<Box component="div" className={classes.ButtonTextDiv}>
							<Typography component="span" variant="body1" className={classes.ButtonText}>
								{"GitHub Account"}
							</Typography>
						</Box>
					</ListItem>
				</List>
			</Paper>
		</>
	)
}