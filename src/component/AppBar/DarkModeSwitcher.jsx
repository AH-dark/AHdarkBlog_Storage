import { Box, IconButton, Tooltip } from "@material-ui/core";
import DarkModeIcon from '@material-ui/icons/Brightness4Rounded'; //Dark Mode
import LightModeIcon from '@material-ui/icons/Brightness7Rounded'; //Light Mode
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

export default function DarkModeSwitcher_func(props) {
    const classes = useStyles();


    //console.log(this);

    const isDay = this.props.global.theme !== 'dark';
    const isDark = this.props.global.theme === "dark";


    const onChangeTheme = bool => {
        this.props.dispatch({   //这里用到了reduce，解决一些css不好控制但js好控制的样式
            type: 'global/setTheme',
            payload: { theme: bool ? 'light' : 'dark' }
        });
        // 主要通过切换body的class来切换css变量，可以先默认给一个主题
        let body = document.getElementsByTagName('body')[0];
        // let themeLink = document.getElementById('theme-link');
        if (bool) {
            body.className = 'light-theme';
            // themeLink.href = '/theme/light.css'; // 切换 antd 组件主题(亮色)
        } else {
            body.className = 'dark-theme';
            // themeLink.href = '/theme/dark.css'; // 切换 antd 组件主题(暗色)
        }
        // 注释部分是切换项目引入的css文件来控制样式
    }

    return (
        <Box component="span" className={classes.root}>
            <Tooltip title={isDay ? "Switch to Dark mode" : "Switch to Light mode"} aria-label="LightMode">
                <IconButton
                    color="inherit"
                    onClick={onChangeTheme}
                >
                    {isDay && (<LightModeIcon />)}
                    {isDark && (<DarkModeIcon />)}
                </IconButton>
            </Tooltip>
        </Box>
    )
}