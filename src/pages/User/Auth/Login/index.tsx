import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
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
                          placeholder="your-email@email.com"
                      />
                      <FormLabel className="mt-4">{t("password")}*</FormLabel>
                      <FormInput
                          type="password"
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
              </div>
          </div>
      </>
    );
}

export default Main;
