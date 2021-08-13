import { createModel } from "@rematch/core";
import { RootModel } from "./index";
import { ThemeOptions } from "@material-ui/core";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

const defaultTheme: ThemeOptions = {
    palette: {
        type: "light",
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
    },
};

const defaultState =
    localStorage.getItem("theme") !== null
        ? (JSON.parse(localStorage.getItem("theme") as string) as ThemeOptions)
        : defaultTheme;

const setUserTheme = (theme: ThemeOptions) => {
    localStorage.setItem("theme", JSON.stringify(theme));
};

export const theme = createModel<RootModel>()({
    state: defaultState,
    reducers: {
        changeThemeMode(state: ThemeOptions, payload: "light" | "dark") {
            if (state.palette !== undefined) {
                state.palette.type = payload;

                if (state.palette?.primary !== undefined) {
                    (state.palette.primary as PaletteColor).main =
                        payload === "light" ? "#3f51b5" : "#67aeff";
                }
            }
            //console.log( state.palette );

            setUserTheme(state);
            return state;
        },
    },
});
