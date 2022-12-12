import style from "./style.css";
import SvgLike from "../SvgComponent/SvgComponentLike";

const Card = (props) => (
    <>
        <div className={style.cardBox}>
            <button className={style.cardBoxFavourites} type="button">
                <SvgLike />
            </button>
            <img src={props.img} alt="куртка" className={style.cardBoxImg} />
            <div className={style.cardBoxGroup}>
                <h2 className={style.cardBoxTitle}>{props.name}</h2>
                <p className={style.cardBoxPrice}>{props.cost}</p>
                <ul className={style.cardBoxList}>

                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>XXS</button>
                    </li>
                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>XXS</button>
                    </li>
                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>XS</button>
                    </li>
                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>S</button>
                    </li>
                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>M</button>
                    </li>
                    <li className={style.cardBoxItem}>
                        <button className={style.cardBoxItemBtn}>L</button>
                    </li>
                </ul>
                <div className={style.cardColors}>
                    <button id="ColorWhite" className={style.cardColorsSelector} />
                    <button id="ColorBlue" className={style.cardColorsSelector} />
                    <button id="ColorYellow" className={style.cardColorsSelector} />
                </div>
            </div>
        </div>
    </>
);
export default Card;