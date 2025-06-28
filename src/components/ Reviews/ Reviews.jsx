import "./ Reviews.css";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__main-header">
        <h2 className="reviews__title">
          Отзывы наших
          <span className="reviews__title-span"> учеников</span>
        </h2>
        <p className="reviews__description">
          Узнайте, что говорят наши довольные ученики! Погрузитесь в их
          впечатления о нашей онлайн-школе английского языка и узнайте, как они
          достигли своих языковых целей, благодаря качественному обучению и
          поддержке нашей команды преподавателей.
        </p>
      </div>

      <ul className="reviews__list">
        <li className="reviews__item">
          <iframe
            className="reviews__video"
            title="Отзыв ученика 1"
            src="https://vk.com/video_ext.php?oid=728984147&id=456239024&hd=3&hash=6e6a84afc476f8b2"
            width="308"
            height="550"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </li>

        <li className="reviews__item">
          <iframe
            className="reviews__video"
            title="Отзыв ученика 2"
            src="https://vk.com/video_ext.php?oid=728984147&id=456239025&hd=3&hash=f8884d98748d987c"
            width="308"
            height="550"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </li>

        <li className="reviews__item">
          <iframe
            className="reviews__video"
            title="Отзыв ученика 3"
            src="https://vk.com/video_ext.php?oid=728984147&id=456239023&hd=3&hash=1d01f4a524bba099"
            width="308"
            height="550"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </li>

        <li className="reviews__item">
          <iframe
            className="reviews__video"
            title="Отзыв ученика 4"
            src="https://vk.com/video_ext.php?oid=728984147&id=456239026&hd=3&hash=5676d6d94c2d0762"
            width="308"
            height="550"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </section>
  );
}
