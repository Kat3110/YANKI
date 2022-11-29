import {h} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.css';
import logo from "../../assets/icons/YANKI.svg";
import search from "../../assets/icons/loupe.svg";
import favourites from "../../assets/icons/like.svg";
import user from "../../assets/icons/Frame.svg";
import basket from "../../assets/icons/basket.svg";


const HeaderMain = () => (
    <header className={style.header}>
        <nav className={style.listItem}>
            <div>
                <Link className={style.listItemLink} href="/new">new</Link>
                <Link className={style.listItemLink} href="/catalog">каталог</Link>
                <Link className={style.listItemLink} href="/about">о наc</Link>
            </div>

            <Link className={style.listItemLink} href="/">
                <img src={logo} alt="логотип"/>
            </Link>

            <div>
                <Link className={style.listItemLink} href="/">
                    <img src={search} alt="поиск"/>
                </Link>
                <Link className={style.listItemLink} href="/">
                    <img src={user} alt="личный кабинет"/>
                </Link>
                <Link className={style.listItemLink} href="/">
                    <img src={favourites} alt="избранное"/>
                </Link>
                <Link className={style.listItemLink} href="/">
                    <img src={basket} alt="корзина"/>
                </Link>
            </div>
        </nav>
    </header>);

export default HeaderMain;
