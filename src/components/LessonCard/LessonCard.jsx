import './LessonCard.css';
import { Link } from "react-router-dom";

export default function LessonCard({ src, alt, header, description, to, labelText }) {
    return (
        <div className='lessoncard'>
            <img className='lessoncard__image' src={src} alt={alt} />
            <div className='lessoncard__textbox'>
                <h3 className='lessoncard__header'>{header}</h3>
                <p className='lessoncard__description'>{description}</p>
            </div>
            <Link className='lessoncard__link' to={to} target='_blank'>Подробнее</Link>
            <label className='lessoncard__label'>{labelText}</label>
        </div>
    );
}