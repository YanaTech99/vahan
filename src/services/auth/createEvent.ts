import { getTimeZone } from "react-native-localize";
import { endPoint } from "../../config/endPoint";
import { APIRootService } from "../api/api-root.service";
import { ConsoleLogger } from "../logger.service";
import { numberIllustrationIcon } from "../../theme/icons";
import axios, { Axios } from "axios";
import store from "../../store/store";
import { APIConstants } from "../api/api-endpoints.constants";
import { Platform } from "react-native";

export class CreateEventService {
  public static getOrganizer = () => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance.get(`${endPoint.organizers}`).then(({ data }) => data);
  };

  public static createEvent = (formData: any) => {
    const organizerId = formData?.organizerId;
    const params = { name: formData?.eventTitle };
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.createEvent}/${organizerId}/events`, params)
      .then(({ data }) => data);
  };

  public static updateEvent = (formData: any) => {
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    var params = null;
    if ("eventTitle" in formData) {
      params = {
        name: formData?.eventTitle,
      };
    }
    if ("eventDesc" in formData) {
      params = {
        description: formData?.eventDesc,
      };
    }
    if ("startDate" in formData) {
      let endDate = "";
      if (formData?.endDate != null) {
        endDate = `${formData?.endDate}T${formData?.endTime}Z`;
      }
      params = {
        tz: getTimeZone(),
        start: `${formData?.startDate}T${formData?.startTime}Z`,
        end: endDate,
      };
    }
    if ("ticketList" in formData) {
      if (formData?.ticketUpdate) {
        params = {
          tickets: formData?.ticketList,
          refundPolicy: formData?.noRefund ? "noRefund" : "48H",
        };
      } else {
        params = {
          refundPolicy: formData?.noRefund ? "noRefund" : "48H",
        };
      }
    }
    if ("venue" in formData) {
      params = {
        venue: formData?.venue,
      };
    }
    if ("selectedMember" in formData) {
      const teamArry = [];
      const selectedMember = formData?.selectedMember;
      for (let index = 0; index < selectedMember?.length; index++) {
        const element = selectedMember[index]?.id;
        teamArry.push(element);
      }

      params = {
        team: teamArry,
      };
    }

    ConsoleLogger.log(
      " Update Data---> ",
      params,
      "\nForm Data ----> ",
      formData
    );

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .put(`${endPoint.createEvent}/${organizerId}/events/${eventId}`, params)
      .then(({ data }) => data)
      .catch(({ error }) => error);
  };

  public static publishEvent = (formData: any) => {
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    ConsoleLogger.log(
      "Publish Api Url Is---->",
      `${endPoint.createEvent}/${organizerId}/events/${eventId}`
    );
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.createEvent}/${organizerId}/events/${eventId}`)
      .then(({ data }) => data);
  };

  public static uploadCoverImage = async (formData: any) => {
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    const imageData = new FormData();

    // let imageArray = [];
    // let formImageData = {};
    // for (let index = 0; index < formData?.file?.length; index++) {
    //   formImageData = {
    //     uri: formData?.file[index]?.sourceURL,
    //     name: formData?.file[index]?.filename,
    //     type: formData?.file[index]?.mime,
    //   };
    //   imageArray.push(formImageData);
    // }

    const formImageData = {
      uri: formData?.file?.path,
      name:
        Platform.OS === "ios"
          ? formData?.file?.filename
          : `${new Date().getTime()}.${formData?.file?.mime.split("/")[1]}`,
      type: formData?.file?.mime,
    };

    imageData.append("files", formImageData);

    ConsoleLogger.log("Event Cover Pic Uploading----> ", formImageData);

    //const apiInstance = APIRootService.getAxiosInstance();
    const url = `${APIConstants.BASE_URL}${endPoint.createEvent}/${organizerId}/events/${eventId}/cover`;

    ConsoleLogger.log("Event Cover Pic Uploading----> ", url);

    return await axios
      .patch(url, imageData, {
        headers: {
          accept: "application/json",
          "Content-Type": `multipart/form-data`,
          "x-api-key": store.getState().users.appConfig?.token,
        },
      })
      .then((data) => data)
      .catch((error) => error);
  };

  public static scanTicket = (formData: any) => {
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    ConsoleLogger.log(
      "Scan Ticket Api Url Is---->",
      `${endPoint.createEvent}/${organizerId}/events/${eventId}/tickets/scan`
    );
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(
        `${endPoint.createEvent}/${organizerId}/events/${eventId}/tickets/scan`,
        { ticketId: formData?.ticketId }
      )
      .then(({ data }) => data);
  };

  public static deleteEvent = (formData: any) => {
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;

    ConsoleLogger.log(
      "Delete Api Url ----> ",
      `${endPoint.createEvent}/${organizerId}/events/${eventId}`
    );

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .delete(`${endPoint.createEvent}/${organizerId}/events/${eventId}`)
      .then(({ data }) => data)
      .catch(({ error }) => error);
  };

  public static updateOrganizationToEvent = (formData: any) => {
    const eventId = formData?.eventId;
    const apiInstance = APIRootService.getAxiosInstance();

    return apiInstance
      .patch(`${endPoint.updateOrganization}/${eventId}/live`, {
        org_id: formData?.organizerId,
      })
      .then(({ data }) => data);
  };

  public static updateTicketEvent = (formData: any) => {
    const eventId = formData?.eventId;
    const ticketId = formData?.ticketId;
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .patch(
        `${endPoint.updateOrganization}/${eventId}/tickets/${ticketId}`,
        formData?.ticketParam
      )
      .then(({ data }) => data);
  };

  public static createTicketEvent = (formData: any) => {
    const eventId = formData?.eventId;
    const apiInstance = APIRootService.getAxiosInstance();

    const params = {
      name: formData?.ticketParam?.name,
      numOfTickets: formData?.ticketParam?.numOfTickets,
      price: formData?.ticketParam?.price,
      description: formData?.ticketParam?.description,
      perOrder: {
        min: formData?.ticketParam?.perOrder?.min,
        max: formData?.ticketParam?.perOrder?.max,
      },
    };
    return apiInstance
      .post(`${endPoint.updateOrganization}/${eventId}/tickets`, params)
      .then(({ data }) => data);
  };

  public static attendantList = (formData: any) => {
    ConsoleLogger.log("attendantList--->", formData);
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.attendantList}/${formData?.eventId}/attendant`, {
        params: formData?.data,
      })
      .then(({ data }) => data);
  };

  public static attendantTicketList = (formData: any) => {
    ConsoleLogger.log("attendantTicketList--->", formData);
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(
        `${endPoint.attendantList}/${formData?.eventId}/attendant/${formData?.attendantId}/tickets`,
        {
          params: formData?.data,
        }
      )
      .then(({ data }) => data);
  };

  public static attendantTicketScan = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(
        `${endPoint.attendantList}/${formData?.eventId}/attendant/${formData?.attendantId}/tickets/${formData?.ticketId}`
      )
      .then(({ data }) => data);
  };

  public static attendantTicketRemove = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .delete(
        `${endPoint.attendantList}/${formData?.eventId}/attendant/${formData?.attendantId}/tickets/${formData?.ticketId}`
      )
      .then(({ data }) => data);
  };
}
