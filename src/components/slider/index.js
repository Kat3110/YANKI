import {h} from 'preact';
import Slider from "react-slick";
import style from './style.css'
import Jacket from '../../assets/jackets.png'
import Coat from '../../assets/coat.png'
import Parks from '../../assets/parks.png'
import FurCoats from '../../assets/FurCoats.png'


export default function SimpleSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
        return (
            <div>
                <Slider {...settings}>
                    <div className={style.item}>
                        <a className={style.link} href="#">
                            <img className={style.img} src={Jacket} alt="куртки"/>
                            <span className={style.span}>Куртки</span>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Coat}
                            alt="пальто"
                        /><span className={style.span}>Пальто</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Parks}
                            alt="парки"
                        /><span className={style.span}>Парки</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={FurCoats}
                            alt="шубы"
                        /><span className={style.span}>Шубы</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Jacket}
                            alt="куртки"
                        /><span className={style.span}>Куртки</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Jacket}
                            alt="куртки"
                        /><span className={style.span}>Куртки</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Coat}
                            alt="пальто"
                        /><span className={style.span}>Пальто</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Parks}
                            alt="парки"
                        /><span className={style.span}>Парки</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={FurCoats}
                            alt="шубы"
                        /><span className={style.span}>Шубы</span></a
                        >
                    </div>
                    <div className={style.item}>
                        <a className={style.link} href="#"
                        ><img
                            className={style.img}
                            src={Jacket}
                            alt="куртки"
                        /><span className={style.span}>Куртки</span></a
                        >
                    </div>
                </Slider>
            </div>
        );
}


// const Slider = () => (
//     <div className={style.slider}>
//         <div className={style.wrapper}>
//             <div className={style.container}>
//                 <div className={style.track}>
//                     <div className={style.item}>
//                         <a className={style.link} href="#"
//                         ><img
//                             className={style.img}
//                             src={Jacket}
//                             alt="куртки"
//                         /><span className={style.span}>Куртки</span></a
//                         >
//                     </div>
//                     <div className={style.item}>
//                         <a className={style.link} href="#"
//                         ><img
//                             className={style.img}
//                             src={Coat}
//                             alt="пальто"
//                         /><span className={style.span}>Пальто</span></a
//                         >
//                     </div>
//                  <div className={style.item}>
//                         <a className={style.link} href="#"
//                         ><img
//                             className={style.img}
//                             src={Parks}
//                             alt="парки"
//                         /><span className={style.span}>Парки</span></a
//                         >
//                     </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={FurCoats}
//         alt="шубы"
//     /><span className={style.span}>Шубы</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={Jacket}
//         alt="куртки"
//     /><span className={style.span}>Куртки</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={Jacket}
//         alt="куртки"
//     /><span className={style.span}>Куртки</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={Coat}
//         alt="пальто"
//     /><span className={style.span}>Пальто</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={Parks}
//         alt="парки"
//     /><span className={style.span}>Парки</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={FurCoats}
//         alt="шубы"
//     /><span className={style.span}>Шубы</span></a
//     >
// </div>
// <div className={style.item}>
//     <a className={style.link} href="#"
//     ><img
//         className={style.img}
//         src={Jacket}
//         alt="куртки"
//     /><span className={style.span}>Куртки</span></a
//     >
// </div>
//                 </div>
//             </div>
//             <div className={style.buttons}>
//                 <button
//                     className={style.prev}
//                 ></button>
//                 <button
//                     className={style.next}></button>
//             </div>
//         </div>
//     </div>
// );
//
// export default Slider;

// const slidesToScroll = 1
// const container = document.querySelector('.container')
// const track = document.querySelector('.track')
// const btnPrev = document.querySelector('.prev')
// const btnNext = document.querySelector('.next')
// const items = document.querySelectorAll('.item')
// const itemsCount = items.length
// let itemWidth = container.clientWidth / slidesToShow
// const movePosition = slidesToScroll * itemWidth
//
// items.forEach((item) => {
//     item.style.maxWidth = `${itemWidth}px`
//     item.style.minWidth = `${itemWidth}px`
// })
//
// btnNext.addEventListener('click', () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
//     setPosition()
//     checkBtns()
// })
//
// btnPrev.addEventListener('click', () => {
//     const itemsLeft = Math.abs(position) / itemWidth
//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
//     setPosition()
//     checkBtns()
// })
//
// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`
// }
//
// const checkBtns = () => {
//     if (position === 0) {
//         btnPrev.style.display = 'none'
//     } else if (position === -(itemsCount - slidesToShow) * itemWidth) {
//         btnNext.style.display = 'none'
//     } else {
//         btnNext.style.display = 'block'
//         btnPrev.style.display = 'block'
//     }
//     checkBtns()
// }

