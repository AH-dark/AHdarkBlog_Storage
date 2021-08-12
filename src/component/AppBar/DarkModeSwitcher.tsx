import { Box, IconButton, Tooltip, useMediaQuery } from "@material-ui/core";

import DarkModeIcon                 from '@material-ui/icons/Brightness4Rounded'; //Dark Mode
import LightModeIcon                from '@material-ui/icons/Brightness7Rounded'; //Light Mode
import React, { useCallback }       from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState }      from '../../store'


export default function DarkModeSwitcher_func ( this: any ) {
	
	const dispatch = useDispatch<Dispatch>()
	const themeOptions = useSelector( ( state: RootState ) => state.theme )
	useMediaQuery( "(prefers-color-scheme: dark)" )
	const changeThemeMode = useCallback(
		( mode: "light" | "dark" ) => dispatch.theme.changeThemeMode( mode ),
		[ dispatch ]
	)
	
	const toggle = () => {
		if ( themeOptions.palette?.type === "dark" ) {
			changeThemeMode( "light" )
		} else {
			changeThemeMode( "dark" )
		}
	}
	
	const isDay = themeOptions.palette?.type === "light";
	const isDark = themeOptions.palette?.type === "dark";
	
	return (
		<Box component="span">
			<Tooltip title={isDay ? "Switch to Dark mode" : "Switch to Light mode"} aria-label="LightMode">
				<IconButton
					color="inherit"
					onClick={toggle}
				>
					{isDay && (<LightModeIcon/>)}
					{isDark && (<DarkModeIcon/>)}
				</IconButton>
			</Tooltip>
		</Box>
	)
}