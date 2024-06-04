import HighImage from '/images/yasmeen.webp';
import {motion ,useTransform,useViewportScroll} from "framer-motion"

export default function Model() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const {scrollYProgress}=useViewportScroll()
  const scale = useTransform(scrollYProgress,[0,1],[1,1.45])
  const opacity = useTransform(scrollYProgress,[0,1],[1,0])

  return (
    <>
      <div className=" bg-orange-100 w-full h-full flex flex-col gap-10">
        <div className=" z-0">
          <motion.div 
          initial={{
            opacity:0,
            y:50,
          }}
          animate= {{
            opacity:1,
            y:0,
            transition:{
              delay:1,
              duration:0.6,
              
            }
          }}
          style={{opacity:opacity}}
          className=" font-mono text-9xl font-semibold flex gap-16 justify-center mt-36">
            <p >YASMEEN</p>
            <p >SHRESTHA</p>
          </motion.div>
        </div>

        {/* imagePart */}
        <div className=" flex flex-col justify-center items-center overflow-hidden">
          <motion.img
          initial={{            //initial used for making the image appear as in the home section 
            width:"16rem",
            height:"20rem"
          }} 
          animate={{            //animate to scale the image to fit the width of the screen
            width:"100%",
            height: window.innerWidth > 1200 ? 500 : 400,
            transition :{delay: 0.3,...transition},
          }}
          style={{scale:scale}}
          className=" w-full h-1/3 object-cover" src={HighImage} alt="yasmeen image" />
        </div>


        {/* scrolldown part */}
        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1,
          transition:{delay:1.7}
        }}
         className=" text-white font-bold text-xl font-mono absolute top-[90%] left-8">
          scroll Down
        </motion.div>

        {/* discription part */}
        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1,
          transition:{delay:1.7,}
        }}
        className=" flex gap-10 py-16 px-80 ">
          <div className=" w-1/2">
            <p className='text-xl font-bold text-black '>The insiration behind the artwork & <br /> what it means</p>
          </div>
          <div className="w-1/2">
            <p className='text-base  text-black '>Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
          </div>
        </motion.div>
      </div>
    </>
  )
}
