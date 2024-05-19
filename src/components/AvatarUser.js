import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar, useTheme } from "react-native-paper";
const AvatarUser = () => {
    const theme = useTheme();
    const { infoUsuariObtenida } = useContext(AuthContext);
    const { isDoctor } = infoUsuariObtenida;
  return <Avatar.Icon size={170} icon={isDoctor?'doctor':'account'} style={{backgroundColor:theme.colors.primaryContainer}}/>;
};

export default AvatarUser;
