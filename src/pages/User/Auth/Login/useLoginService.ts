import {useTranslation} from "react-i18next";
import {useAuth} from "@/contexts/AuthContext";
import {useApp} from "@/contexts/AppContext";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const useLoginService = () => {
    const {t} = useTranslation("authentication");
    const navigate = useNavigate();
    const {login} = useAuth();
    const {showToast} = useApp();
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
            setErrorAlert({
                ...errorAlert,
                show: true,
                message: t(err.response.data.message)
            });
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

    const handleNavigate = () => {
        navigate("/register");
    }

    return {
        t,
        onSubmit,
        errorAlert,
        handleLogin,
        register,
        errors,
        loading,
        handleNavigate
    };
}
