import heroImage from "./image-intro-desktop.jpg";
import leftPattern from "./bg-pattern-intro-left-desktop.svg"
import rightPattern from "./bg-pattern-intro-right-desktop.svg"

function HeroOne() {
  return (
    <div id="HeroOne">
        <img src={leftPattern} />
        <img src={rightPattern} />
        <div className="text">
            <div className="line">.</div>

            <h1>Humanizing your insurance.</h1>

            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>

            <a>View Plans</a>
        </div>

        <img src={heroImage} />
    </div>
  )
}

export default HeroOne