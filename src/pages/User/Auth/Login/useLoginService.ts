import {useTranslation} from "react-i18next";
import {useAuth} from "@/contexts/AuthContext";
import {useApp} from "@/contexts/AppContext";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useState} from "react";
import {useErrorAlert} from "@/components/Forms/ErrorAlert/useErrorAlert";

export const useLoginService = () => {
    const {t} = useTranslation("authentication");
    const {login} = useAuth();
    const {showToast} = useApp();

    const {
        errorAlert,
        clearErrorAlert,
        showErrorAlert
    } = useErrorAlert();

    const [loading, setLoading] = useState<boolean>(false);

    const schema = yup
        .object({
            email: yup.string().required("email-required").email("email-valid"),
            password: yup.string().required("password-required").min(6),
            rememberMe : yup.boolean(),
        })
        .required();

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleLogin = async (credentials : UserCredentials) => {
        await login(credentials).then(() => {
            clearErrorAlert();
            showToast({
                type : "success",
                title : t("login-successfully")
            })
        }).catch(err => {
            showToast({
                type : "error",
                title : t("complete-form")
            })
            showErrorAlert(t(err.response.data.message));
        })
    }

    const onSubmit = async (event : React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await trigger();

        if (! loading) {
            setLoading(true);
            if (!result) {
                showToast({
                    type: "error",
                    title : t('complete-form')
                })
            } else {
                const credentials : UserCredentials ={
                    email : event.target.email.value,
                    password : event.target.password.value,
                    rememberMe : event.target.rememberMe.checked
                }
                await handleLogin(credentials).then(() => {
                    setLoading(false)
                });
            }
        }
    }


    return {
        t,
        onSubmit,
        errorAlert,
        handleLogin,
        register,
        errors,
        loading
    };
}
