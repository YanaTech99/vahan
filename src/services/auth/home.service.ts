import { endPoint } from "../../config/endPoint";
import store from "../../store/store";
import { APIRootService } from "../api/api-root.service";
import { ConsoleLogger } from "../logger.service";

export class HomeService {
  public static homeStats = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.homeStats}`, formData)
      .then(({ data }) => data);
  };

  public static getEventList = (formData: any) => {
    ConsoleLogger.log("<---getEventList---> ", formData);
    const id =
      store.getState().organizerSlice.organizerConfig?.organizers[0]?.id;

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.homePage}`, {
        params: formData,
      })
      .then(({ data }) => data);
  };

  public static getEventDetails = (formData: any) => {
    ConsoleLogger.log("<---getEventDetails---> ", formData);

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(
        `${endPoint.createEvent}/${formData?.organizationId}/events/${formData?.eventId}`
      )
      .then(({ data }) => data)
      .catch((error) => error);
  };

  public static getEventPayout = (formData: any) => {
    ConsoleLogger.log("<---getEventDetails---> ", formData);

    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(
        `${endPoint.createEvent}/${formData?.organizationId}/events/${formData?.eventId}/payout`
      )
      .then(({ data }) => data);
  };

  public static getLiveEventSales = (formData: any) => {
    ConsoleLogger.log(
      "${endPoint.liveEventSale}/${formData?.eventId}/sales",
      `${endPoint.liveEventSale}/${formData?.eventId}/sales`
    );
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.liveEventSale}/${formData?.eventId}/sales`)
      .then(({ data }) => data);
  };

  public static getLiveEventSalesOrders = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.liveEventSale}/${formData?.eventId}/sales/orders`)
      .then(({ data }) => data);
  };

  public static getLiveEventSalesOrderDetails = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(
        `${endPoint.liveEventSale}/${formData?.eventId}/sales/orders/${formData?.orderId}`
      )
      .then(({ data }) => data);
  };
}
