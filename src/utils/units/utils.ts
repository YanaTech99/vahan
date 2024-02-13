import NetInfo from "@react-native-community/netinfo";
import moment from "moment";
import { ConsoleLogger } from "../../services/logger.service";
import { Platform } from "react-native";
import { useEffect, useState } from "react";

const checkInternetConnection = async () => {
  return NetInfo.fetch().then((state) => {
    return state.isInternetReachable;
  });
};

const eventDateFormate = (eventDate: Date) => {
  return moment(eventDate).format("ddd, MMM D");
};

export const eventDateFormatePreview = (eventDate: string, endDate: string) => {
  ConsoleLogger.log(
    "eventDateFormatePreview ----> ",
    eventDate,
    " \n ",
    endDate
  );
  if (endDate === null) {
    return `${moment(eventDate).format("ddd, MMM D")}`;
  } else {
    return `${moment(eventDate).format("ddd, MMM D")} - ${moment(
      endDate
    ).format("ddd, MMM D")}`;
  }
};

const eventTimeFormate = (eventTime: Date) => {
  return moment(eventTime, "YYYY-MM-DD hh:mm a").format("hh:mm A");
};

export const eventDateSaveFormate = (eventDate: Date) => {
  return moment(eventDate).format("YYYY-MM-DD");
};

export const eventTimeSaveFormate = (eventTime: Date) => {
  return moment(eventTime).format("HH:mm:ss");
};

export const eventDayFormate = (dateString: string) => {
  const myDate = moment(dateString).format("DD-MM-YYYY");
  var todayDate = moment().format("DD-MM-YYYY");
  if (myDate === todayDate) {
    return "Today";
  } else {
    return moment(dateString).format("ddd").toString();
  }
};

export const eventMonthFormate = (dateString: string) => {
  return moment(dateString).format("MMM DD").toString();
};

export const eventTimeString = (dateString: string) => {
  return moment(dateString).format("h:mm A").toString();
};

export const eventTeamDateFormate = (dateString: string) => {
  return moment(dateString, "YYYY-MM-DD").format("MM/DD/YYYY").toString();
};

export const setFontSize = (count: number) => {
  if (Platform.OS === "android") {
    return count - 2;
  } else {
    return count;
  }
};

export { checkInternetConnection, eventDateFormate, eventTimeFormate };
