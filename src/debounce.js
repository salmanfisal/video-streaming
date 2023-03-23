import React,{useState,useEffect} from 'react';
 const Debounce=(value,delay=1000)=>{
    const[debounce,setdebounce]=useState(value);
    useEffect(()=>{
    const timer = setTimeout(() => {
        setdebounce(value)
    }, delay);
    return ()=>{
        clearTimeout(timer);
    }
},[value,delay])

return debounce;
}
export default Debounce;
