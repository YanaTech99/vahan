import axios from "axios";
import { endPoint } from "../../config/endPoint";
import { APIRootService } from "../api/api-root.service";
import { ConsoleLogger } from "../logger.service";
import store from "../../store/store";
import { APIConstants } from "../api/api-endpoints.constants";
import { Alert, Platform } from "react-native";

export class OrganizationService {
  public static getOrganizationList = () => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance.get(`${endPoint.createEvent}`).then(({ data }) => data);
  };

  public static createOrganization = (formData: any) => {
    const data = formData?.formData;

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.createEvent}`, data)
      .then(({ data }) => data);
  };

  public static updateOrganization = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    const id = formData?.id;
    const updateData = formData?.formData;

    ConsoleLogger.log(
      "Update Organization ----> ",
      updateData,
      " formData -> ",
      formData
    );
    ConsoleLogger.log(
      " update Organization Edit ----> ",
      `${endPoint.createEvent}/${id}`
    );

    return apiInstance
      .put(`${endPoint.createEvent}/${id}`, updateData)
      .then(({ data }) => data);
  };

  public static uploadCoverImage = async (formData: any) => {
    const imageData = new FormData();
    const formImageData = {
      uri: formData?.file?.path,
      name:
        Platform.OS === "ios"
          ? formData?.file?.filename
          : `${new Date().getTime()}.${formData?.file?.mime.split("/")[1]}`,
      type: formData?.file?.mime,
    };
    ConsoleLogger.log("formImageData : ---> ", formImageData);
    imageData.append("files", formImageData);
    const url = `${APIConstants.BASE_URL}${endPoint.uploadOrganizerDp}/${formData?.id}/cover`;

    ConsoleLogger.log("Image Upload Url : --->", url);

    return await axios
      .patch(`${url}`, imageData, {
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data`,
          "x-api-key": store.getState().users.appConfig?.token,
        },
      })
      .then((data) => {
        ConsoleLogger.log("data?.data cover image org page ---> ", data?.data);
        return data;
      })
      .catch((error) => {
        ConsoleLogger.log(
          "cover image uplaoding error -> ",
          JSON.stringify(error)
        );
        return error;
      });
  };

  public static uploadDPImage = async (formData: any) => {
    const imageData = new FormData();
    const formImageData = {
      uri: formData?.file?.path,
      name:
        Platform.OS === "ios"
          ? formData?.file?.filename
          : `${new Date().getTime()}.${formData?.file?.mime.split("/")[1]}`,
      type: formData?.file?.mime,
    };

    imageData.append("files", formImageData);
    const url = `${APIConstants.BASE_URL}${endPoint.uploadOrganizerDp}/${formData?.id}/dp`;

    ConsoleLogger.log("Image Upload Url : --->", formImageData);

    return await axios
      .patch(`${url}`, imageData, {
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data`,
          "x-api-key": store.getState().users.appConfig?.token,
        },
      })
      .then((data) => data)
      .catch((error) => error);
  };

  public static getOrganizationEventList = (formData: any) => {
    const organizationsId = formData.id;
    const apiInstance = APIRootService.getAxiosInstance();
    ConsoleLogger.log(
      " Get Organization Profile Event List----> ",
      `${endPoint.organizationsEventList}/${organizationsId}/events?filter=all`
    );
    return apiInstance
      .get(
        `${endPoint.organizationsEventList}/${organizationsId}/events?filter=live`
      )
      .then(({ data }) => data);
  };

  public static deleteOrganization = (formData: any) => {
    const orgId = formData?.id;
    ConsoleLogger.log(" Delete Organization ----> ", orgId);
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .delete(`${endPoint.organizationsEventList}/${orgId}`)
      .then((data) => data);
  };

  public static getOrganizationDetail = (id: string) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.organizationsEventList}/${id}`)
      .then(({ data }) => data);
  };
}
