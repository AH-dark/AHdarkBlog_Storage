import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Typography, Link, Box } from "@material-ui/core";
import { Beian as BeianNumber } from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    }
}))

const warning = "According to the configuration, the Beian number is not displayed. If this station operates within the territory of the People's Republic of China, it will violate relevant regulations."

export default function Beian() {
    const classes = useStyles();

    if (BeianNumber === false) {
        console.warn(warning);
    }

    return (
        <>
            <Box component="div" className={classes.root}>
                {Beian !== false && (
                    <Typography component="div" variant="body2" marginTop={5}>
                        {"备案号："}
                        <Link
                            href="https://beian.miit.gov.cn"
                            target="_blank"
                        >
                            {BeianNumber}
                        </Link>
                    </Typography>
                )}
            </Box>
        </>
    )
}