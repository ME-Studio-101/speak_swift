import React, { useRef, useState, useEffect } from 'react';
import "./Lessons.css";
import LessonCard from "../LessonCard/LessonCard";
import lesson1 from "../../Image/LessonCards/lesson1.png";
import lesson2 from "../../Image/LessonCards/lesson2.png";
import lesson3 from "../../Image/LessonCards/lesson3.png";
import lesson4 from "../../Image/LessonCards/lesson4.png";
import left from "../../Image/LessonCards/leftButton.svg"

export default function Lessons() {
  const listRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = listRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = listRef.current;
    if (!el) return;
    const card = el.querySelector('.lessons__item');
    const gap = 24; // как в css
    const cardWidth = card ? card.offsetWidth + gap : 200;
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="lessons">
      <div className="lessons__main-header">
        <h2 className="lessons__title">
          Доступные форматы{" "}
          <span className="lessons__title-span">занятий</span>
        </h2>
        <div className="lessons__button-box">
          <button
            className="lessons__button lessons__button_left"
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
          >
            <img className="lessons__left-btn" src={left} alt="стрелка"/>
          </button>
          <button
            className="lessons__button lessons__button_right"
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
          >
            <img className="lessons__right-btn" src={left} alt="стрелка"/>
          </button>
        </div>
      </div>
      <ul className="lessons__list" ref={listRef}>
        <li className="lessons__item">
          <LessonCard
            src={lesson1}
            alt="планшетка"
            header="Индивидуальные занятия"
            description="Научитесь свободно говорить и понимать, прокачайте грамматику английского языка и пополните словарный запас на индивидуальных уроках с преподавателем. Мы подскажем, как правильно поставить цели и подберем для вас идеальный обучающий курс. Затем вас ждет путь к новым достижениям!"
            to="https://speakswift.ru/course3/"
            labelText="от 9 до $20"
          />
        </li>
        <li className="lessons__item">
          <LessonCard
            src={lesson2}
            alt="вопрос в облаке"
            header="Курсы английского"
            description="Курсы английского подходят для учащихся любого уровня и предлагают обучение в небольших группах для более эффективного взаимодействия и внимания к каждому студенту. Программа курсов охватывает все аспекты языка, включая грамматику, словарный запас, разговорную практику и понимание на слух."
            to="/"
            labelText="$5"
          />
        </li>
        <li className="lessons__item">
          <LessonCard
            src={lesson3}
            alt="секундомер"
            header="Курс интенсив"
            description="Интенсивный курс английского предлагает уникальную возможность значительно улучшить уровень владения языком за короткий период времени. Наш метод погружения в языковую среду и акцент на практическое применение знаний позволяют студентам быстро преодолеть языковой барьер и выйти на новый уровень владения английским."
            to="/"
            labelText="$15"
          />
        </li>
        <li className="lessons__item">
          <LessonCard
            src={lesson4}
            alt="рюкзак"
            header="Занятия для детей"
            description="Индивидуальные и групповые занятия для детей любого возраста! \nНаши занятия - это отличная возможность изучить язык, не теряя времени на походы или поездки в школу. Программы составлены для разных групп с учетом возрастных способностей и уровня подготовки."
            to="/"
            labelText="от 9 до $20"
          />
        </li>
      </ul>
    </section>
  );
}
