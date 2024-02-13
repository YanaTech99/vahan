import { Platform } from "react-native";
import { endPoint } from "../../config/endPoint";
import { APIRootService } from "../api/api-root.service";
import { APIConstants } from "../api/api-endpoints.constants";
import axios from "axios";
import store from "../../store/store";
import { ConsoleLogger } from "../logger.service";

export class HelpService {
  public static getPrivacyPolicy = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.privacy_policy}`)
      .then(({ data }) => data);
  };
  public static getTermOfService = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.privacy_policy}`)
      .then(({ data }) => data);
  };
  public static contactUs = async (formData: any) => {
    ConsoleLogger.log("contactUs--->", formData);
    const imageData = new FormData();

    const formImageData = {
      uri:
       formData?.file?.path,
      name:
        Platform.OS === "ios"
          ? formData?.file?.filename
          : `${new Date().getTime()}.${formData?.file?.mime.split("/")[1]}`,
      type: formData?.file?.mime,
    };

    if (formData?.file) {
      imageData.append("file", formImageData);
      imageData.append("message", formData?.message);
      imageData.append("category", formData?.category);
    } else {
      imageData.append("message", formData?.message);
      imageData.append("category", formData?.category);
    }

    const url = `${APIConstants.BASE_URL}${APIConstants.Version.V1}help/contact-us`;

    ConsoleLogger.log("contactUs--->", url);
    ConsoleLogger.log("contactUs--->", imageData);

    return await axios
      .post(url, imageData, {
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data`,
          "x-api-key": store.getState().users.appConfig?.token,
        },
      })
      .then((data) => data)
      .catch((error) => error);
  };
}
