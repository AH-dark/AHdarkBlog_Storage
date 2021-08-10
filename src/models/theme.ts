import { createModel } from "@rematch/core";
import { RootModel } from "./index"
import {ThemeOptions} from "@material-ui/core";

const defaultTheme:ThemeOptions = {
    palette: {
    },
}

const defaultState = localStorage.getItem("theme")!== null?
    JSON.parse(localStorage.getItem("theme") as string) as ThemeOptions
    : defaultTheme

const setUserTheme = (theme:ThemeOptions)=>{
    localStorage.setItem("theme",JSON.stringify(theme))
}

export const theme = createModel<RootModel>()({
    state: defaultState,
    reducers: {
        changeThemeMode(state,payload: "light" | "dark"){
            if (state.palette !== undefined){
                state.palette.type = payload
            }

            setUserTheme(state)
            return state
        },
    },
});