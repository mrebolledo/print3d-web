import {FormInput, FormLabel} from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import {useResetPasswordService} from "@/pages/User/Auth/ResetPassword/useResetPasswordService";
import ErrorAlert from "@/components/Forms/ErrorAlert";
import SuccessAlert from "@/components/Forms/SuccessAlert";
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
        reminderStatus,
        handleNavigate
    } = useResetPasswordService();
    return (
        <>
            <div className="text-2xl font-medium">{t("reset-password")}</div>
            <ErrorAlert data={errorAlert}/>
            <SuccessAlert data={successAlert}/>
            {!reminderStatus ?
                <>
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
                                    "block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80": true,
                                    "border-danger": errors.email
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
                            <FormLabel
                                className={"mt-4"}
                                htmlFor="password"
                            >{t('password')}*</FormLabel>
                            <FormInput
                                {...register('password')}
                                type="password"
                                name={'password'}
                                id={'password'}
                                placeholder="********"
                                autoComplete={'current-password'}
                                className={clsx({
                                    "block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80": true,
                                    "border-danger": errors.password
                                })}
                            />
                            {errors.password && (
                                <div className="mt-2 text-danger">
                                    {
                                        typeof errors.password.message === "string" &&
                                        t(errors.password.message)
                                    }
                                </div>
                            )}
                            <FormLabel
                                className={"mt-4"}
                                htmlFor="passwordConfirmation"
                            >{t('password-confirmation')}*</FormLabel>
                            <FormInput
                                {...register('passwordConfirmation')}
                                type="password"
                                name={'passwordConfirmation'}
                                id={'passwordConfirmation'}
                                placeholder="********"
                                autoComplete={'current-password'}
                                className={clsx({
                                    "block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80": true,
                                    "border-danger": errors.passwordConfirmation
                                })}
                            />
                            {errors.passwordConfirmation && (
                                <div className="mt-2 text-danger">
                                    {
                                        typeof errors.passwordConfirmation.message === "string" &&
                                        t(errors.passwordConfirmation.message)
                                    }
                                </div>
                            )}
                            <div className="mt-5 text-center xl:mt-8 xl:text-left">
                                <SubmitButton loading={loading} text={t('reset-my-password')}/>

                            </div>
                        </div>
                    </form>
                </>
                :
                <Button
                    variant="primary"
                    rounded
                    onClick={handleNavigate}
                    type={"button"}
                    className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                >
                    {t('back-to-login')}
                </Button>
            }
        </>
    );
}

export default Main;
