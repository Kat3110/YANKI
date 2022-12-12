import {h} from 'preact';
import {Link} from 'preact-router/match';
import style from './style.css';
import logo from "../../assets/icons/YANKI.svg";
import SvgSearch from "../SvgComponent/SvgComponentSearch";
import SvgAccount from "../SvgComponent/SvgComponentPersonalAccount";
import SvgLike from "../SvgComponent/SvgComponentLike";
import SvgBasket from "../SvgComponent/SvgComponentBasket";


const HeaderMain = () => (
    <header className={style.headerMain}>
        <nav className={style.listItem}>
            <div>
                <Link className={style.listItemLink} href="/new">new</Link>
                <Link className={style.listItemLink} href="/catalog">каталог</Link>
                <Link className={style.listItemLink} href="/about">о наc</Link>
            </div>

            <Link className={style.listItemLink} href="/">
                <img src={logo} alt="логотип" />
            </Link>

            <div>
                <Link className={style.listItemLink} href="/">
                    <SvgSearch />
                </Link>
                <Link className={style.listItemLink} href="/">
                    <SvgAccount />
                </Link>
                <Link className={style.listItemLink} href="/">
                    <SvgLike />
                </Link>
                <Link className={style.listItemLink} href="/">
                    <SvgBasket />
                </Link>
            </div>
        </nav>
    </header>);

export default HeaderMain;
