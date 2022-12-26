import styles from "../style"
import { arrowUp } from "../assets"


const GetStarted = () => (
  <div className={`${styles.flexCenter} hover:scale-110  duration-500 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`} >
        <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23  px] mr-2">
          <span className="text-gradient">GET</span>
          <img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px] object-contain" />
        </p>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]"><span className="text-gradient">STARTED</span></p>
    </div>
  </div>
)

export default GetStarted