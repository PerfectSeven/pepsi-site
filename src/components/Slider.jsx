import React, { useState, useEffect } from "react";

function Slider() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/can.jpeg",
     "/images/sizes.jpg", 
     
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return(
<>
<img src= {images[index]} alt={"Sliding-can${index}"}></img>
</>
  )
}
export default Slider;