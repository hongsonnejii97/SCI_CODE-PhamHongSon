// Scroll to anchors
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.menu, .regist, .siteHeaderLogo, .regft').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.siteHeader__item, .regist a, .siteHeaderLogo a, .regft a');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}()); 


// Lazy LDP
window.addEventListener("scroll", function () { 
  myLoad('section','loaded');
}); 

var customize1 = tns({
  container: '.slide_thumb1',
  items: 1,
  controlsContainer: '#customize-controls',
  navContainer: '#customize-thumbnails',
  navAsThumbnails: true,
  autoplay: false,
  autoplayTimeout: 1000,
  gutter: 10,
});
var customize2 = tns({
  container: '.slide_thumb2',
  items: 1,
  controlsContainer: '#customize-controls',
  navContainer: '#customize-thumbnails2',
  navAsThumbnails: true,
  autoplay: false,
  autoplayTimeout: 1000,
  gutter: 10,
});
var customize3 = tns({
  container: '.slide_thumb3',
  items: 1,
  controlsContainer: '#customize-controls',
  navContainer: '#customize-thumbnails3',
  navAsThumbnails: true,
  autoplay: false,
  autoplayTimeout: 1000,
  gutter: 10,
});
var customize4 = tns({
  container: '.slide_thumb4',
  items: 1,
  controlsContainer: '#customize-controls',
  navAsThumbnails: true,
  autoplay: false,
  autoplayTimeout: 1000,
  gutter: 10,
});		


// Add Class : 1. Name Button / 2. Name Object / 3. Name Class Add
addClass('.siteHeaderNav','.siteHeaderMain','active');
addClass('.siteHeaderNav','.siteHeader-bg','active');

// Remove Class : 1. Name Button / 2. Name Object / 3. Name Class Add
removeClass('.siteHeader-bg','.siteHeaderMain','active');
removeClass('.siteHeader-bg','.siteHeader-bg','active');
removeClass('.siteHeader a','.siteHeaderMain','active');
removeClass('.siteHeader a','.siteHeader-bg','active');

const btn_reg = document.getElementsByClassName('reg');
const modal_map = document.getElementById('modal-map');
const btn_call = document.getElementsByClassName('call');

for (const item of btn_reg) {
    item.addEventListener("click", ()=>{
        modal_map.style.display = 'none';
    });
}
for (const item of btn_call) {
    item.addEventListener("click", ()=>{
        modal_map.style.display = 'none';
    });
}


// Tab Block Content

var tabLink1s = document.querySelectorAll(".tab2_link");
var tabContent1 = document.querySelectorAll(".tab2_content");

tabLink1s.forEach(function(el) {
   el.addEventListener("click", openTab1s);
});

function openTab1s(el) {
   var btnTarget = el.currentTarget;
   var x = btnTarget.dataset.hash;

   tabContent1.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLink1s.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + x).classList.add("active");
   
   btnTarget.classList.add("active");
}


// Registbutton modal

const registButton = document.getElementsByClassName('registButton');
const modal = document.getElementsByClassName('modal');

for( const registBtn of registButton ){
  registBtn.addEventListener("click", popHidden);
}

function popHidden(){
  for( const mod of modal ){
    mod.style.display = "none";
  }
}


// Lazyload img

const images = document.querySelectorAll('img[data-src]');
const config = {
  rootMargin: '50px 0px',
  threshold: 0.01
};
let observer;
if ('IntersectionObserver' in window) {
  observer = new IntersectionObserver(onChange, config);
  images.forEach(img => observer.observe(img));
} else {
  console.log('%cIntersection Observers not supported', 'color: red');
  images.forEach(image => loadImage(image));
}

const loadImage = image => {
  image.classList.add('fade-in');
  image.src = image.dataset.src;
}

function onChange(changes, observer) {
  changes.forEach(change => {
  if (change.intersectionRatio > 0) {
  // Stop watching and load the image
  loadImage(change.target);
  observer.unobserve(change.target);
}
});
}


// function scrollAct(){
//   const itemMenu = document.getElementsByClassName('siteHeader__item');
//   const section = document.querySelectorAll('section');
//   let winTopp = document.documentElement.scrollTop;

//   for (let i = 0; i < itemMenu.length; i++){
//       let pos = section[i].offsetTop;
//       if (pos < winTopp) {
//         itemMenu[i].classList.add('active');
//       }
//       else{
//         itemMenu[i].classList.remove('active');
//       }
//   }
// }

// window.addEventListener("scroll", function () { 
//   scrollAct();
// }); 
