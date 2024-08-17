import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface LangState {
    value: string;
}

const initialState: LangState = {
    value: localStorage.getItem("lang") ?? "es",
};

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setLang } = langSlice.actions;

export const selectLang = (state: RootState) => {
    if (localStorage.getItem("lang") === null) {
        localStorage.setItem("lang", "es");
    }

    return state.darkMode.value;
};

export default langSlice.reducer;
