import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import ErrorAlert from "@/components/Forms/ErrorAlert";
import {useLoginService} from "@/pages/User/Auth/Login/useLoginService";
import clsx from "clsx";
import SubmitButton from "@/components/SubmitButton";

function Main() {
    const {
        t,
        errorAlert,
        onSubmit,
        register,
        errors,
        loading,
        handleNavigate
    } = useLoginService();

    return (
        <>
            <div className="text-2xl font-medium">{t("login")}</div>
            <div className="mt-2.5 text-slate-600">
                {t('no-account')}{" "}
                <a className="font-medium text-primary" href="/register">
                    {t('register')}
                </a>
            </div>
            <ErrorAlert data={errorAlert}/>
            <form className="validate-form" onSubmit={onSubmit}>
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
                        autoComplete={"email"}
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
                    <FormLabel
                        className="mt-4"
                        htmlFor={"password"}
                    >{t("password")}*</FormLabel>
                    <FormInput
                        {...register("password")}
                        type="password"
                        name={'password'}
                        id={'password'}
                        autoComplete={"current-password"}
                        className={clsx({
                            "block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80" : true,
                            "border-danger" : errors.email
                        })}
                        placeholder="************"
                    />
                    {errors.password && (
                        <div className="mt-2 text-danger">
                            {
                                typeof errors.password.message === "string" &&
                                t(errors.password.message)
                            }
                        </div>
                    )}
                    <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                        <div className="flex items-center mr-auto">
                            <FormCheck.Input
                                {...register('rememberMe')}
                                id="remember-me"
                                type="checkbox"
                                className="mr-2.5 border"
                            />
                            <label
                                className="cursor-pointer select-none"
                                htmlFor="remember-me"
                            >
                                {t('remember-me')}
                            </label>
                        </div>
                        <a href="/forgot-password">{t('forgot-password')}</a>
                    </div>
                    <div className="mt-5 text-center xl:mt-8 xl:text-left">
                        <SubmitButton loading={loading} text={t('login')} />
                        <Button
                            variant="outline-secondary"
                            rounded
                            onClick={handleNavigate}
                            className="bg-white/70 w-full py-3.5 mt-3"
                        >
                            {t('register')}
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Main;
