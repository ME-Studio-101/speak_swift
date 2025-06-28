import "./Landing.css";
import line from "../../Image/LandingImage/Vector 14.png";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-main">
        <div className="landing__title-container">
          <h1 className="landing__title">
            {" "}
            we are speak <span className="landing__title-span">swift</span>
          </h1>
          <img className="line" src={line} alt="галка" />
        </div>
        <p className="landind__description">
          Откройте мир английского с{" "}
          <strong className="landind__description-span">онлайн-школой</strong>{" "}
          Speakswift. <br />
          Видеть свой прогресс - лучшая мотивация на пути к совершенству.
        </p>
        <button className="landing__button">Записаться Бесплатно</button>
      </div>
    </section>
  );
}
