import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
import {useTranslation} from "react-i18next";
import {ChangeEvent, ChangeEventHandler, useState} from "react";
import {useAuth} from "@/contexts/AuthContext";

function Main() {
    const {t} = useTranslation("authentication");
    const {login} = useAuth();

    const [credentials, setCredentials] = useState<UserCredentials>({
        email : '',
        password: ''
    });

    const handleLogin = async () => {
        await login(credentials)
    }

    const updateCredentials = (e : ChangeEvent<HTMLInputElement> ) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="text-2xl font-medium">{t("login")}</div>
            <div className="mt-2.5 text-slate-600">
                {t('no-account')}{" "}
                <a className="font-medium text-primary" href="/register">
                    {t('register')}
                </a>
            </div>
            <Alert
                variant="outline-primary"
                className="flex items-center px-4 py-3 my-7 bg-primary/5 border-primary/20 rounded-[0.6rem] leading-[1.7]"
            >
                {({dismiss}) => (
                    <>
                        <div className="">
                            <Lucide
                                icon="Lightbulb"
                                className="stroke-[0.8] w-7 h-7 mr-2 fill-primary/10"
                            />
                        </div>
                        <div className="ml-1 mr-8">
                            {t('login-message')}
                        </div>
                        <Alert.DismissButton
                            type="button"
                            className="btn-close text-primary"
                            onClick={dismiss}
                            aria-label="Close"
                        >
                            <Lucide icon="X" className="w-5 h-5"/>
                        </Alert.DismissButton>
                    </>
                )}
            </Alert>
            <div className="mt-6">
                <FormLabel>{t('email')}*</FormLabel>
                <FormInput
                    type="text"
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    name={'email'}
                    onChange={updateCredentials}
                    placeholder="your-email@email.com"
                />
                <FormLabel className="mt-4">{t("password")}*</FormLabel>
                <FormInput
                    type="password"
                    name={'password'}
                    onChange={updateCredentials}
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    placeholder="************"
                />
                <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                    <div className="flex items-center mr-auto">
                        <FormCheck.Input
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
                    <a href="">{t('forgot-password')}</a>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <Button
                        variant="primary"
                        rounded
                        onClick={handleLogin}
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                        {t('login')}
                    </Button>
                    <Button
                        variant="outline-secondary"
                        rounded
                        className="bg-white/70 w-full py-3.5 mt-3"
                    >
                        {t('register')}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Main;
