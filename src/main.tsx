import ScrollToTop from "@/components/Base/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";
import "./assets/css/app.css";
import "./utils/i18n"
import {AuthProvider} from "@/contexts/AuthContext";
import {AppProvider} from "@/contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <AppProvider>
                    <Router />
                </AppProvider>
            </AuthProvider>
        </Provider>
        <ScrollToTop />
    </BrowserRouter>
);
