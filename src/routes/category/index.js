import {h} from 'preact';
import style from './index.css'
import SimpleSlider from "../../components/slider";


const Category = () => (

    <section className='category'>

        <div className={style.category}>
            <h1 className={style.title}>Категории</h1>
            <SimpleSlider />
        </div>

    </section>
);

export default Category;
