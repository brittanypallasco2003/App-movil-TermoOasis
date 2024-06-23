import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar, useTheme } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import globalStyles from "../styles/global";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const AvatarUser = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;
  return (
    <Avatar.Icon
      size={isTablet ? scale(118) : scale(135)}
      icon={isDoctor ? "doctor" : "account"}
      //color="#B7D5CF"
      style={[globalStyles.avatarUser,{ backgroundColor: theme.colors.secondary }]}
    />
  );
};

export default AvatarUser;
