import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { RFValue } from "../Utils/RFValueData";
let isTablet = DeviceInfo.isTablet()
let getModal=DeviceInfo.getModel()
let build=DeviceInfo.getBuildNumber()
let buildVersion=DeviceInfo.getVersion()

export const fonts = {
  R_BLACK: "Roboto-Black",
  R_BOLD: "Roboto-Bold",
  R_LIGHT: "Roboto-Light",
  R_MEDIUM: "Roboto-Medium",
  R_REGULAR: 'Roboto-Regular',
  N_BOLD: 'NotoSans-Bold',
  N_NORMAL: 'NotoSans-Regular',
  ARCHI_NORMAL:'ArchitectsDaughter-Regular',
  FONT_8: RFValue(9),
  FONT_10: RFValue(10),
  FONT_12: RFValue(12),
  FONT_14: RFValue(14),
  FONT_16: RFValue(16),
  FONT_18: RFValue(18),
  FONT_20: RFValue(20),
  FONT_22: RFValue(22),
  FONT_25: RFValue(25),
  FONT_26: RFValue(26),
  FONT_32: RFValue(30),
  
  IS_TABLET: isTablet,
  IS_IOS: Platform.OS == 'ios',
  GET_MODAL:getModal,
  DEVICE_OS:Platform.Version,
  BUILD:build,
  BUILD_VERSION:buildVersion
}
