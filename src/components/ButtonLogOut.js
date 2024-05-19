import React,{useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
import { Button } from 'react-native-paper'
const ButtonLogOut = () => {
    const { cerrarSesion} = useContext(AuthContext);
  return (
    <Button
    icon={'logout'}
    onPress={() => cerrarSesion()}>
    </Button>
  )
}

export default ButtonLogOut