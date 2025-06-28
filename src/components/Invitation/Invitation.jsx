import './Invitation.css'
import onChair from '../../Image/Invitation/onChair.png'

export default function Invitation() {
    return (
      <section className="invitation">
        <div className='invitattion__main-box'>
            <h2 className='invitation__title'>Пройдите урок английского онлайн бесплатно в удобное для вас время</h2>
            <ul className='invitation__list'>
                <li className='invitation__item'>
                    <p className='invitation__text'>Покажем, как проходит обучение</p>
                </li>
                <li className='invitation__item'>
                    <p className='invitation__text'>Определим ваш уровень</p>
                </li>
                <li className='invitation__item'>
                    <p className='invitation__text'>Поставим цели и определим их достижения</p>
                </li>
            </ul>
            <button className='invitation__button'>Отправить Заявку</button>
            <img className='invitation__image' src={onChair} alt='девушка на стуле' />
        </div>
      </section>
    );
  }