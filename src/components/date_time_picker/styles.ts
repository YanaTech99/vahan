import { StyleSheet } from "react-native";
import CommonColors from "../../constants/Colors";
import { SizeMeasurements } from "../sizeMeasurement.styles";

export default StyleSheet.create({
  buttonStyle: {
    height: SizeMeasurements.HEIGHT40.height,
    width: SizeMeasurements.WIDTH280.width,
    backgroundColor: CommonColors.APP_BLUE,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: SizeMeasurements.HEIGHT20.height,
  },
  titleStyle: {
    fontSize: 14,
    color: CommonColors.WHITE,
    fontWeight: "bold",
  },
});
