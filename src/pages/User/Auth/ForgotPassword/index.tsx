import {FormInput, FormLabel} from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import ErrorAlert from "@/components/Forms/ErrorAlert";
import SuccessAlert from "@/components/Forms/SuccessAlert";
import {useForgotPasswordService} from "@/pages/User/Auth/ForgotPassword/useForgotPasswordService";
import clsx from "clsx";
import SubmitButton from "@/components/SubmitButton";

function Main() {
    const {
        t,
        errorAlert,
        successAlert,
        register,
        errors,
        loading,
        onSubmit,
        handleNavigate
    } = useForgotPasswordService()
    return (
        <>
            <div className="text-2xl font-medium">{t("forgot-password")}</div>
            <div className="mt-2.5 text-slate-600">
                {t('remembered-password')}{" "}
                <a className="font-medium text-primary" href="/login">
                    {t('login')}
                </a>
            </div>
            <ErrorAlert data={errorAlert}/>
            <SuccessAlert data={successAlert}/>
            <form className={"validate-form"} onSubmit={onSubmit}>
                <div className="mt-6">
                <FormLabel
                    htmlFor="email"
                >{t('email')}*</FormLabel>
                <FormInput
                    {...register('email')}
                    type="text"
                    name={'email'}
                    id={'email'}
                    placeholder="your-email@email.com"
                    autoComplete={'email'}
                    className={clsx({
                        "block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80" : true,
                        "border-danger" : errors.email
                    })}
                />
                {errors.email && (
                    <div className="mt-2 text-danger">
                        {
                            typeof errors.email.message === "string" &&
                            t(errors.email.message)
                        }
                    </div>
                )}
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <SubmitButton loading={loading} text={t('send-email')} />
                    <Button
                        variant="outline-secondary"
                        rounded
                        onClick={handleNavigate}
                        className="bg-white/70 w-full py-3.5 mt-3"
                    >
                        {t('back-to-login')}
                    </Button>
                </div>
            </div>
            </form>
        </>
    );
}

export default Main;
