import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "HOME",
    {
      icon: "GaugeCircle",
      pathname: "/",
      title: "Home",
    },
    "AUTHENTICATIONS",
    {
      icon: "BookKey",
      pathname: "login",
      title: "Login",
    },
    {
      icon: "BookLock",
      pathname: "register",
      title: "Register",
    }]
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
