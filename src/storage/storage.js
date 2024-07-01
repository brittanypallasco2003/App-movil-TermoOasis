import AsyncStorage from "@react-native-async-storage/async-storage";


export const guardarCitasStorage = async(citas) => {
    try {
        await AsyncStorage.setItem('citasPaciente',JSON.stringify(citas))
    } catch (error) {
        console.log(error)    
    }
}


export const eliminarCitaStorage=async()=>{
try {
    await AsyncStorage.removeItem('citasPaciente')
} catch (error) {
 console.log('el elemento aún no se encuentra en storage')  
}
}