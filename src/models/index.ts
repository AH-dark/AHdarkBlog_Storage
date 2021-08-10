import { Models } from "@rematch/core";
import { theme } from "./theme";
export interface RootModel extends Models<RootModel> {
    theme: typeof theme;
}
export const models: RootModel = { theme };