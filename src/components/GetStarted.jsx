import styles from "../style";
import React from "react";

const GetStarted = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <div 
    className="apply-button" 
    data-hackathon-slug="ur-hackathon-2" 
    data-button-theme="dark-inverted"
  ></div>
    )
  };

export default GetStarted;
