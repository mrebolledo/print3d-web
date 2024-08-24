import {useState} from "react";

export const useErrorAlert = () => {
    const [errorAlert, setErrorAlert] = useState<FormAlert>({
        show : false,
        message: ''
    });

    const clearErrorAlert = () => {
        setErrorAlert({
            show : false,
            message: ''
        })
    }

    const showErrorAlert = (message: string) => {
        setErrorAlert({
            ...errorAlert,
            show: true,
            message : message
        })
    }

    return {
        errorAlert,
        setErrorAlert,
        clearErrorAlert,
        showErrorAlert
    }
}
