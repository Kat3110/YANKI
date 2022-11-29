
import style from './style.css'

const Subscribe = () => (
    <section className={style.subscribe}>
        <h2 className={style.title}>Узнайте первым о новинках</h2>
        <input className={style.input} type="text" placeholder='Ваш e-mail*'/>
        <button className={style.btn} type='button'>Подписаться</button>
        <p className={style.subtitle}>
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих< br/>
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p>
    </section>
);

export default Subscribe;
