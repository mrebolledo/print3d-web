import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useApp} from "@/contexts/AppContext";
import {ChangeEvent, useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useErrorAlert} from "@/components/Forms/ErrorAlert/useErrorAlert";
import {forgotPasswordAPI} from "@/services/Auth/userAPI";
import {useSuccessAlert} from "@/components/Forms/SuccessAlert/useSuccessAlert";

export const useForgotPasswordService = () => {
    const {t} = useTranslation("authentication");
    const navigate = useNavigate();
    const {showToast} = useApp();
    const {
        errorAlert,
        clearErrorAlert,
        showErrorAlert
    } = useErrorAlert();

    const {
        successAlert,
        clearSuccessAlert,
        showSuccessAlert
    } = useSuccessAlert();

    const [loading, setLoading] = useState<boolean>(false);

    const schema = yup.object({
        email : yup.string().required("email-required").email("email-valid"),
    }).required();

    const {
        register,
        trigger,
        formState : {errors},
    } = useForm({
        mode : "onChange",
        resolver : yupResolver(schema),
        defaultValues: {
            email : ''
        }
    });

    const handleForgotPassword = async (email : string) => {
        clearErrorAlert();
        clearSuccessAlert();
        await forgotPasswordAPI(email).then(() => {
            showToast({
                type : "success",
                title : t("email-sent")
            })
            showSuccessAlert(t("forgot-password-email-sent"));
        }).catch(err => {
            showToast({
                type : "error",
                title : t("complete-form")
            });
            showErrorAlert(t(err.response.data.message));
        })
    }

    const onSubmit = async(event : ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await trigger();

        if (!loading) {
            setLoading(true);
            if (!result) {
               showToast({
                   type: "error",
                   title : t("complete-form")
               });
            } else {
                const email : string = event.target.email.value;
                await handleForgotPassword(email).then(() => {
                    setLoading(false);
                });
            }
        }
    }

    const handleNavigate = () => {
        navigate("/login", {replace : true});
    }

    return {
        t,
        errorAlert,
        successAlert,
        register,
        errors,
        loading,
        onSubmit,
        handleNavigate,
    };
}
