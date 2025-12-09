import ActionButtons from "./ActionButtons"
import checkmark from "../../public/assets/images/check-check.png";

export default function HeroSection() {
  return (
    <div className="text-white flex mt-40 justify-around">
        <div>
          <h1 className="text-6xl font-nature pb-2">Scoring, Simplified.</h1>
          <p className="text-xl flex font-nature-light pb-5">We handle the score, so you can focus on your game.</p>
          <ActionButtons />
        </div>
        <div>
          <img src={checkmark} alt="" className="w-40 h-40" />
        </div>
    </div>
  )
}