import { useState, useEffect } from "react";

export const useVisible = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  handleAnimation = () => {       
    if (document.documentElement.scrollTop > 50) {           
     setIsVisible(true);  
   };

    useEffect(() => {
        window.onscroll = () => handleAnimation();
    
    return (isVisible);

};