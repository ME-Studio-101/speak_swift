import "./Universal.css";
import uni from "../../Image/Universal/Universal.png";
import item1 from "../../Image/Universal/item1.svg";
import item2 from "../../Image/Universal/item2.svg";
import item3 from "../../Image/Universal/item3.svg";
import item4 from "../../Image/Universal/item4.svg";
import item5 from "../../Image/Universal/item5.svg";

export default function Universal() {
  return (
    <section className="universal">
      <div className="universal__main-container">
      <div className="universal__text-container">
        <h2 className="universal__title">
          Преимущества{" "}
          <span className="universal__title-span">"Уникальной методики"</span>
        </h2>
        <p className="universal__paragraf">
          Наша методика изучения английского языка базируется на коммуникативной
          системе преподавания, что является её ключевым преимуществом. Этот
          подход позволяет студентам не просто изучать грамматические правила и
          лексику, но и активно практиковать язык в реальных жизненных
          ситуациях.
        </p>
      </div>
      <div className="universal__list-container">
        <img className="universal__image" src={uni} alt="баннер" />
        <ul className="universal__list">
          <li className="universal__item">
            <img className="universal__item-image universal__item-image1" src={item1} alt="иконка" />
            <div className="universal__item-container">
              <h3 className="universal__item-title">Коммуникативный подход</h3>
              <p className="universal__item-text">
                Наша методика обучения английскому языку основана на
                коммуникативной системе, что позволяет ученикам практиковать
                язык в реальных ситуациях, развивая навыки общения, понимания и
                произношения.
              </p>
            </div>
          </li>

          <li className="universal__item">
            <img className="universal__item-image universal__item-image2" src={item2} alt="иконка" />
            <div className="universal__item-container">
              <h3 className="universal__item-title">
                Полное погружение в языковую среду
              </h3>
              <p className="universal__item-text">
                Погружение в языковую среду - наш ключ к эффективному обучению.
                Студенты окружены английским языком, что способствует
                естественному усвоению и пониманию.
              </p>
            </div>
          </li>

          <li className="universal__item">
            <img className="universal__item-image universal__item-image3" src={item3} alt="иконка" />
            <div className="universal__item-container">
              <h3 className="universal__item-title">
                Активное использование языка
              </h3>
              <p className="universal__item-text">
                Студенты не просто изучают, они активно используют английский
                язык, участвуя в дискуссиях, проектах и ролевых играх, что
                улучшает их языковые навыки.
              </p>
            </div>
          </li>

          <li className="universal__item">
            <img className="universal__item-image universal__item-image4" src={item4} alt="иконка" />
            <div className="universal__item-container">
              <h3 className="universal__item-title">
                Современные образовательные технологии
              </h3>
              <p className="universal__item-text">
                Мы интегрируем современные образовательные технологии в процесс
                обучения, включая мультимедийные материалы и интерактивные
                платформы, для обогащения опыта обучения.
              </p>
            </div>
          </li>

          <li className="universal__item">
            <img className="universal__item-image universal__item-image5" src={item5} alt="иконка" />
            <div className="universal__item-container">
              <h3 className="universal__item-title">Индивидуальный подход</h3>
              <p className="universal__item-text">
                Индивидуальный подход к каждому студенту гарантирует, что
                учебная программа адаптируется под личные нужды и скорость
                обучения, максимизируя эффективность обучения.
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}
