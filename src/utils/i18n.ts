import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'

import default_es from "@/locales/es/default.json"
import default_en from "@/locales/es/default.json"

import authentication_es from "@/locales/es/authentication.json"
import authentication_en from "@/locales/en/authentication.json"

const defaultNS : string  = 'default';
i18next.use(initReactI18next).init({
    lng: localStorage.getItem('lang') ?? 'es',
    fallbackLng: 'es',
    debug: false,
    resources : {
        en : {
            default : default_en,
            authentication : authentication_en,
        },
        es : {
            default : default_es,
            authentication : authentication_es,
        }
    },
    defaultNS
});
