/*$(document).ready(function () {
	$('.slider').slick({
    arrows: false,
    dotsClass: 'slick-dots dots',
    dots: true
  });
});*/

/*window.onload = function () {


  var input = document.querySelector(".input");
  var button = document.querySelector(".button");
  var tablinks = document.querySelectorAll(".tablinks");
  var tabcontent = document.querySelectorAll(".tabcontent");
  var tabcontents = [].slice.call(tabcontent);
  var tablinkss = [].slice.call(tablinks);

  var attributes = {
    value: 'data-value'
  };

  var all = document.querySelectorAll(".tabs__link_all");



  // console.log(tabcontent);

  tablinks.forEach.call(tablinks, function (element) {

    element.addEventListener('click', function (event) {

      tablinks.forEach(function (el) {

        el.classList.remove('active');

      });

      event.target.classList.add('active');
      // console.log(element.getAttribute(attributes.value));



      var target = tabcontents.find(function (el) {
        return element.getAttribute(attributes.value) === el.getAttribute(attributes.value);
      });

      tabcontent.forEach(function (el) {
        el.classList.remove('display');
      });

      target.classList.add('display');
    });

  });


  all.forEach.call(all, function (el) {
    el.addEventListener('click', function (event) {

      tabcontent.forEach(function (el) {
        console.log(el.classList);
        el.classList.add('display');

      });
    });
  });

};*/




