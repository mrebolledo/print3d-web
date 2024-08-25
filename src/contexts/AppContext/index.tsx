import {createContext, ReactNode, useContext, useState} from "react";
import AppToast from "@/components/AppToast";

const AppContext = createContext<AppContextProps>({
    showToast : () => {}
});

const AppProvider = ({ children } : {children : ReactNode}) => {
    const [toastData, setToastData] = useState<AppToast>({
        type: "none",
        title: "",
        description : ""
    });

    const showToast = ({type, title, description} : AppToast) => {
        setToastData({
            type : type,
            title : title,
            description : description,
        })
    }

    return  (
        <AppContext.Provider value={{ showToast }}>
            <AppToast toastData={toastData} setToastData={setToastData} ></AppToast>
            {children}
        </AppContext.Provider>
    );
}

const useApp = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useApp};
