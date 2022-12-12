import style from "./style.css";
import SvgLike from "../SvgComponent/SvgComponentLike";
import Coat from "../../assets/coat.png"
import FurCoats from "../../assets/FurCoats.png"
import Jacket from "../../assets/jackets.png"
import Parks from "../../assets/parks.png"


const Card = () => (
    <>
        <div className={style.cardBox}>
            <button className={style.cardBoxFavourites} type="button">
                <SvgLike />
            </button>
            <img src={Jacket} alt="куртка" className={style.cardBoxImg}/>
            <div className={style.cardBoxGroup}>
                <h2 className={style.cardBoxTitle}>Белая куртка</h2>
                <p className={style.cardBoxPrice}>2900 грн</p>
                <ul className={style.cardBoxList}>
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
                    <button className="cardColorsSelector test"></button>
                    <button className={style.cardColorsSelector}></button>
                    <button className={style.cardColorsSelector}></button>
                </div>
            </div>
        </div>
    </>
);
export default Card;