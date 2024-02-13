import { endPoint } from "../../config/endPoint";
import { APIRootService } from "../api/api-root.service";
import { ConsoleLogger } from "../logger.service";

export class TeamService {
  public static memberList = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .get(`${endPoint.memberList}`, formData)
      .then(({ data }) => data);
  };

  public static searchTeamUser = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    ConsoleLogger.log(
      "${endPoint.searchTeamUser}",
      `${endPoint.searchTeamUser}?q=${formData?.q}&limit=${formData?.limit}&page=${formData?.page}`
    );
    return apiInstance
      .get(
        `${endPoint.searchTeamUser}?q=${formData?.q}&limit=${formData?.limit}&page=${formData?.page}`
      )
      .then(({ data }) => data);
  };

  public static addTeamMember = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .post(`${endPoint.addTeamMember}`, formData)
      .then(({ data }) => data);
  };

  public static updateTeamMember = (formData: any) => {
    const teamId = formData?.id;
    const data = {
      percent: formData?.percent,
    };
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .put(`${endPoint.addTeamMember}/${teamId}`, data)
      .then(({ data }) => data);
  };

  public static deleteTeamMember = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    return apiInstance
      .delete(`${endPoint.addTeamMember}/${formData?.id}`)
      .then(({ data }) => data);
  };

  public static allowTeamMember = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    ConsoleLogger.log("Allow Team Data--->", formData);
    return apiInstance
      .put(
        `${endPoint.createEvent}/${organizerId}/events/${eventId}/team/allow`,
        formData?.data
      )
      .then(({ data }) => data);
  };

  public static disAllowTeamMember = (formData: any) => {
    const apiInstance = APIRootService.getAxiosInstance();
    const organizerId = formData?.organizerId;
    const eventId = formData?.eventId;
    return apiInstance
      .delete(
        `${endPoint.createEvent}/${organizerId}/events/${eventId}/team/allow`,
        { data: formData?.data }
      )
      .then(({ data }) => data);
  };
}
