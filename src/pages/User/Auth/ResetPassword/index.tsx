import {useTranslation} from "react-i18next";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
import {FormCheck, FormInput, FormLabel} from "@/components/Base/Form";
import Button from "@/components/Base/Button";

function Main() {
    const {t} = useTranslation("authentication");
    return (
        <>
            <div className="text-2xl font-medium">{t("reset-password")}</div>
            <div className="mt-6">
                <FormLabel className="mt-4">{t("password")}*</FormLabel>
                <FormInput
                    type="password"
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    placeholder="************"
                />
                <FormLabel className="mt-4">{t("password-confirmation")}*</FormLabel>
                <FormInput
                    type="password"
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    placeholder="************"
                />
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <Button
                        variant="primary"
                        rounded
                        className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3"
                    >
                        {t('reset-my-password')}
                    </Button>

                </div>
            </div>
        </>
    );
}

export default Main;
