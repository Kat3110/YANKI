import style from './style.css';
import Inst from '../../assets/icons/inst.svg'
import Telegram from '../../assets/icons/telega.svg'

const Footer = () => (
    <footer className={style.footer}>
        <nav className={style.list}>
            <div className={style.menu}>
                <h2 className={style.title}>КОМПАНИЯ</h2>
                <ul className={style.menulist}>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="./about">О нас</a>
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="#">Контакты</a>
                    </li>
                </ul>
            </div>
            <div className={style.menu}>
                <h2 className={style.title}>ПОЛЕЗНОЕ</h2>
                <ul className={style.menulist}>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="#"
                        >Оплата и доставка</a
                        >
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="#"
                        >Условия возврата</a
                        >
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="#"
                        >Бонусная система</a
                        >
                    </li>
                </ul>
            </div>

            <div className={style.menu}>
                <h2 className={style.title}>ПОКУПАТЕЛЮ</h2>
                <ul className={style.menulist}>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="">Избранное</a>
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="">Публичная оферта</a>
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="#"
                        >Политика конфиденциальности</a
                        >
                    </li>
                </ul>
            </div>

            <div className={style.menu}>
                <h2 className={style.title}>КОНТАКТЫ</h2>
                <ul className={style.menulist}>
                    <li className={style.listtext}>
                        <div className={style.imgdisplay}>
                            <a
                                className={style.listlink}
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <div className={style.listlinkbox}>
                                    <img
                                        className={style.listlinkbox}
                                        src={Inst}
                                        alt="соцсети"
                                    /></div
                                >
                            </a>
                            <a
                                className={style.listlink}
                                href="https://web.telegram.org/"
                                target="_blank"
                            >
                                <div className={style.listlinkbox}>
                                    <img
                                        className={style.listlinkbox}
                                        src={Telegram}
                                        alt="соцсети"
                                    /></div
                                >
                            </a>
                        </div>
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="tel:+380730963644">
                            +38(073) 096 36 44
                        </a>
                    </li>
                    <li className={style.listtext}>
                        <a className={style.listlink} href="mailto:info@yanki.com">
                            info@yanki.com
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <span className={style.reserved}>&#169; 2022 Yanki. All rights reserved</span>
    </footer>
);

export default Footer;