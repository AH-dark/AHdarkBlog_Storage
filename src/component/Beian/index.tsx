/* jshint esversion: 6 */

import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Box, createStyles, Link, Theme, Typography } from "@material-ui/core";
import { Beian as BeianNumber } from "../../config";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: "center",
            display: "block",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        WangAnImg: {
            backgroundImage:
                "url(data:image/svg;base64,UklGRgQCAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSJgAAAABgKpt//nn+RvZ89KuNVcbR6C6pBNYW12zl61oO23Vtu2/v59TiIgJILircnOrKgLlzL4Pj8fj+RkuUTB7FE0hIuZVxs1B4r88yudxAakeYQIQsSiZiYVaj7ge2mS9cCbbgTfZIYzJmmFVtgQ/slsolaUB5Y9qtzkAmRdqN0EmPMKBAGvjq8pRnTYAbBVdK9unpytTDQVaAFZQOCBGAQAAMAYAnQEqFAAUAD6RQJhJpaOiISgKqLASCWwAnTLjcCLQ1YB0mvk5EyaEGbRtKlwPO1EC/AS1CKQr+AD88N6kfmuD5PvuzdYgPrnh8vaf1AQ2/J0izySf1YOastsPXpkSd/jfa3zV/RuImO4q+N/C005h6/+yeEztt2uCfpd+6h7+ftZ8oG0WZ0hKRL7E7yRrfYCckwDOnYfi9gAr0A9bklcL0Guc3dCE4z3WIt4WDeJ2LMdDE1HQVEfjI7IDT0sk/2rG1uXnak+b6toDYe/BRNCKq19OD/N7UOXyWMK/Md3I95+ZyNGQ7wTonTXiwPOBYJmmeVTM4JUtMklg9aAUyb5azaKOBTD4ZL0Q/KPp4N8G/dRcXqHwxCP1BB0S67LTBEYMwEuOvzPJzySla4Y3V+F2MhBx9eI8DNCYYZdAMQAALiWAAAA=)",
            height: 20,
            width: 20,
            display: "inline-block",
            margin: 0,
            marginRight: theme.spacing(0.25),
            padding: 0,
            verticalAlign: "baseline",
        },
    })
);

const warning =
    "According to the configuration, the Beian number is not displayed. If this station operates within the territory of the People's Republic of China, it will violate relevant regulations.";

export default function Beian() {
    const classes = useStyles();

    if (!BeianNumber) {
        console.warn(warning);
    }

    return (
        <>
            <Box component="div" className={classes.root} id="Beian">
                <Typography component="div" variant="body2" id="Beian">
                    <Link href="https://beian.miit.gov.cn" target="_blank">
                        {BeianNumber}
                    </Link>
                </Typography>
            </Box>
        </>
    );
}
