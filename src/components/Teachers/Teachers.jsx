import "./Teachers.css";
import ilona from "../../Image/Teachers/ilona.jpg";
import ekaterina from "../../Image/Teachers/ekaterina.jpg";
import arina from "../../Image/Teachers/arina.jpg";
import margarita from "../../Image/Teachers/margarita.jpg";
import mengli from "../../Image/Teachers/mengli.jpg";
import TeacherCard from "../TeacherCard/TeacherCard";

export default function Teachers() {
  return (
    <section className="teachers">
      <div className="teachers__main-header">
        <h2 className="teachers__title">
          Наши
          <span className="teachers__title-span"> преподаватели</span>
        </h2>
        <p className="teachers__description">
          Наши опытные наставники готовы подарить вам увлекательное погружение в
          мир английского, делая обучение легким, интересным и результативным
        </p>
      </div>

      <ul className="teachers__list">
        <li className="teachers__item">
          <TeacherCard
            src={ilona}
            alt="Илона"
            name="Илона Манчак"
            profession="Основатель SpeakSwift, Преподаватель"
            description="Помимо моей большой любви к преподаванию английского, моя любовь к путешествиям дополняет методику обучения, так что я действительно знаю что такое РЕАЛЬНЫЙ АНГЛИЙСКИЙ, делая уроки увлекательными и практичными. Мои студенты ценят не только экспертность, но и энтузиазм, с которым подхожу к преподаванию."
          />
        </li>

        <li className="teachers__item">
          <TeacherCard
            src={ekaterina}
            alt="Екатерина"
            name="Екатерина Круглик"
            profession="Преподаватель"
            description="Со мной ты полюбишь Английский! Считаю, что благодаря сериалам в оригинале можно лучше понять английскую речь и улучшить не только свой словарный запас, но и произношение. Поэтому активно применяю эту методику в занятиях."
          />
        </li>

        <li className="teachers__item">
          <TeacherCard
            src={arina}
            alt="Арина"
            name="Арина Предченко"
            profession="Преподаватель"
            description="Мой приоритет в работе помочь ученикам поверить в свои силы и достичь желаемых результатов. Я уделяю равное внимание всем аспектам языка. Искренне считаю, что изучая иностранный язык, мы лучше узнаем и совершенствуем себя"
          />
        </li>

        <li className="teachers__item">
          <TeacherCard
            src={margarita}
            alt="Маргарита"
            name="Маргарита"
            profession="Преподаватель"
            description="Мне нравится делиться знаниями и помогать людям открывать для себя мир английского. Почему английский язык крутой: Английский – это не только международный язык общения, но и ключ к множеству возможностей. Он открывает двери к новым знаниям, культуре и карьере. Я верю, что изучение английского языка может изменить жизнь, и стараюсь сделать уроки увлекательными и полезными."
          />
        </li>

        <li className="teachers__item">
          <TeacherCard
            src={mengli}
            alt="Менгли"
            name="Менгли"
            profession="Преподаватель"
            description="Помимо проведения занятий, я увлекаюсь рисованием! Люблю выйти вечерком с блокнотом и поскетчить🥰 Знание английского языка открывает сотню дверей в нашем мире, будь то обучение за границей или карьера в иностранной компании. Навык владения английским высоко ценится 🔥"
          />
        </li>
      </ul>
    </section>
  );
}
