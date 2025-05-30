import './css/ToggleSwitchButton.css'

export const ToggleSwitchButton = ({isOn, setIsOn}) =>{

    // const [isOn, setIsOn] = useState(false), this useState is lifted up, so use this in parent on it.
    
    // Set Theme cookie
    function setCookie(cname, cvalue, exdays) {
        const date = new Date();
        date.setTime(date.getTime() + (exdays * 24 *60*60*1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    const handleToggleButton = () => {
        if(isOn){
            setCookie("Theme", "Light", "0");
            setIsOn(!isOn)
        } else {
            setCookie("Theme", "Dark", "7");
            setIsOn(!isOn)
        }
    }
    let cookie = document.cookie;
    let cookieValue = cookie.split("=")[1];
    // alert(cookieValue)
  
  if(cookieValue == "Dark"){
    setIsOn(true);
  } else { 
    setIsOn(false)
  }

    return (
    <>
    <div className='grandParent'>
        <div className="parent" style={{backgroundColor: isOn ? "#1919d1" : "#ccc"}} onClick={handleToggleButton}>
            <div className={`child ${isOn ? "on" : "off"}`}></div>
        </div>
        <span>{isOn ? "Dark" : "Light"}</span>
    </div>
    </>
    )
}

// use variable isOn to get the updated value

{/*
Way to use:
Step 1: import { useState } from 'react'
Step 2: const [isOn, setIsOn] = useState(false), this useState is lifted up, so use this in parent body on it.
Step 3: import { ToggleSwitchButton } from '../components/ToggleSwitchButton' 
Step 4: <ToggleSwitchButton isOn={isOn} setIsOn={setIsOn} /> 
Step 5: use variable isOn to get the updated value and use it when and where needed
*/}