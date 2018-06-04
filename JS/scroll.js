function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

var btns = document.querySelectorAll('.nav');
var sections = document.querySelectorAll('.js-section');

btns[0].addEventListener('click', function () {
  scrollIt(sections[0]);
});

btns[1].addEventListener('click', function () {
  scrollIt(sections[1]);
});

btns[2].addEventListener('click', function () {
  scrollIt(sections[2]);
});

btns[3].addEventListener('click', function () {
  scrollIt(sections[3]);
});
