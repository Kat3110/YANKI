import style from './style.css'

const Subscribe = () => (
    <section className={style.subscribe}>
        <h2 className={style.title}>Узнайте первым о новинках</h2>
        <div className={style.inputGroup}>
            <input className={style.input} type="text" />
            <label className={style.label}>Ваш e-mail*</label>
        </div>
        <button className={style.btn} type='button'>Подписаться</button>
        <p className={style.subtitle}>
            Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих<br />
            персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p>
    </section>
);

export default Subscribe;
