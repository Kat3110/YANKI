import {h} from 'preact';
import style from './style.css'
import Header from "../../components/header";
import Card from "../../components/Card";


const Catalog = () => (
    <>
        <Header />
        <section className={style.catalog}>
            <div className={style.box}>
    <Card />
            </div>
        </section>
    </>
);

export default Catalog;