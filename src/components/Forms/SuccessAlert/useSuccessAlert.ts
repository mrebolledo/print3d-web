import {useState} from "react";

export const useSuccessAlert = () => {
    const [successAlert, setSuccessAlert] = useState<FormAlert>({
        show : false,
        message: ''
    });

    const clearSuccessAlert = () => {
        setSuccessAlert({
            show : false,
            message: ''
        })
    }

    const showSuccessAlert = (message : string) => {
        setSuccessAlert({
            ...successAlert,
            show : true,
            message : message
        })
    }

    return {
        successAlert,
        setSuccessAlert,
        clearSuccessAlert,
        showSuccessAlert
    }
}
