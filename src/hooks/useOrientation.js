
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';

const useOrientation = () => {
    const [screenOrientation, setScreenOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP)
    
    useEffect(() => {

        const onOrientationChange=(currentOrientation)=>{
            const orientationValue=currentOrientation.orientationInfo.orientation
            setScreenOrientation(orientationValue)
        }
        
        const initScreenOrientation = async() => {
            const currentOrientation=await ScreenOrientation.getOrientationAsync()
        }
        

        const screenOrientationListener =ScreenOrientation.addOrientationChangeListener(onOrientationChange)
        
    }, [third])
    
}

export default useOrientation


