import AsyncStorage from "@react-native-async-storage/async-storage";

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
