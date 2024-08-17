import { FormInput, FormLabel } from "@/components/Base/Form";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import {useTranslation} from "react-i18next";

function Main() {
    const {t} = useTranslation("authentication");
    return (
      <>
          <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
              <div
                  className="rounded-[0.8rem] w-[55px] h-[55px] border border-primary/30 flex items-center justify-center">
                  <div
                      className="relative flex items-center justify-center w-[50px] rounded-[0.6rem] h-[50px] bg-gradient-to-b from-theme-1/90 to-theme-2/90 bg-white">
                      <div className="w-[26px] h-[26px] relative -rotate-45 [&_div]:bg-white">
                          <div
                              className="absolute w-[20%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                          <div className="absolute w-[20%] inset-0 m-auto h-[120%] rounded-full"></div>
                          <div
                              className="absolute w-[20%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                      </div>
                  </div>
              </div>
              <div className="mt-10">
                  <div className="text-2xl font-medium">{t('register')}</div>
                  <div className="mt-2.5 text-slate-600">
                      {t('already-have-account')}{" "}
                      <a className="font-medium text-primary" href="/login">
                          {t('login')}
                      </a>
                  </div>
                  <div className="mt-6">
                      <FormLabel>{t('first-name')}*</FormLabel>
                      <FormInput
                          type="text"
                          className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                          placeholder={users.fakeUsers()[0].name.split(" ")[0]}
                      />
                      <FormLabel className="mt-5">{t('last-name')}*</FormLabel>
                      <FormInput
                          type="text"
                          className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                          placeholder={users.fakeUsers()[0].name.split(" ")[1]}
                      />
                      <FormLabel className="mt-5">{t('email')}*</FormLabel>
                      <FormInput
                          type="text"
                          className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                          placeholder="your-email@email.com"
                      />
                      <FormLabel className="mt-5">{t('password')}*</FormLabel>
                      <FormInput
                          type="password"
                          className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                          placeholder="************"
                      />

                      <FormLabel className="mt-5">{t('password-confirmation')}*</FormLabel>
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
                              {t('register')}
                          </Button>
                          <Button
                              variant="outline-secondary"
                              rounded
                              className="bg-white/70 w-full py-3.5 mt-3"
                          >
                              {t("back-to-login")}
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Main;
