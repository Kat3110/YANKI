import {h} from 'preact';
import style from './style.css'
import Header from "../../components/header";
import Card from "../../components/Card";
import Coat2 from "../../assets/catalog/coat2.png"
import FurCoats2 from "../../assets/catalog/FurCoats2.png"
import Jacket2 from "../../assets/catalog/jackets2.png"
import Parks2 from "../../assets/catalog/parks2.png"


const Catalog = () => (
    <>
        <Header />
        <section className={style.catalog}>
            <div className={style.catalogBox}>
                <div className={style.catalogList}>
                    <a href="#" target="_blank">New
                    </a>
                    <a href="#" target="_blank">Bestsellers</a>
                    <a href="#" target="_blank">Верхняя одежда
                    </a>
                    <a href="#" target="_blank">Шубы</a>
                    <a href="#" target="_blank">Тренчи
                    </a>
                    <a href="#" target="_blank">Пальто</a>
                    <a href="#" target="_blank">Пуховики и жилеты
                    </a>
                    <a href="#" target="_blank">Sale</a>
                    <a href="#" target="_blank">Посмотреть всё</a>
                </div>
                <div className={style.cards}>
                    <Card
                        img={Jacket2}
                        name={'Белая куртка'}
                        cost={'2900 грв'}
                    />
                    <Card
                        img={Coat2}
                        name={'Синее пальто'}
                        cost={'3150 грв'}
                    />
                    <Card
                        img={FurCoats2}
                        name={'Бежевая шуба'}
                        cost={'4200 грв'}
                    />
                    <Card
                        img={Parks2}
                        name={'Синяя парка'}
                        cost={'2900 грв'}
                    />

                    <Card
                        img={Coat2}
                        name={'Синее пальто'}
                        cost={'3150 грв'}
                    />
                    <Card
                        img={Parks2}
                        name={'Синяя парка'}
                        cost={'2900 грв'}
                    />
                    <Card
                        img={Jacket2}
                        name={'Белая куртка'}
                        cost={'2900 грв'}
                    />
                    <Card
                        img={FurCoats2}
                        name={'Бежевая шуба'}
                        cost={'4200 грв'}
                    />

                    <Card
                        img={FurCoats2}
                        name={'Бежевая шуба'}
                        cost={'4200 грв'}
                    />
                    <Card
                        img={Jacket2}
                        name={'Белая куртка'}
                        cost={'2900 грв'}
                    />
                    <Card
                        img={Parks2}
                        name={'Синяя парка'}
                        cost={'2900 грв'}
                    />
                    <Card
                        img={Coat2}
                        name={'Синее пальто'}
                        cost={'3150 грв'}
                    />
                </div>
            </div>
        </section>
    </>
);

export default Catalog;