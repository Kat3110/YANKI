import {h} from 'preact';
import style from './style.css';
import HeaderMain from "../../components/header-main";
import Colletion from "../../components/new-collection";
import Category from "../category";
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer";

const Main = () => (
    <>
        <div className={style.main}>
            <HeaderMain />
            <Colletion />
        </div>
        <Category />
        <Subscribe />
        <Footer />
    </>
);

export default Main;
