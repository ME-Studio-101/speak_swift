import "./Answer.css";
import image1 from '../../Image/Answer/yellow_hoodie.png';
import image2 from '../../Image/Answer/Layer.png';
import image3 from '../../Image/Answer/Buisness.png';


export default function Answer() {
  return (
    <section className="answer">
        <div className="answer__main-container">
            <h2 className="answer__title">Кому подходит <span className="answer__title-span">обучение?</span></h2>
            <p className="answer__description">Для всех возрастов и целей! Наша онлайн-школа английского предлагает программы обучения как взрослым, так и детям, а также корпоративным клиентам. Независимо от вашей цели или уровня, у нас есть подходящий для вас курс!</p>
            <ul className="answer__list">
                <li className="answer__item">
                    <h3 className="answer__item-title">Взрослым</h3>
                    <p className="answer__item-description">Английский для карьеры, путешествий и общения</p>
                    <img className="answer__item-image1" src={image1} alt='пункт 1'/>
                </li>

                <li className="answer__item">
                    <h3 className="answer__item-title">Детям</h3>
                    <p className="answer__item-description">Английский для развития, подготовки к тестам и экзаменам</p>
                    <img className="answer__item-image2" src={image2} alt='пункт 2'/>
                </li>

                <li className="answer__item">
                    <h3 className="answer__item-title">Компаниям</h3>
                    <p className="answer__item-description">Корпоративные курсы с учетом специфики бизнеса</p>
                    <img className="answer__item-image3" src={image3} alt='пункт 3'/>
                </li>
            </ul>
        </div>
    </section>
  )
}