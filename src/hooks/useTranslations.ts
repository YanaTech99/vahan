import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Locale, getLocales } from "react-native-localize";
import store from "../store/store";
import moment from "moment";
import languageSlice from "../store/slice/LanguageSlice";
import { useDispatch, useSelector } from "react-redux";
import enJson from "../translations/en.json";
import esJson from "../translations/es.json";
import { ConsoleLogger } from "../services/logger.service";

export type LanguageCode = "en" | "es";

export type Translations = {
  strings: typeof enJson;
  currentLanguage: string;
  locale: Locale;
  availableLanguages: typeof availableLanguages;
  setCurrentLanguage: Dispatch<SetStateAction<LanguageCode>>;
};

export const getDefaultLocale = () => {
  const locales = getLocales();
  const langs = Object.keys(availableLanguages);
  const defaultLocale = locales.find((locale) =>
    langs.includes(locale.languageCode)
  );
  return defaultLocale || { languageCode: "en" };
};

const fallbackLocale = getLocales().find(
  (locale) => locale.languageCode === "en"
) as Locale;

const availableLanguages: Record<string, string> = {
  en: "English",
  es: "Spanish  (Español)",
  fr: "French  (Français)",
  de: "German  (Deutsch)",
  ru: "Russian  (Русский)",
  tr: "Turkish  (Türkçe)",
  ar: "Arabic  (العربية)",
  zh: "Chinese  (中文)",
  ja: "Japanese  (日本語)",
  kr: "South Korean  (한국어)",
};

const defaultLanguageCode = "en";

const isValidLanguageCode = (
  languageCode?: string
): languageCode is LanguageCode => {
  if (!languageCode) {
    return false;
  }
  return Object.keys(availableLanguages).includes(languageCode);
};

export const useTranslations = (code?: LanguageCode): Translations => {
  const dispatch = useDispatch();
  // const { defaultLanguage = defaultLanguageCode } =
  //   store?.getState()?.language?.languageConfig;

  const defaultLanguage = useSelector((state) => state.language.languageConfig);

  const [currentLanguage, setCurrentLanguage] = useState(
    defaultLanguage ? defaultLanguage : defaultLanguage
  );

  const strings = defaultLanguage === "es" ? esJson : enJson;

  useEffect(() => {
    setCurrentLanguage(defaultLanguage);
    if (defaultLanguage === "es") {
      moment.locale("es", {
        months: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        monthsShort: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        weekdays: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ],
        weekdaysShort: [
          "Lun",
          "Mar",
          "Mié",
          "Jue",
          "Vie",
          "Sáb",
          "dom",
        ],
      });
    }
  }, [defaultLanguage]);

  useEffect(() => {
    if (isValidLanguageCode(code)) {
      dispatch(languageSlice.actions.setLanguage(code));
    }
  }, [code, dispatch]);

  const currentLocale = getLocales().find(
    ({ languageCode }) => languageCode === currentLanguage
  );
  return {
    strings,
    currentLanguage,
    setCurrentLanguage,
    availableLanguages,
    locale: currentLocale || fallbackLocale,
  };
};

export default useTranslations;
