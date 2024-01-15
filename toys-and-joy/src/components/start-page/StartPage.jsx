import waterpistol from "../../assets/startPage-img/waterpistol.png";
import trampoline from "../../assets/startPage-img/trampoline.png";
import "./startPage.css";
import fångabollen from "../../assets/images/fångabollen.jpeg";
import kastspelRing from "../../assets/images/kastspelRing.jpeg";
const StartPage = () => {
  //  const resizeImage = {
  //    width: '400px',
  //    height: '300px',
  //    objectFit: 'fill'
  // }

  return (
    <section>
      <div className="slider-pic container">
        <div className="slides">
          <div className="radio-btn">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
          </div>
          <div className="image-slider">
            <img src={waterpistol} alt="waterpistol" className="water-pistol" />
            <p className="water-pistol-d1">
              Grab your water pistol online and turn any day into a water-filled
              adventure! Stay cool and have a blast with our latest collection.
            </p>
            <button className="landing-btn">Beställ den</button>
          </div>
          {/* <div className="image-slider">
            <img src={trampoline} alt="trampoline" style={resizeImage} />
          </div> */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1"></label>
            <label htmlFor="radio2"></label>
            <label htmlFor="radio3"></label>
            <label htmlFor="radio4"></label>
          </div>
        </div>
      </div>
      <div className="mid-landing">
        <p className="mid-land-txt"> Här är det rea </p>
          <div className="mid-img">
            <img src={fångabollen} alt="fånga-bollen" className="test" />
            <img src={kastspelRing} alt="kastsåel-ring" className="test" />
          </div>

      </div>
    </section>
  );
};

export default StartPage;
