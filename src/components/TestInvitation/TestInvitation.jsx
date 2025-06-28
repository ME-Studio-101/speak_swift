import "./TestInvitation.css";
import image from "../../Image/TestInvitation/imageTest.png";
import { Link } from "react-router-dom";

export default function TestInvitation() {
  return (
    <section className="testInvitation">
      <div className="testInvitation__main-container">
        <div className="testInvitation__left-part">
          <h2 className="testInvitation__title">
            Онлайн-тест английского языка
          </h2>
          <p className="testInvitation__description">
            Прохождение теста английского - это не только оценка вашего уровня
            владения языком. Это возможность для вас и для вашего наставника
            понять ваши сильные и слабые стороны. Это начало вашего путешествия
            к владению английским языком.
          </p>
          <Link className="testInvitation__button" to="" target="_blank">
            Подробнее
          </Link>
        </div>
        <img className="testInvitation__image" src={image} alt="бегущий)" />
      </div>
    </section>
  );
}
