import {Outlet} from 'react-router-dom';
import clsx from "clsx";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
import {FormCheck, FormInput, FormLabel} from "@/components/Base/Form";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Tippy from "@/components/Base/Tippy";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {useTranslation} from "react-i18next";


function Main() {
    const {t} = useTranslation("authentication");
    return (
        <>
            <div
                className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24">
                <div
                    className={clsx([
                        "relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0",
                        "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5",
                    ])}
                >
                    <Outlet />
                </div>
            </div>
            <div
                className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] pl-14 pr-12 xl:px-24">
                <div
                    className={clsx([
                        "relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20",
                        "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
                        "before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]",
                    ])}
                ></div>
                <div
                    className={clsx([
                        "h-full col-span-7 2xl:col-span-8 lg:relative",
                        "before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%]",
                        "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat",
                    ])}
                >
                    <div
                        className="sticky top-0 z-10 flex-col justify-center hidden h-screen ml-16 lg:flex xl:ml-28 2xl:ml-36">
                        <div
                            className="leading-[1.4] text-[2.6rem] xl:text-5xl font-medium xl:leading-[1.2] text-white">
                            {t('app-name')} <br/> {t('app-sub-title')}
                        </div>
                        <div className="mt-5 text-base leading-relaxed xl:text-lg text-white/70">
                            {t('app-description')}
                        </div>
                    </div>
                </div>
            </div>
            <ThemeSwitcher />
        </>
    );
}

export default Main;
