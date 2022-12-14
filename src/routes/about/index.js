import {h} from 'preact';
import style from './style.css'
import Header from "../../components/header";
import Footer from "../../components/footer";


const About = () => (
    <>
        <Header />
        <section className={style.about}>
            <h1 className={style.title}>ВЕЧНО МОЛОДОЕ СООБЩЕСТВО</h1>
            <p className={style.subtitle}>Цель YANKI — создавать одежду для молодых людей, свободных от стереотипов,
                ценящих самовыражение и
                индивидуальность. При создании коллекций бренд следует последним модным тенденциям: дизайнеры черпают
                вдохновение в уличной моде и клубной культуре. Модели YANKI удобны и практичны. Их можно приобрести в
                магазинах бренда по самым выгодным ценам.</p>
            <p className={style.subtitle}>YANKI развивается вместе с клиентами, всегда внимательно следит за новыми
                технологиями, общественной жизнью,
                художественными и музыкальными трендами. Это отражается не только в дизайне одежды, но и в оформлении
                магазинов.. Предлагаемый ассортимент постоянно обновляется: два раза в неделю наши магазины получают
                поставки новых товаров.</p>
        </section>
        <Footer />
    </>
);

export default About;
