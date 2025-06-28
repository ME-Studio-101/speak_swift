import './TeacherCard.css'

export default function TeacherCard({ src, alt, name, description, profession}){
    return(
        <div className='teachercard'>
            <img className='teachercard__image' src={src} alt={alt} />
            <div className='teachercard__container'>
                <h3 className='teachercard__name'>{name}</h3>
                <span className='teachercard__profession'>{profession}</span>
                <p className='teachercard__description'>{description}</p>
            </div>
        </div>
    );
}