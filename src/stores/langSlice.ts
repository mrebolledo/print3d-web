import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const langs = [
    {
        name: "es",
    },
    {
        name : "en"
    }
] as const;

export type Langs = (typeof langs)[number];

interface LangState {
    value: Langs["name"];
}

export const getLang = (search?: Langs["name"]) => {
    const theme = search === undefined ? localStorage.getItem("lang") : search;
    return (
        langs.filter((item : Langs)  => {
            return item.name === theme;
        })[0] || langs[0]
    );
};

const initialState: LangState = {
    value:
        localStorage.getItem("lang") === null ? langs[0].name : getLang().name,
};

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<Langs["name"]>) => {
            state.value = action.payload;
        },
    },
});

export const { setLang } = langSlice.actions;

export const selectLang = (state: RootState) => {
    if (localStorage.getItem("lang") === null) {
        localStorage.setItem("lang", "es");
    }

    return state.lang.value;
};

export default langSlice.reducer;
