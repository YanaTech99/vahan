import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import {
  AppInitialConfig,
  AppTokenConfig,
} from "../store/app.config.interface";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../store/slice/UserSlice";
import NavigationService from "../navigation/NavigationService";
import { ConsoleLogger } from "../services/logger.service";
import { APIRootService } from "../services/api/api-root.service";
import store from "../store/store";
import { configAxios } from "../services";
import languageSlice from "../store/slice/LanguageSlice";

type AuthStatus = "idle" | "loading" | "success" | "error";

export type AuthContextValue = {
  isLoading: boolean;
  isLoggedIn: boolean;
  status: AuthStatus;
  saveUserData: (data: any) => void;
  onLogin: (auth: any) => void;
  onLogout: () => void;
  onLoginHome?: () => void | undefined;
  language?: String;
  isBiometrics?: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
  isLoading: false,
  isLoggedIn: false,
  status: "idle",
  language: "en",
  onLogin() {},
  saveUserData() {},
  onLogout() {},
  onLoginHome() {},
  isBiometrics: false,
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { getItem, removeItem, setItem } = useAsyncStorage("@user_data");
  const defaultLanguage = useSelector((state) => state.language.languageConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [status, setStatus] = useState<AuthStatus>("idle");
  const [language, setLanguage] = useState(defaultLanguage);
  const [isBiometrics, setisBiometrics] = useState<boolean>(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    setStatus("loading");
    getItem()
      .then((userProfile) => {
        console.log("[AUTH]: success: 1", userProfile);
        setStatus("success");
        if (userProfile) {
          const userData = JSON.parse(userProfile);
          const appConfig: AppInitialConfig = {
            isLogin: true,
            token: userData?.token.token,
            userId: userData.id,
            username: userData.username,
            userData: userProfile,
            language: userData?.language ? userData?.language : language,
            isBiometrics: userData?.isBiometrics,
          };
          setisBiometrics(
            userData?.isBiometrics === undefined
              ? false
              : userData?.isBiometrics
          );
          setUserData(JSON.parse(userProfile));
          dispatch(userSlice.actions.setUser(appConfig));
          ConsoleLogger.log("User Data ---> ", appConfig);
          APIRootService.addAuthHeader();
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((e) => {
        setStatus("error");
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleLogin = (auth?: any) => {
    const appConfig: AppInitialConfig = {
      isLogin: true,
      token: auth.token.token,
      userId: auth.id,
      username: auth.username,
      userData: auth,
      language: language,
      isBiometrics: isBiometrics,
    };
    auth = { ...auth, language: language, isBiometrics: false };
    //setIsLoggedIn(true);
    ConsoleLogger.log("handleLogin---> ", auth);
    console.info("LoggedIn successfully.");
    setItem(JSON.stringify(auth));
    dispatch(userSlice.actions.setUser(appConfig));
    APIRootService.addAuthHeader();
    NavigationService.navigate("WelcomeBack", { username: auth.username });
  };

  const saveUserData = (data: any) => {
    setUserData(data);
    setItem(JSON.stringify(data));
  };

  const handleLogout = () => {
    removeItem();
    setIsLoggedIn(false);
    console.info("LoggedOut successfully.");
  };

  const handleHomePageLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        status,
        language,
        saveUserData,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onLoginHome: handleHomePageLogin,
        isBiometrics,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
