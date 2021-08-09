export const initState = {
    siteConfig: {
        theme: {
            palette: {
                common: { black: "#000", white: "#fff" },
                background: { paper: "#fff", default: "#fafafa" },
                primary: {
                    light: "#7986cb",
                    main: "#3f51b5",
                    dark: "#303f9f",
                    contrastText: "#fff",
                },
                secondary: {
                    light: "#ff4081",
                    main: "#f50057",
                    dark: "#c51162",
                    contrastText: "#fff",
                },
                error: {
                    light: "#e57373",
                    main: "#f44336",
                    dark: "#d32f2f",
                    contrastText: "#fff",
                },
                text: {
                    primary: "rgba(0, 0, 0, 0.87)",
                    secondary: "rgba(0, 0, 0, 0.54)",
                    disabled: "rgba(0, 0, 0, 0.38)",
                    hint: "rgba(0, 0, 0, 0.38)",
                },
                explorer: {
                    filename: "#474849",
                    icon: "#8f8f8f",
                    bgSelected: "#D5DAF0",
                    emptyIcon: "#e8e8e8",
                },
            }
        }
    },
    navigator: {
        path: "/"
    }
}

export const RDC = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DEYLIGHT_MODE": {
            const copy = Object.assign({}, state);
            if (copy.siteConfig.theme.palette.type === undefined || copy.siteConfig.theme.palette.type === "light") {
                return {
                    ...state,
                    siteConfig: {
                        ...state.siteConfig,
                        theme: {
                            ...state.siteConfig.theme,
                            palette: {
                                ...state.siteConfig.theme.palette,
                                type: "dark",
                            },
                        },
                    },
                };
            } else {
                return {
                    ...state,
                    siteConfig: {
                        ...state.siteConfig,
                        theme: {
                            ...state.siteConfig.theme,
                            palette: {
                                ...state.siteConfig.theme.palette,
                                type: "light",
                            },
                        },
                    },
                };
            }
        }
    }
}