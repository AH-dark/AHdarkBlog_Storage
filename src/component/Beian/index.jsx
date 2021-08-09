import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Typography, Link, Box } from "@material-ui/core";
import { Beian as BeianNumber, WangAn } from "../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        display: "block",
        marginTop: 7.5,
        marginBottom: 7.5
    },
    wanganimg: {
        backgroundImage: "url(data:image/svg;base64,UklGRgQCAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSJgAAAABgKpt//nn+RvZ89KuNVcbR6C6pBNYW12zl61oO23Vtu2/v59TiIgJILircnOrKgLlzL4Pj8fj+RkuUTB7FE0hIuZVxs1B4r88yudxAakeYQIQsSiZiYVaj7ge2mS9cCbbgTfZIYzJmmFVtgQ/slsolaUB5Y9qtzkAmRdqN0EmPMKBAGvjq8pRnTYAbBVdK9unpytTDQVaAFZQOCBGAQAAMAYAnQEqFAAUAD6RQJhJpaOiISgKqLASCWwAnTLjcCLQ1YB0mvk5EyaEGbRtKlwPO1EC/AS1CKQr+AD88N6kfmuD5PvuzdYgPrnh8vaf1AQ2/J0izySf1YOastsPXpkSd/jfa3zV/RuImO4q+N/C005h6/+yeEztt2uCfpd+6h7+ftZ8oG0WZ0hKRL7E7yRrfYCckwDOnYfi9gAr0A9bklcL0Guc3dCE4z3WIt4WDeJ2LMdDE1HQVEfjI7IDT0sk/2rG1uXnak+b6toDYe/BRNCKq19OD/N7UOXyWMK/Md3I95+ZyNGQ7wTonTXiwPOBYJmmeVTM4JUtMklg9aAUyb5azaKOBTD4ZL0Q/KPp4N8G/dRcXqHwxCP1BB0S67LTBEYMwEuOvzPJzySla4Y3V+F2MhBx9eI8DNCYYZdAMQAALiWAAAA=)",
        height: 20,
        width: 20,
        display: "inline-block",
        margin: 0,
        marginRight: 2,
        padding: 0,
        verticalAlign: "baseline"
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
            <Box component="div" className={classes.root} id="Beian">
                {BeianNumber !== false && (
                    <Typography component="div" variant="body2" id="Beian">
                        <Link
                            href="https://beian.miit.gov.cn"
                            target="_blank"
                        >
                            {BeianNumber}
                        </Link>
                    </Typography>
                )}
                {WangAn !== false && (
                    <Typography component="div" variant="body2" id="WangAn-Beian">
                        {WangAn.Img === true && (
                            <Box component="span" className={classes.wanganimg} />
                        )}
                        <Link
                            href={WangAn.Link}
                            target="_blank"
                        >
                            {WangAn.Num}
                        </Link>
                    </Typography>
                )}
            </Box>
        </>
    )
}