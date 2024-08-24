import * as yup from "yup";
import {useTranslation} from "react-i18next";
import {useApp} from "@/contexts/AppContext";
import {useErrorAlert} from "@/components/Forms/ErrorAlert/useErrorAlert";
import {useSuccessAlert} from "@/components/Forms/SuccessAlert/useSuccessAlert";
import {ChangeEvent, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetPasswordAPI} from "@/services/Auth/userAPI";
import {useLocation, useNavigate} from "react-router-dom";

export const useResetPasswordService = () => {
    const {t} = useTranslation("authentication");
    const {showToast} = useApp();
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);

    const token = urlParams.get("token") ?? '';

    const navigate = useNavigate();
    const [reminderStatus, setReminderStatus] = useState<boolean>(false);
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
        password : yup.string().required("password-required").min(6),
        passwordConfirmation : yup.string()
            .test('passwords-match', 'passwords-must-match', function (value) {
                return this.parent.password === value;
            }),
    }).required();

    const handlePasswordReset = async (formData : ResetPasswordData) => {
        clearSuccessAlert();
        clearErrorAlert();
        if (formData.token === '') {
            showToast({
                type: "error",
                title : t("missing-token")
            })
            showErrorAlert(t("missing-token-in-request"));
        } else {
            await resetPasswordAPI(formData).then(() => {
                showToast({
                    type: "success",
                    title : t('password-reset-successful')
                })
                showSuccessAlert(t("password-reset-successful"))
            }).catch(err => {
                showToast({
                    type: "error",
                    title : t("complete-form")
                })
                showErrorAlert(t(err.response.data.message));
            });
        }
    }

    const onSubmit = async (event : ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await trigger();

        if (!loading) {
            setLoading(true);
            if (!result) {
                showToast({
                    type: "error",
                    title : t("complete-form")
                })
            } else {
                const formData : ResetPasswordData = {
                    email : event.target.email.value,
                    password : event.target.password.value,
                    password_confirmation : event.target.password.value,
                    token : token
                }
                await handlePasswordReset(formData).then(() => {
                    setLoading(false);
                    setReminderStatus(true);
                })
            }
        }
    }

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
        reminderStatus,
        handleNavigate
    };
}
