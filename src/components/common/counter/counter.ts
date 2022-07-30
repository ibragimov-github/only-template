import { fromEvent } from 'rxjs';
import Swiper, {Navigation} from 'swiper';

export const counter = ():any => {
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    const display = document.querySelector('.result');
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const res = document.querySelector('.res');
    const nav = document.querySelectorAll('.navigate');
    const remove = document.querySelector('.decrement');
    const add = document.querySelector('.increment');
    Swiper.use([Navigation]);
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    res.textContent = String(counter1)
    const swiperWindow = document.querySelector('.swiper-container');
    fromEvent(close, 'click').subscribe(()=> swiperWindow.classList.remove('active'))
    fromEvent(open, 'click').subscribe(()=> {
        swiperWindow.classList.add('active');
    })
    nav.forEach((el)=> {
      fromEvent(el, 'click').subscribe(()=> {
        console.log(swiper.activeIndex)
        if(swiper.activeIndex === 0) {
          display.textContent = String(counter1);
          res.textContent = String(counter1)
        }
        if(swiper.activeIndex === 1) {
          display.textContent = String(counter2);
          res.textContent = String(counter2)
        }
        if(swiper.activeIndex === 2) {
          display.textContent = String(counter3);
          res.textContent = String(counter3)
        }
      })
    })
    display.textContent = String(counter1);

    fromEvent(add, 'click').subscribe(()=> {
      if (swiper.activeIndex === 0) {
        counter1 ++
        display.textContent = String(counter1);
        res.textContent = String(counter1)
      }
      if (swiper.activeIndex === 1) {
        counter2 ++
        display.textContent = String(counter2);
        res.textContent = String(counter2)
      }
      if (swiper.activeIndex === 2) {
        counter3 ++
        display.textContent = String(counter3);
        res.textContent = String(counter3)
      }
    })
}