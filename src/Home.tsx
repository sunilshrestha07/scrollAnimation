import { useState } from 'react';
import LowImage from '/images/compressed-image.jpg';
import HighImage from '/images/yasmeen.webp';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

export default function Home() {
  const [isHighImageLoaded, setIsHighImageLoaded] = useState<boolean>(false);
  const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };
  

  return (
    <div className=" ">

      {/* imagePart  */}
      <div className=" flex flex-col items-center bg-orange-100 w-full h-screen  justify-center">
        <Link to="/model">
          <motion.div 
          exit={{transition:{transition}}}
          className=" w-64 h-80  overflow-hidden mt-32 ">
            {!isHighImageLoaded && (
              <img src={LowImage}
              className=' w-full h-full object-cover hover:scale-110 transition delay-75 duration-150 ease-out'
              alt="" />
            )}
            <img src={HighImage} 
            className=' w-full h-full object-cover hover:scale-110 transition delay-75 duration-150 ease-out'
            alt=""  onLoad={()=>setIsHighImageLoaded(true)}/>
          </motion.div>
        </Link>
        <motion.div 
        exit={{opacity:0,transition:{delay:0.1}}}
        className=" flex w-64 justify-between font-mono font-bold">
          <p>Suneel</p>
          <p>9808048030</p>
        </motion.div>
      </div>
    </div>
  );
}
