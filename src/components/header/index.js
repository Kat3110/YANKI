import {h} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.css';
import logo from "../../../../../Desktop/YANKI/src/assets/icons/YANKI2.svg";
import SvgSearch from "../SvgComponent/SvgComponentSearch";
import SvgLike from "../SvgComponent/SvgComponentLike";
import SvgAccount from "../SvgComponent/SvgComponentPersonalAccount";
import SvgBasket from "../SvgComponent/SvgComponentBasket";


const Header = () => (
    <header className={style.header}>
        <nav className={style.listItem}>
            <div>
                <Link className={style.listItemLink} href="/new">new</Link>
                <Link className={style.listItemLink} href="/catalog">каталог</Link>
                <Link className={style.listItemLink} href="/about">о наc</Link>
            </div>

            <Link className={style.listItemLink} href="/Users/user/Desktop/YANKI/src/routes">
                <img className={style.logo} src={logo} alt="логотип" />
            </Link>

            <div>
                <Link className={style.listItemLink} href="/Users/user/Desktop/YANKI/src/routes">
                    <SvgSearch />
                </Link>
                <Link className={style.listItemLink} href="/Users/user/Desktop/YANKI/src/routes">
                    <SvgAccount />
                </Link>
                <Link className={style.listItemLink} href="/Users/user/Desktop/YANKI/src/routes">
                    <SvgLike />
                </Link>
                <Link className={style.listItemLink} href="/Users/user/Desktop/YANKI/src/routes">
                    <SvgBasket />
                </Link>
            </div>
        </nav>
    </header>);

export default Header;
