import "./smoothTransition";
import sendRequest from "./fetchData";
import changeFeatures from "./changeFeatures";
import { smoothTransition } from "./smoothTransition";



//----------------------------------------------
smoothTransition();

//---------------Button Up------------------------

(function() {
  const scrollBtnUp = document.getElementById("scrollTop");
  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      scrollBtnUp.style.visibility = "visible";
    }
    if (scrolled < coords) {
      scrollBtnUp.style.visibility = "hidden";
    }
  }
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -10);
      setTimeout(backToTop, 0);
    }
  }
  window.addEventListener('scroll', trackScroll);
  scrollBtnUp.addEventListener('click', backToTop);
  scrollBtnUp.addEventListener("touchstart", function(){}, true);
})();

//--------------Burger menu--------------------
const burger_btn = document.querySelector('.menu-burger');
const listMenu = document.querySelector('.list_wrapper');

burger_btn.addEventListener('click',(e) =>  {
  burger_btn.classList.toggle("active");
  listMenu.classList.toggle("list_active");
});


// -------------------Change features--------------------
const placeForChangeElements = document.getElementById("features");
const elementsList = placeForChangeElements.querySelectorAll(".list-features__item");
const btnFindMore = document.querySelector("#findMore");
let randomArr;

function addElementsToList(arr, listItems) {
  let img = [];
  let title = [];
  for (let i = 0; i < listItems.length; i++) {
    img[i] = listItems[i].querySelector("img");
    title[i] = listItems[i].querySelector("h3");
    img[i].setAttribute("src", arr[i].thumbnailUrl);
    title[i].innerHTML = arr[i].title;
  }
}

sendRequest.then((data) => {
  btnFindMore.addEventListener("click", () => {
    randomArr = changeFeatures(data);
    addElementsToList(randomArr, elementsList);
  });
})
  .catch(() => {
    alert('Error function changeFeatures()!');
  });

//-----------------Slider TESTIMONIALS-----------------------------


const sliderTestimonials = () => {

  const sliderListImg = document.querySelectorAll(".testimonials-section__img .disable");
  const sliderListText = document.querySelectorAll(".testimonials-section__review .hide");
  const checkBox = document.querySelectorAll(".checkbox-group .fake-input");

  function TogglringClasses(list) {
    this.secondClass = list[0].classList[1];
  }
  const img = new TogglringClasses(sliderListImg);
  const text = new TogglringClasses(sliderListText);
  const check = new TogglringClasses(checkBox);

  let currentSlide = 0;

  function nextSlide(lists, lists1, lists2, classesKit, classesKit1, checkList) {
    currentSlide = (currentSlide + 1) % lists.length;
    
    lists.forEach(function (list, idx) {
      list.classList.remove(`${classesKit.secondClass}`);
      if (idx === currentSlide) {
        list.classList.add(`${classesKit.secondClass}`);
      }
    });
    lists1.forEach(function (list, idx) {
      list.classList.remove(`${classesKit1.secondClass}`);
      if (idx === currentSlide) {
        list.classList.add(`${classesKit1.secondClass}`);
      }
    });
    lists2.forEach(function (list, idx) {
      list.classList.remove(`${checkList.secondClass}`);
      if (idx === currentSlide) {
        list.classList.add(`${checkList.secondClass}`);
      }
    });
  }
  setInterval(nextSlide, 7000, sliderListImg, sliderListText, checkBox, img, text, check);
}
sliderTestimonials();

