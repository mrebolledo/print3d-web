interface AppContextProps {
    showToast : (toast : AppToast) => void;
}

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'none';

type AppToast = {
    type : ToastType,
    title : string,
    description? : string
}
