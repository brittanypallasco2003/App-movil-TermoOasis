import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar, useTheme } from "react-native-paper";
import { scale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const AvatarUser = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;
  return (
    <Avatar.Icon
      size={isTablet? scale(118):scale(160)}
      icon={isDoctor ? "doctor" : "account"}
      style={{ backgroundColor: theme.colors.primaryContainer }}
    />
  );
};

export default AvatarUser;
