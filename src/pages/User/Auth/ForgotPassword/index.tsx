import {useTranslation} from "react-i18next";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
import {FormInput, FormLabel} from "@/components/Base/Form";
import Button from "@/components/Base/Button";

function Main() {
    const {t} = useTranslation("authentication");
    return (
        <>
            <div className="text-2xl font-medium">{t("forgot-password")}</div>
            <div className="mt-2.5 text-slate-600">
                {t('remembered-password')}{" "}
                <a className="font-medium text-primary" href="/login">
                    {t('login')}
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
                            {t('forgot-password-message')}
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
                    placeholder="your-email@email.com"
                />
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <Button
                        variant="primary"
                        rounded
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                        {t('send-email')}
                    </Button>
                    <Button
                        variant="outline-secondary"
                        rounded
                        className="bg-white/70 w-full py-3.5 mt-3"
                    >
                        {t('back-to-login')}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Main;
