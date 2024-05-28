import AsyncStorage from "@react-native-async-storage/async-storage";

export const obtenerTokenStorage =async()=>{
try {
    const tokenStorage = await AsyncStorage.getItem("userToken");
    return tokenStorage
} catch (error) {
    
}
}

export const guardarCitasStorage = async(citas) => {
    try {
        await AsyncStorage.setItem('citasPaciente',JSON.stringify(citas))
    } catch (error) {
        console.log(error)    
    }
}

export const obtenerCitasStorage=async()=>{
    try {
        const citasS= await AsyncStorage.getItem('citasPaciente')
        return citasS
    } catch (error) {
        console.log(error)
    }
}

export const eliminarCitaStorage=async()=>{
try {
    await AsyncStorage.removeItem('citasPaciente')
    console.log('me eliminó')
} catch (error) {
 console.log('el elemento aún no se encuentra en storage')  
}
}